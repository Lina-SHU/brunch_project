<template>
  <section>
    <a href="#" @click.prevent="goTop" v-if="showTop">
      <span class="material-icons goToTop p-3 rounded-circle" style="font-size:32px;">arrow_upward</span>
    </a>
    <loading v-model:active="isLoading">
      <div class="loadingio-spinner-ellipsis-rg3crixpxzh">
        <div class="ldio-zmt4lrj3aj">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <div class="products-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          餐點選購
        </h2>
      </div>
    </div>
    <div class="container pb-6">
      <div class="row d-flex-center">
        <div class="col-md-8">
          <div class="list-group list-group-horizontal fw-bold fs-5 flex-wrap justify-content-center">
            <a href="#" class="list-group-item border-0 px-4 py-2 rounded-pill text-center" @click.prevent="filterCategory('')">
              全部餐點
            </a>
            <a href="#" v-for="list in categoryList" :key="list" class="list-group-item border-0 px-4 py-2 rounded-pill text-center" @click.prevent="filterCategory(`${list}`)">{{ list }}</a>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-5">
        <div class="input-group w-lg-25 position-relative">
          <i class="search-icon material-icons position-absolute top-0 left-0  p-1" style="font-size:32px">search</i>
          <input type="text" class="form-control ps-5" placeholder="請輸入關鍵字" v-model="search" @change="searchProducts">
        </div>
      </div>
      <div class="row mt-3 d-flex-center">
        <div class="col-md-4 col-lg-3 mb-4" v-for="product in filterProducts" :key="product.id">
          <div class="card h-100 shadow border-0">
            <div class="card-img position-relative">
              <div class="product-content position-absolute">
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
                <a href="#" class="btn addCartBtn" @click.prevent="addToCart(product.id)"><i class="material-icons" style="font-size:32px;">add_shopping_cart</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <coupon></coupon>
    <footerSection></footerSection>
  </section>
</template>

<script>
import emitter from '../../assets/js/mitt'
import coupon from '../../components/Coupon.vue'
import footerSection from '../../components/Footer.vue'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      filterProducts: [],
      selectCategory: '',
      categoryList: [],
      showTop: false,
      search: ''
    }
  },
  components: {
    coupon,
    footerSection
  },
  methods: {
    getProducts (value) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
            this.filterCategory()
            this.categoriies()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    filterCategory (value) {
      this.selectCategory = value
      this.filterProducts = this.products.filter(item => {
        return item.category.match(this.selectCategory)
      })
    },
    categoriies () {
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
          console.log(err)
        })
    },
    searchProducts () {
      this.filterProducts = this.products.filter((item) => {
        return item.title.match(this.search)
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
