<template>
  <nav class="navbar navbar-expand-lg opacity-85 bg-secondary nav-light">
    <div class="container position-relative">
      <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="material-icons" style="font-size:28px;" >menu</span>
      </button>
      <router-link class="navbar-brand me-0 me-lg-1 flex-fill text-center text-lg-start" to="/"><h1 class="logo m-0 text-primary" >FRESHBRUNCH</h1></router-link>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav align-items-center fs-5 ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/">首頁</router-link>
          <router-link class="nav-link" to="/about">關於我們</router-link>
          <router-link class="nav-link" to="/products">餐點選購</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="container mt-5">
    <div class="row flex-row-reverse">
      <div class="col-md-8 d-flex-center flex-column align-items-start">
         <h3>找不到頁面唷...</h3>
         <router-link class="btn btn-primary btn-lg px-6 rounded-pill mt-2" to="/products">訂餐去</router-link>
      </div>
      <div class="col-md-4 mt-3 mt-lg-0">
        <img src="https://i.imgur.com/Oug4xJ6.jpg" alt="login-img" class="img-fiuld login-image w-100 shadow">
      </div>
    </div>
  </div>
</template>
