<template>
  <BottomNav />
  <Header @search="q = $event" @filter="tag = $event" />
  <Carousel />
  <ProductList :q="q" :tag="tag" @add-to-cart="onAddToCart" />
  <Cart ref="cartRef" />
  <CookieNotice />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Carousel from './components/Carousel.vue'
import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'
import CookieNotice from './components/CookieNotice.vue'
import BottomNav from './components/BottomNav.vue'
import { useTracking } from './composables/useTracking'

const q = ref('')
const tag = ref('all')
const cartRef = ref(null)
const { init, event } = useTracking()

function onAddToCart(item){
  // extra handling if needed
}

onMounted(() => {
  init()
  window.addEventListener('open-cart', () => cartRef.value?.toggle(true))
})
</script>
