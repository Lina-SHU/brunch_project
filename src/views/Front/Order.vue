<template>
  <section>
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
    <div class="carts-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          當日現做<br>
          美味到府
        </h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row d-flex-center">
        <div class="col-md-6">
          <ul class="process d-flex justify-content-between list-unstyled">
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">1. <br><span class="d-none d-lg-inline">清單確認</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">2. <br><span class="d-none d-lg-inline">資料填寫</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">3. <br><span class="d-none d-lg-inline">付款確認</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">4. <br><span class="d-none d-lg-inline">完成訂單</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row flex-row-reverse">
        <div class="col-md-4">
          <div class="order-list p-4 border border-2 border-secondary text-primary shadow-sm">
            <h3 class="fw-bold my-2 p-2">訂單明細</h3>
            <ul class="list-unstyled border-bottom border-3 border-primary py-2">
              <li v-for="cart in carts.carts" :key="cart.id+'1'" class="mb-3">
                <div class="d-flex justify-content-between">
                  <div class="cart-content d-flex">
                    <div :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: center center; height: 50px; width: 80px;"></div>
                    <div class="cart-item ms-2">
                      <h4 class='fs-6 m-0'>{{ cart.product.title }}</h4>
                      <small class='fs-6'>${{ $toCurrency(`${cart.total}`) }}</small>
                    </div>
                  </div>
                  <small class='fs-6'>{{ cart.qty }} {{ cart.product.unit }}</small>
                </div>
              </li>
            </ul>
            <div class="d-flex justify-content-between">
              <p class='fs-6'>小計</p>
              <p class='fs-6'>NT ${{ $toCurrency(`${carts.total}`) }}</p>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="輸入優惠券代碼" v-model.trim="couponCode">
              <button class="btn btn-sm btn-primary" type="button" @click="useCoupon">套用優惠券</button>
            </div>
            <div class="d-flex justify-content-between">
              <p class='fs-4 fw-bold'>總計</p>
              <p class='fs-4 fw-bold'>NT ${{ $toCurrency(`${carts.final_total}`) }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row d-flex-center">
            <div class="col-md-10">
              <h3 class="fw-bold my-2 text-primary border-bottom border-4 p-2 border-primary">訂購人資訊</h3>
              <div class="d-flex justify-content-end text-danger"> * 為必填欄位</div>
              <orderForm></orderForm>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerSection></footerSection>
  </section>
</template>

<script>
import footerSection from '../../components/Footer.vue'
import orderForm from '../../components/OrderForm.vue'

export default {
  data () {
    return {
      carts: {},
      couponCode: '',
      isLoading: false
    }
  },
  components: {
    footerSection,
    orderForm
  },
  methods: {
    getCarts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.carts = res.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    useCoupon () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(url, { data: { code: this.couponCode } })
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '成功套用優惠券！',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            this.getCarts()
          } else {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '找不到該優惠券唷！',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
