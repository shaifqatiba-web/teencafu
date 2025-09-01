<template>
  <footer class="inline-footer">
    <div class="container">
      <div class="footer-container">
        <div class="footer-section">
          <h6>روابط سريعة:</h6>
          <ul class="footer-links">
            <li><a href="#home"><i class="fas fa-home me-1"></i> الرئيسية</a></li>
            <li><a href="privacy_policy.html"><i class="fas fa-shield-alt me-1"></i> الخصوصية</a></li>
            <li><a href="terms_of_service.html"><i class="fas fa-file-contract me-1"></i> الشروط</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <div class="contact-info">
            <i class="fab fa-whatsapp"></i>
            <span>+971 50 402 0220</span>
          </div>
        </div>
        <div class="footer-section">
          <h6>تابعنا:</h6>
          <div class="social-icons">
            <a :href="waLink" target="_blank" title="واتساب"><i class="fab fa-whatsapp"></i></a>
            <a href="#" title="إنستغرام"><i class="fab fa-instagram"></i></a>
            <a href="#" title="تويتر"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div class="copyright">© 2025 تين ليوا - جميع الحقوق محفوظة</div>
    </div>
  </footer>
</template>

<script setup>
import { useTracking } from '../composables/useTracking'
const { withParams } = useTracking()
const waLink = withParams('https://wa.me/971504020220')
</script>
