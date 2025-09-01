<template>
  <header>
    <div class="topbar">
      <img class="logo" src="/logo.png" alt="Logo" />
      <div class="search-wrap">
        <input v-model="q" type="search" class="form-control" placeholder="ابحث عن منتج…" @input="$emit('search', q)" />
        <select v-model="tag" class="form-select" aria-label="عامل التصفية" @change="$emit('filter', tag)">
          <option value="all">الكل</option>
          <option value="fig">تين</option>
          <option value="truffle">فقع</option>
          <option value="dates">تمر</option>
          <option value="nuts">مكسرات</option>
        </select>
      </div>
      <button class="btn btn-sm btn-outline-light" title="تبديل اللغة" @click="toggleLang">
        <i class="fa fa-language"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const q = ref('')
const tag = ref('all')
function toggleLang(){
  alert('دعم اللغات سيتوفر لاحقاً — هذه نسخة واجهة فقط.')
}
</script>
