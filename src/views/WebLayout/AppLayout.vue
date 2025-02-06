<template>
    <!-- Page header -->
    <top-header ></top-header>

    <main class="main">
        <slot />
    </main>

    <!-- Page footer -->
    <Footer > </Footer>
</template>

  <!-- Vendor CSS Files -->
  <style>
  @import '@assets/BootslandeAssets/vendor/bootstrap/css/bootstrap.min.css';
  @import '@assets/BootslandeAssets/vendor/bootstrap-icons/bootstrap-icons.css';
  @import '@assets/BootslandeAssets/vendor/aos/aos.css';
  @import '@assets/BootslandeAssets/vendor/glightbox/css/glightbox.min.css';
  @import '@assets/BootslandeAssets/vendor/swiper/swiper-bundle.min.css';
  @import '@assets/BootslandeAssets/css/main.css';
  
  </style>
  
  <script setup>
    import { onMounted } from 'vue'
    import TopHeader from '@views/WebLayout/TopHeader.vue';
    import Footer from '@views/WebLayout/Footer.vue';
  
  onMounted(() => {
    // Load scripts dynamically
    const scripts = [
      '/src/assets/BootslandeAssets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/src/assets/BootslandeAssets/vendor/php-email-form/validate.js', 
      '/src/assets/BootslandeAssets/vendor/aos/aos.js',
      '/src/assets/BootslandeAssets/vendor/glightbox/js/glightbox.min.js',
      '/src/assets/BootslandeAssets/vendor/purecounter/purecounter_vanilla.js',
      '/src/assets/BootslandeAssets/vendor/swiper/swiper-bundle.min.js',
      '/src/assets/BootslandeAssets/js/main.js'
    ]
  
    scripts.forEach(src => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    })
  })
  </script>
