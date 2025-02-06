<template>
    <layout>
        <section id="hero" class="hero section dark-background">
        <img src="@assets/BootslandeAssets/img/hero-bg-2.jpg" alt="" class="hero-bg" />

        <div class="container">
          <div class="row gy-4 justify-content-between">
            <div class="col-lg-4 order-lg-last hero-img bg-white rounded" data-aos="zoom-in" data-aos-delay="100">
              <img src="@assets/BootslandeAssets/img/login.svg" class="img-fluid animated" alt="" />
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="zoom-out" data-aos-delay="400">
                <div class="auth-form">

                <div class="text-center">
                    <h1 class="h2">Create your account</h1>
                </div>

                <div class="mb-3">
                    <!-- <div class="d-grid gap-2 mb-3">
                        <a @click="socialLogin('facebook')" class='btn btn-facebook btn-lg position-relative shadow'
                        href='#'>
                            <i class="fab fa-fw fa-facebook fs-3 float-start"></i>
                            <span class="position-absolute mx-auto w-100 left-0">Continue with Facebook</span>
                        </a>
                        <a @click="socialLogin('google')"  class='btn btn-google btn-lg position-relative shadow' href='#'>
                            <i class="fab fa-fw fa-google fa-google-colored fs-3  float-start"></i>
                            <span class="position-absolute mx-auto w-100 left-0">Continue with Google</span>
                        </a>
                    </div> 
                    <div class="row">
                        <div class="col">
                            <hr>
                        </div>
                        <div class="col-auto text-uppercase d-flex align-items-center">Or</div>
                        <div class="col">
                            <hr>
                        </div>
                    </div>-->
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input v-model="name" class="form-control form-control-lg" type="name" name="name"
                            placeholder="Enter your name"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input v-model="email" class="form-control form-control-lg" type="email" name="email"
                            placeholder="Enter your email"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input v-model="password" class="form-control form-control-lg" type="password" name="password"
                            placeholder="Enter your password"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confrim Password</label>
                        <input v-model="confirm_password" class="form-control form-control-lg" type="password" name="confirm_password"
                            placeholder="Enter your password"/>
                    </div>
                    
                    <div class="d-grid gap-2 mt-3">
                        <button v-if="!loading"  @click="login" class='btn btn-lg btn-primary' >Sign up</button>
                        <button v-else  class='btn btn-lg btn-primary' disabled >Verifying....</button>
                    </div>
                </div>

                <div class="text-center">
                    Do have an account? <a href='/login'>Sign in</a>
                </div>
                </div>
            </div>
          </div>
        </div>

        <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="wave1">
            <use xlink:href="#wave-path" x="50" y="3"></use>
          </g>
          <g class="wave2">
            <use xlink:href="#wave-path" x="50" y="0"></use>
          </g>
          <g class="wave3">
            <use xlink:href="#wave-path" x="50" y="9"></use>
          </g>
        </svg>
      </section>

    </layout>
</template>

<script setup>
    import layout from "@views/WebLayout/AppLayout.vue";

</script>

<style >
   
</style>
