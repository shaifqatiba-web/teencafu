<template>
  <div v-if="show" id="cookieNotice" class="cookie-notice show">
    <div class="d-flex align-items-center justify-content-between gap-2">
      <div><i class="fa-regular fa-cookie-bite me-2"></i> نستخدم ملفات تعريف الارتباط لتحسين تجربتك.</div>
      <div class="d-flex gap-2">
        <button class="btn btn-sm btn-success" @click="accept">موافق</button>
        <button class="btn btn-sm btn-outline-secondary" @click="reject">رفض</button>
        <a class="btn btn-sm btn-outline-light" href="privacy_policy.html">الخصوصية</a>
        <a class="btn btn-sm btn-outline-light" href="terms_of_service.html">الشروط</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const show = ref(false)
const CK = 'cookie-consent'
function accept(){ localStorage.setItem(CK, 'accepted'); show.value = false }
function reject(){ localStorage.setItem(CK, 'rejected'); show.value = false }
onMounted(() => { if (!localStorage.getItem(CK)) show.value = true })
</script>
