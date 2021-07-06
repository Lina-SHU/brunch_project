<template>
  <nav class="navbar navbar-expand-lg opacity-85 fixed-top" :class="[classList['bg-color'], classList['navbar-color']]">
    <div class="container position-relative">
      <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="material-icons" style="font-size:28px;" >menu</span>
      </button>
      <router-link class="navbar-brand me-0 me-lg-1 flex-fill text-center text-lg-start" to="/"><h1 class="logo m-0" :class="classList['text-color']">FRESHBRUNCH</h1></router-link>
      <div class="dropdown cart-icon order-2">
        <a href="#" class="btn btn-secondary nav-link position-relative border-0 dropdown-btn px-2" type="button" data-bs-toggle="dropdown"  data-bs-auto-close="outside" :class="classList['bg-color']">
          <i class="material-icons" style="font-size:28px;" :class="classList['i-color']">shopping_cart</i>
          <div class="cart-number rounded-pill bg-danger text-white position-absolute px-2" v-if="cart.carts">
            {{ cart.carts.length }}
          </div>
        </a>
        <dropdown :cart="cart" @get-cart="getCart"></dropdown>
      </div>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav align-items-center fs-5 ms-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/">首頁</router-link>
          <router-link class="nav-link" to="/about">關於我們</router-link>
          <router-link class="nav-link" to="/products">餐點選購</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import emitter from '../assets/js/mitt'
import dropdown from '../components/DropDownModal.vue'

export default {
  data () {
    return {
      cart: {},
      classList: {
        'bg-color': 'bg-secondary',
        'text-color': 'text-primary',
        'i-color': ''
      }
    }
  },
  components: {
    dropdown
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
          console.log(err)
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
  }
}
</script>
