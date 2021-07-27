<template>
  <section>
    <Loading :is-loading="isLoading"></Loading>
    <div class="index-heroheader mb-6 position-relative">
      <div class="container h-100 d-flex-center flex-column align-items-center">
        <div data-aos="fade-up" class="text-white bg-black text-center px-lg-6 py-lg-4 p-3">
          <h2 class="lh-base">
            開啟健康活力的一天！
          </h2>
          <p>時尚、健康、自然、活力、美味</p>
          <router-link class="btn btn-primary btn-lg px-6 rounded-pill" to="/products">訂餐去</router-link>
        </div>
      </div>
      <div class="goDown position-absolute d-flex align-items-center animate__animated animate__fadeOutDown animate__infinite">
        <i class="material-icons">keyboard_arrow_down</i>
      </div>
    </div>
    <div class="container mb-6">
      <h2 class="text-center mb-4 text-primary">
        <strong class="border-bottom border-primary d-inline-block border-4 pb-2">新品上市</strong>
      </h2>
      <div class="row g-0">
        <div data-aos="fade-up" class="col-lg-4 text-primary bg-secondary d-flex flex-column" v-for="(news, index) in newProduct" :key="news.id">
          <div class="hot-wrap" style="overflow: hidden;" :class="{ 'order-lg-2': index===1 }">
            <router-link :to="{path: `/product/${news.id}`}">
              <div class="hot-img d-block" :style="{ 'background-image' : `url(${news.imageUrl}` }" style="background-size: cover; background-position: 20% center;"></div>
            </router-link>
          </div>
          <div class="hot-content text-center p-5 d-flex align-items-center flex-column" :class="{ 'order-lg-1': index===1 }">
            <h3>{{ news.title }}</h3>
            <small>{{ news.category }}</small>
            <p class="w-lg-75 text-start mt-2">{{ news.content }}</p>
            <router-link :to="{path: `/product/${news.id}`}" class="btn btn-primary btn-sm px-3 rounded-pill">查看更多</router-link>
          </div>
        </div>
      </div>
    </div>
    <CouponSection></CouponSection>
    <div class="hot-sale bg-secondary py-6">
      <div class="container">
        <h2 class="text-center mb-4 text-primary">
          <strong class="border-bottom border-primary d-inline-block border-4 pb-2">經典熱銷</strong>
        </h2>
        <swiper
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :autoplay="autoplay"
          :loopFillGroupWithBlank="true"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
        >
          <swiper-slide v-for="hot in hotProduct" :key="hot.id">
            <div class="card shadow-sm border-0 h-100">
              <div class="card-img position-relative">
                <div class="card-content position-absolute">
                  <router-link :to="{path: `/product/${hot.id}`}" class="text">{{ hot.content }}</router-link>
                </div>
                <div class="new-img" :style="{ 'background-image' : `url(${hot.imageUrl}` }" style="background-size: cover; background-position: 20% center;"></div>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center h-100">
                  <div class="content">
                    <h5 class="card-title"><strong>{{ hot.title }}</strong></h5>
                    <p class="card-text">售價：{{ hot.price }}</p>
                  </div>
                  <a href="#" class="btn btn-primary d-flex align-items-center" @click.prevent="addToCart(`${hot.id}`)"><i class="material-icons">add_shopping_cart</i><span class="d-none d-lg-inline">加入購物車</span></a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <CTA></CTA>
    <FooterSection></FooterSection>
  </section>
</template>

<script>
import CouponSection from '@/components/Front/Coupon.vue'
import FooterSection from '@/components/Front/Footer.vue'
import CTA from '@/components/Front/CallToAction.vue'
import Loading from '@/components/Front/Loading.vue'
import emitter from '@/assets/js/mitt'

export default {
  data () {
    return {
      hotProduct: [],
      newProduct: [],
      autoplay: {
        delay: 3000
      },
      isLoading: false
    }
  },
  components: {
    CouponSection,
    CTA,
    FooterSection,
    Loading
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            const data = res.data.products
            this.newProduct = data.filter(item => item.newArrival)
            this.hotProduct = data.filter(item => item.hotProduct)
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法取得餐點，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
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
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
