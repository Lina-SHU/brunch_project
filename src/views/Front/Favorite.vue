<template>
  <section>
    <a href="#" @click.prevent="goTop" v-if="showTop">
      <span class="material-icons goToTop p-3 rounded-circle" style="font-size:32px;">arrow_upward</span>
    </a>
    <Loading :is-loading="isLoading"></Loading>
    <div class="favorite-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          美味收藏
        </h2>
      </div>
    </div>
    <div class="container pb-6">
      <h3 class="text-center my-5 text-primary"><strong data-aos="flip-up" class="border-bottom border-primary d-inline-block border-4 pb-2">我的最愛</strong></h3>
      <button v-if="favoriteList && favoriteList.length >=2" class="btn btn-outline-danger border-0 d-flex align-items-center mb-3" @click.prevent="deleteAllFavorite"><i class="material-icons me-2">delete</i>刪除所有收藏</button>
      <div class="row mt-3 d-flex-center" v-if="favoriteList && favoriteList.length !== 0">
        <div class="col-lg-4 col-xl-3 mb-4" v-for="favorite in favoriteList" :key="favorite.id">
          <div class="card h-100 shadow border-0">
            <div class="card-img position-relative">
              <div class="card-content position-absolute">
                <router-link :to="{path: `/product/${favorite.id}`}" class="text">{{ favorite.content }}</router-link>
              </div>
              <div class="new-img" :style="{ 'background-image' : `url(${favorite.imageUrl}` }" style="background-size: cover; background-position: 20% center;"></div>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="content">
                  <h5 class="card-title"><strong>{{ favorite.title }}</strong></h5>
                  <del class="me-2">原價： {{ favorite.origin_price }} 元</del>
                  <p class="fw-bold card-text text-danger fs-5">優惠價：{{ favorite.price }} 元</p>
                </div>
                <div class="product-icons d-flex align-tiems-center">
                  <a href="#" class="btn addFavoriteBtn" @click.prevent="removeMyFavorite(favorite)">
                    <i class="material-icons clickFavorite" v-if="favorites.includes(favorite.id)">favorite</i>
                    <i class="material-icons" v-else>favorite_border</i>
                  </a>
                  <a href="#" class="btn addCartBtn" @click.prevent="addToCart(favorite.id)">
                    <i class="material-icons" style="font-size:28px;">add_shopping_cart</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex-center flex-column align-items-center mb-3 py-3 shadow-sm">
        <p class="text-center">收藏清單是空的唷！</p>
        <router-link to="/products" class="btn btn-primary px-5">選餐去</router-link>
      </div>
    </div>
    <FooterSection></FooterSection>
  </section>
</template>

<script>
import FooterSection from '@/components/Front/Footer.vue'
import Loading from '@/components/Front/Loading.vue'
import favoriteMethods from '@/assets/js/favoriteStorage'
import emitter from '@/assets/js/mitt'

export default {
  data () {
    return {
      favoriteList: [],
      isLoading: false,
      products: [],
      favorites: favoriteMethods.get() || [],
      showTop: false
    }
  },
  components: {
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
            this.getFavorites()
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
    getFavorites () {
      this.favoriteList = []
      this.favorites.forEach(favorite => {
        this.products.forEach(product => {
          if (product.id === favorite) {
            this.favoriteList.push(product)
          }
        })
      })
    },
    removeMyFavorite (item) {
      this.favorites.splice(this.favorites.indexOf(item.id), 1)
      favoriteMethods.save(this.favorites)
      emitter.emit('favorite')
      this.getFavorites()
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
    deleteAllFavorite () {
      this.favorites = []
      favoriteMethods.save(this.favorites)
      emitter.emit('favorite')
      this.getFavorites()
      this.$swal({
        toast: true,
        title: '清空收藏囉！',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        position: 'top'
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
    goTop () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
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
