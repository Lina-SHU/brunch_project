<template>
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
        餐點介紹
      </h2>
    </div>
  </div>
  <div class="container py-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <router-link to="/" class="breadcrumb-item">首頁</router-link>
        <router-link to="/products" class="breadcrumb-item">餐點選購</router-link>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row mb-5">
      <div class="col-md-6">
        <div class="product-img shadow" :style="{ 'background-image' : `url(${product.imageUrl}` }" style="background-size: cover; background-position: 30% center;"></div>
      </div>
      <div class="col-md-6 mt-4 mt-lg-0">
        <h2 class="text-primary fw-bold mb-3 h1">{{ product.title }}</h2>
        <p class="w-75">{{ product.content }}</p>
        <p v-if="product.category !== '飲品'">隨餐附贈：紅茶、薯條</p>
        <p class="d-inline fw-bold card-text text-danger fs-5">優惠價：{{ product.price }} 元</p>
        <del class="ms-2">原價： {{ product.origin_price }} 元</del>
        <div class="input-group mb-3 mt-5 w-lg-50">
          <button class="btn btn-outline-primary" type="button" @click="changeQty('minus')" :class="{ disabled: qty <= 1 }"><i class="material-icons">remove</i></button>
          <input type="number" min="1" class="form-control qty-input" disabled v-model.number="qty">
          <button class="btn btn-outline-primary" type="button" @click="changeQty('add')"><i class="material-icons">add</i></button>
          <a href="#" @click.prevent="addToCart"><i class="material-icons ms-4 btn-outline-primary border-0 rounded-2 p-1" style="font-size:40px;">add_shopping_cart</i></a>
        </div>
      </div>
    </div>
    <template v-if="product.imagesUrl && product.imagesUrl.length !==0">
      <h2 class="text-center mb-4 text-primary"><strong data-aos="flip-up" class="pb-2">嚴選食材</strong></h2>
      <div class="row d-flex-center">
        <div class="col-md-8">
          <div class="row d-flex-center">
            <div class="col-md-4 mb-2 mb-lg-0" v-for="image in product.imagesUrl" :key="image">
              <div class="ingredients opacity-75" :style="{ 'background-image' : `url(${image}` }" style="background-size: cover; background-position: 20% center; height: 250px;"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <hr>
    <h2 class="text-center mb-4 text-primary"><strong data-aos="flip-up" class="border-4 pb-2">訂購須知</strong></h2>
    <div class="d-flex-center">
      <ul class="list-unstyled w-lg-50">
        <li class="mb-2">※ 由於本商品為當日現做，且使用當日運送新鮮食材，故收到商品後，請於當日食用完畢；若當日未能食用完畢，請放置於冷藏。</li>
        <li class="mb-2">※ 當確認訂單已付款完成，會於您指定日期的當天送至訂單填寫的地址。</li>
        <li class="mb-2">※ 因 FRESH BRUNCH 對商品品質的堅持保證，若收到商品時發現包裝不完整，建議您拍照存證並立即與我們聯繫：客服專線：(02) 2296-2458。</li>
        <li>※ 提醒您：當付款完成後，FRESH BRUNCH 不會主動以電話方式聯繫您進行 ATM 操作修正款項或詢問信用卡等資料，若有接獲請撥打 165 反詐騙專線求證，以確保您的權益。</li>
      </ul>
    </div>
  </div>
  <div class="py-5 bg-secondary">
    <div class="container">
      <h2 class="text-center text-primary"><strong data-aos="flip-up" class="border-bottom border-primary d-inline-block border-4 pb-2">同系列餐點</strong></h2>
      <div class="row mt-5">
        <div class="col-md-3 mb-2" v-for="product in filterProducts" :key="product.id">
          <div class="card h-100 shadow border-0">
            <div class="card-img position-relative">
              <div class="product-content position-absolute">
                <a href="#" class="text" @click.prevent="goToProduct(`${product.id}`)">{{ product.content }}</a>
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
                <a href="#" class="btn addCartBtn" @click.prevent="addToCart(product.id)"><i class="material-icons" style="font-size:32px;" >add_shopping_cart</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footerSection></footerSection>
</template>

<script>
import emitter from '../../assets/js/mitt'
import footerSection from '../../components/Footer.vue'

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

export default {
  data () {
    return {
      product: { imagesUrl: {} },
      qty: 1,
      products: [],
      filterProducts: [],
      autoplay: {
        delay: 3000
      },
      isLoading: false
    }
  },
  components: {
    footerSection
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.product = res.data.product
            this.getProducts()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.getSameCategory()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSameCategory () {
      const filterData = this.products.filter((item) => {
        return item.category === this.product.category
      })
      const maxSize = filterData.length < 4 ? filterData.length : 4
      const arrSet = new Set([])
      for (let i = 0; arrSet.size < maxSize; i++) {
        const num = getRandomInt(filterData.length)
        arrSet.add(num)
      }
      arrSet.forEach((item) => {
        this.filterProducts.push(filterData[item])
      })
    },
    changeQty (value) {
      if (value === 'add') {
        this.qty += 1
      } else if (value === 'minus') {
        this.qty -= 1
      }
    },
    addToCart () {
      this.isLoading = true
      const data = {
        data: {
          product_id: this.product.id,
          qty: this.qty
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
            this.qty = 1
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProduct()
  },
  watch: {
    $route (to, from) {
      this.getProduct()
      this.filterProducts = []
    }
  }
}
</script>
