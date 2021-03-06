<template>
  <section>
    <a href="#" @click.prevent="goTop" v-if="showTop">
      <span class="material-icons goToTop p-3 rounded-circle" style="font-size:32px;">arrow_upward</span>
    </a>
    <Loading :is-loading="isLoading"></Loading>
    <div class="products-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          餐點選購
        </h2>
      </div>
    </div>
    <div class="container pb-6">
      <div class="row d-flex-center">
        <div class="col-lg-10">
          <div class="list-group list-group-horizontal fw-bold fs-5 flex-wrap justify-content-center">
            <a href="#" class="list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1 mb-1" @click.prevent="selectCategory=''" :class="{ 'bg-primary': selectCategory==='', 'text-white': selectCategory==='' }">
              全部餐點
            </a>
            <a href="#" v-for="list in categoryList" :key="list" class="list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1 mb-1" @click.prevent="selectCategory=list" :class="{ 'bg-primary': selectCategory===list, 'text-white': selectCategory===list }">
              {{ list }}
            </a>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-5">
        <div class="input-group w-lg-25 position-relative">
          <i class="search-icon material-icons position-absolute top-0 left-0  p-1" style="font-size:32px">search</i>
          <input type="text" class="form-control ps-5" placeholder="請輸入關鍵字" v-model="search">
        </div>
      </div>
      <div class="row mt-3 d-flex-center">
        <div class="col-lg-4 col-xl-3 mb-4" v-for="product in filterProducts" :key="product.id">
          <div class="card h-100 shadow border-0">
            <div class="card-img position-relative">
              <div class="card-content position-absolute">
                <router-link :to="{path: `/product/${product.id}`}" class="text">{{ product.content }}</router-link>
              </div>
              <div class="new-img" :style="{ 'background-image' : `url(${product.imageUrl}` }" style="background-size: cover; background-position: 20% center;"></div>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="content">
                  <h5 class="card-title"><strong>{{ product.title }}</strong></h5>
                  <del class="me-2">原價： {{ product.origin_price }} 元</del>
                  <p class="fw-bold card-text text-danger fs-5">優惠價：{{ product.price }} 元</p>
                </div>
                <div class="product-icons d-flex align-tiems-center">
                  <a href="#" class="btn addFavoriteBtn" @click.prevent="addMyFavorite(product)">
                    <i class="material-icons clickFavorite" v-if="favorites.includes(product.id)">favorite</i>
                    <i class="material-icons" v-else>favorite_border</i>
                  </a>
                  <a href="#" class="btn addCartBtn" @click.prevent="addToCart(product.id)">
                    <i class="material-icons" style="font-size:28px;">add_shopping_cart</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Coupon></Coupon>
    <FooterSection></FooterSection>
  </section>
</template>

<script>
import emitter from '@/assets/js/mitt'
import favoriteMethods from '@/assets/js/favoriteStorage'
import Coupon from '@/components/Front/Coupon.vue'
import FooterSection from '@/components/Front/Footer.vue'
import Loading from '@/components/Front/Loading.vue'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      selectCategory: '',
      categoryList: [],
      showTop: false,
      search: '',
      favorites: favoriteMethods.get() || []
    }
  },
  components: {
    Coupon,
    FooterSection,
    Loading
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
            this.categories()
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法取得餐點列表，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    categories () {
      this.products.forEach(item => {
        if (this.categoryList.indexOf(item.category) === -1) {
          this.categoryList.push(item.category)
        }
      })
    },
    goTop () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    },
    addToCart (id, qty = 1) {
      this.isLoading = true
      const data = {
        data: {
          product_id: id,
          qty
        }
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, data)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '成功加入購物車',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法加入購物車，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    scrollTop () {
      const windowY = window.scrollY
      const innerHeight = window.innerHeight
      if (windowY > innerHeight) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    },
    addMyFavorite (item) {
      if (this.favorites.includes(item.id)) {
        this.favorites.splice(this.favorites.indexOf(item.id), 1)
      } else {
        this.favorites.push(item.id)
        this.$swal({
          toast: true,
          title: '已加入我的最愛',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
          position: 'top'
        })
      }
      favoriteMethods.save(this.favorites)
      emitter.emit('favorite')
    }
  },
  computed: {
    filterProducts () {
      if (this.search) {
        return this.products.filter((item) => item.title.match(this.search))
      } else {
        return this.products.filter((item) => item.category.match(this.selectCategory))
      }
    }
  },
  mounted () {
    this.getProducts()
    window.addEventListener('scroll', this.scrollTop)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollTop)
  }
}
</script>
