import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const CART_KEY = 'cart'

export const useCart = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem(CART_KEY) || '[]'))

  function persist(){ localStorage.setItem(CART_KEY, JSON.stringify(items.value)) }

  function add(item){
    const found = items.value.find(x => x.id === item.id)
    if (found) found.quantity += item.quantity
    else items.value.push(item)
    persist()
  }
  function remove(index){
    items.value.splice(index, 1)
    persist()
  }
  function updateQty(index, delta){
    const v = Math.max(1, (items.value[index].quantity || 1) + delta)
    items.value[index].quantity = v
    persist()
  }

  const count = computed(() => items.value.reduce((a,b) => a + (b.quantity || 1), 0))
  const subtotal = computed(() => items.value.reduce((a,b) => a + b.price * (b.quantity || 1), 0))

  return { items, add, remove, updateQty, count, subtotal }
})
