<template>
  <nav class="bottom-nav">
    <a href="#home" class="nav-item active" title="الرئيسية"><i class="fas fa-store"></i></a>
    <a href="#confirm" class="nav-item" title="تأكيد الطلب"><i class="fas fa-check-circle"></i></a>
    <a href="#cart" class="nav-item" @click.prevent="openCart">
      <i class="fas fa-shopping-cart"></i>
      <span class="badge">{{ count }}</span>
    </a>
  </nav>
</template>

<script setup>
import { useCart } from '../store/cart'
const cart = useCart()
const count = computed(() => cart.count)
import { computed } from 'vue'

function openCart(){
  // ask App to open cart
  window.dispatchEvent(new CustomEvent('open-cart'))
}
</script>
