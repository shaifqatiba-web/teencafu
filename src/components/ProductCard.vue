<template>
  <div class="product-card h-100">
    <img :src="p.image" :alt="p.name" />
    <div class="p-3 d-flex flex-column gap-2 flex-grow-1">
      <div class="product-title">{{ p.name }}</div>
      <div class="product-description">{{ p.desc }}</div>
      <div class="price-qty mt-auto">
        <div class="fw-bold">{{ p.price }} د.إ</div>
        <div class="qty">
          <button class="btn btn-sm btn-secondary" @click="dec">−</button>
          <input type="number" class="form-control form-control-sm" min="1" v-model.number="qty" aria-label="الكمية" />
          <button class="btn btn-sm btn-secondary" @click="inc">+</button>
        </div>
      </div>
      <button class="btn btn-custom w-100" :disabled="p.disabled" @click="add">
        {{ p.disabled ? 'قريباً' : 'أضف إلى السلة' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ p: Object })
const emit = defineEmits(['add'])
const qty = ref(1)
function inc(){ qty.value++ }
function dec(){ qty.value = Math.max(1, qty.value - 1) }
function add(){
  if(props.p.disabled) return
  emit('add', { ...props.p, quantity: qty.value })
}
</script>
