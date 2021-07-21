<template>
  <nav class="navbar navbar-expand-lg opacity-90 fixed-top" :class="[classList['bg-color'], classList['navbar-color']]">
    <div class="container position-relative">
      <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="material-icons" style="font-size:28px;">menu</span>
      </button>
      <router-link class="navbar-brand me-0 me-lg-1 flex-fill text-center text-lg-start" to="/"><h1 class="logo m-0" :class="classList['text-color']">FRESHBRUNCH</h1></router-link>
      <div class="dropdown cart-icon order-2">
        <a href="#" class="btn btn-secondary position-relative border-0 dropdown-btn px-2" type="button" :class="classList['bg-color']" data-bs-toggle="dropdown" data-bs-display="static">
          <i class="material-icons" style="font-size:28px;" :class="classList['i-color']">shopping_cart</i>
          <div class="cart-number rounded-pill bg-danger text-white position-absolute px-2" v-if="cart.carts">
            {{ cart.carts.length }}
          </div>
        </a>
        <DropDown :cart="cart" @get-cart="getCart"></DropDown>
      </div>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav align-items-center fs-5 ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/about">關於我們</router-link>
          <router-link class="nav-link" to="/products">餐點選購</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import emitter from '@/assets/js/mitt'
import DropDown from '@/components/Front/DropDownModal.vue'

export default {
  data () {
    return {
      cart: { carts: {} },
      classList: {
        'bg-color': 'bg-secondary',
        'text-color': 'text-primary',
        'i-color': ''
      }
    }
  },
  components: {
    DropDown
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.cart = res.data.data
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法取得購物車列表，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    scrollFunction () {
      const windowY = window.scrollY
      const innerHeight = window.innerHeight
      if (windowY > innerHeight) {
        this.classList = {
          'bg-color': 'bg-primary',
          'navbar-color': 'navbar-dark',
          'text-color': '',
          'i-color': 'text-white'
        }
      } else {
        this.classList = {
          'bg-color': 'bg-secondary',
          'navbar-color': 'navbar-light',
          'text-color': 'text-primary',
          'i-color': ''
        }
      }
    }
  },
  mounted () {
    this.getCart()
    emitter.on('product-cart', () => {
      this.getCart()
    })
    window.addEventListener('scroll', this.scrollFunction)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollFunction)
    emitter.off('product-cart', () => {
      this.getCart()
    })
  }
}
</script>
