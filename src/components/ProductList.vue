<template>
  <main class="container py-4" id="home">
    <div class="row g-3" id="product-list">
      <div class="col-6 col-md-4" v-for="p in filtered" :key="p.id">
        <ProductCard :p="p" @add="onAdd" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { products } from '../data/products'
import ProductCard from './ProductCard.vue'
import { useCart } from '../store/cart'
import { useTracking } from '../composables/useTracking'

const emit = defineEmits(['add-to-cart'])
const props = defineProps({ q: String, tag: String })
const cart = useCart()
const { event } = useTracking()

const list = ref(products)

const filtered = computed(() => {
  const q = (props.q || '').toLowerCase()
  const tag = props.tag || 'all'
  return list.value.filter(p => {
    const okTag = tag === 'all' || p.tag === tag
    const okQ = !q || p.name.toLowerCase().includes(q) || (p.desc || '').toLowerCase().includes(q)
    return okTag && okQ
  })
})

function onAdd(item){
  cart.add(item)
  event('add_to_cart', { productId: item.id, qty: item.quantity, price: item.price })
  emit('add-to-cart', item)
}
</script>
