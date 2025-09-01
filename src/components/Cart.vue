<template>
  <section class="cart" :class="{ active: open }" id="cart">
    <div class="cart-header">
      <h5 class="m-0"><i class="fas fa-shopping-bag"></i> عربة التسوق</h5>
      <button class="btn btn-danger btn-sm" @click="open = false">&times;</button>
    </div>
    <div class="cart-body">
      <div v-if="!items.length" class="cart-empty">لا توجد منتجات بعد، الرجاء اختيار منتج إلى السلة.</div>
      <div v-for="(item, i) in items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name">
        <div>
          <div class="fw-semibold">{{ item.name }}</div>
          <div class="small text-secondary">{{ item.price }} د.إ × {{ item.quantity }}</div>
        </div>
        <div class="d-flex flex-column align-items-end gap-1">
          <div class="controls d-flex gap-1">
            <button @click="updateQty(i,-1)">-</button>
            <span class="px-2">{{ item.quantity }}</span>
            <button @click="updateQty(i,1)">+</button>
          </div>
          <div class="small">{{ (item.price * item.quantity).toFixed(2) }} د.إ</div>
          <button class="btn btn-sm btn-outline-danger" @click="remove(i)">حذف</button>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <a class="btn btn-custom w-100 total-line" :href="checkoutUrl"><span>تسجيل الطلب</span><span>{{ subtotal.toFixed(2) }}</span></a>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCart } from '../store/cart'
import { useTracking } from '../composables/useTracking'

const open = ref(false)
const cart = useCart()
const { event, withParams } = useTracking()
const items = cart.items
const subtotal = cart.subtotal

const checkoutUrl = computed(() => withParams('/confirm-order.html'))

function remove(i){ cart.remove(i) }
function updateQty(i, d){ cart.updateQty(i, d) }

function toggle(val){ open.value = typeof val === 'boolean' ? val : !open.value }

defineExpose({ toggle })

onMounted(() => {
  // expose in window for demo (optional)
  window.__toggleCart = toggle
})
</script>
