<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <router-link class="navbar-brand logo" to="/admin">FRESHBRUNCH 後台管理</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">商品管理</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">訂單管理</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">優惠券管理</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view v-if="isCheck"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCheck: false
    }
  },
  methods: {
    logout () {
      const url = `${process.env.VUE_APP_API}logout`
      this.$http.post(url)
        .then(res => {
          if (res.data.success) {
            const exp = new Date()
            exp.setTime(exp.getTime() - 1)
            const token = document.cookie.replace(
              /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
              '$1'
            )
            document.cookie = `hexToken=${token}; expires=${exp.toGMTString()}`
            this.$router.push('/login')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法登出，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const url = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(url)
      .then(res => {
        if (res.data.success) {
          this.isCheck = true
        } else {
          this.$router.push('/login')
        }
      })
      .catch(err => {
        if (err) {
          this.isLoading = false
          this.$swal({
            toast: true,
            title: '無法檢查，請聯繫管理員',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
            position: 'top'
          })
        }
      })
  }
}
</script>
