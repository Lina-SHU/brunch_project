<template>
  <section>
    <Loading :is-loading="isLoading"></Loading>
    <div class="carts-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          當日現做<br>
          美味到府
        </h2>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex-center">
        <div class="col-md-6">
          <ul class="process d-flex justify-content-between list-unstyled">
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">
              1. <br><span class="d-none d-lg-inline">清單確認</span>
              <i class="material-icons icons text-primary">navigate_next</i>
            </li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">
              2. <br><span class="d-none d-lg-inline">資料填寫</span>
              <i class="material-icons icons text-primary">navigate_next</i>
            </li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">
              3. <br><span class="d-none d-lg-inline">付款確認</span>
              <i class="material-icons icons text-primary">navigate_next</i>
            </li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">
              4. <br><span class="d-none d-lg-inline">完成訂單</span>
            </li>
          </ul>
        </div>
      </div>
      <h3 class="text-center my-4 text-primary"><strong data-aos="flip-up" class="border-bottom border-primary d-inline-block border-4 pb-2">購物車</strong></h3>
      <div class="row d-flex-center my-3">
        <div class="col-md-8">
          <button v-if="carts.carts && carts.carts.length >=2" class="btn btn-outline-danger border-0 d-flex align-items-center mb-3" @click.prevent="deleteAllCart"><i class="material-icons me-2">delete</i>刪除購物車</button>
          <CartList :carts-list="carts" @get-carts="getCarts"></CartList>
          <div class="d-flex justify-content-between">
            <router-link to="/products" class="btn btn-lg btn-outline-primary">繼續購物</router-link>
            <button class="btn btn-lg btn-primary" @click="goTOpay" :class="{ disabled: carts.carts && carts.carts.length === 0}">結帳去</button>
          </div>
        </div>
      </div>
    </div>
    <FooterSection></FooterSection>
  </section>
</template>

<script>
import emitter from '@/assets/js/mitt'
import FooterSection from '@/components/Front/Footer.vue'
import CartList from '@/components/Front/CartList.vue'
import Loading from '@/components/Front/Loading.vue'

export default {
  data () {
    return {
      carts: {},
      isLoading: false
    }
  },
  components: {
    FooterSection,
    Loading,
    CartList
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            this.carts = res.data.data
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
    deleteAllCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '購物車清空囉！',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            this.getCarts()
            emitter.emit('product-cart')
            this.$router.push('/products')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法清空購物車，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    goTOpay () {
      if (this.carts.carts && this.carts.carts.length === 0) {
        this.$swal({
          toast: true,
          title: '購物車不能是空的唷！',
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
          position: 'top'
        })
        this.$router.push('/products')
      } else {
        this.$router.push('/order')
      }
    }
  },
  mounted () {
    this.getCarts()
    emitter.on('product-cart', () => {
      this.getCarts()
    })
  },
  unmounted () {
    emitter.off('product-cart', () => {
      this.getCarts()
    })
  }
}
</script>
