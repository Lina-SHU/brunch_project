<template>
  <div>
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/linachen/1626833763731.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PUGfTIn3ue%2BDtd6rjTuvEx56%2Bru%2F7Sg%2FHrFObsH7pJRgTcWz6y%2FVfK%2FGQSGOQbRhBvzHpTvRMxF%2FSy2ECJnQWJug4geNzfYkvaL40Lm2VO84H%2FfI5CzU3y8K2ziC%2B0MnnVWpTNoJN36PcmVNUR2vlPj9gvlai%2BYGiFso0UyVQYi5JFUVic6CcMq89SJMpGlYgchZF47rZnORl6CFnTl3NkhHtiYzZ7tpCj%2Bcjoe7xsVQuFeOWO3VZcxhhqzQi%2F%2Fy9lsbD%2BcHs9Atq5bRV1jMYQwEa0P1UmP7XpJkU7wnKI6Iq5oIJq5Gp83u%2B2y1wKTsLQifqUgNistcmpQVESdWtg%3D%3D" alt="login-img" class="img-fiuld login-image w-100 shadow">
        </div>
      </div>
    </div>
  </div>
</template>
