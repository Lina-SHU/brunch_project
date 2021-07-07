<template>
  <section>
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
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">3. <br><span class="d-none d-lg-inline">付款確認</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">4. <br><span class="d-none d-lg-inline">完成訂單</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- -Md_9XfB1dsPj6VDlZ5o -->
    <div class="container">
      <div class="row d-flex-center">
        <div class="col-md-6">
          <div class="alert alert-success fs-4" role="alert">
            感謝您的訂購，敬請留意取餐日期及時間！<span class="material-icons">sentiment_very_satisfied</span>
          </div>
          <div class="order-list py-2 px-4 border border-2 border-secondary text-primary shadow-sm mb-5">
            <h3 class="fw-bold my-2 p-2 text-center">訂單明細</h3>
            <ul class="list-unstyled border-bottom border-3 border-primary py-2">
              <li v-for="product in order.products" :key="product.id+'1'" class="mb-3">
                <div class="d-flex justify-content-between align-items*center">
                  <div class="order-content d-flex">
                    <div :style="{ 'background-image' : `url(${product.product.imageUrl}` }" style="background-size: cover; background-position: center center; height: 50px; width: 80px;"></div>
                    <div class="order-item ms-2">
                      <h4 class='fs-6 m-0'>{{ product.product.title }}</h4>
                      <small class='fs-6'>{{ product.qty }} {{ product.product.unit }}</small>
                    </div>
                  </div>
                  <small class='fs-6'>${{ $toCurrency(`${product.final_total}`) }}</small>
                </div>
              </li>
            </ul>
            <div class="d-flex justify-content-between">
              <p class='fs-4 fw-bold'>總計</p>
              <p class='fs-4 fw-bold'>NT ${{ $toCurrency(`${order.total}`) }}</p>
            </div>
          </div>
          <div class="bg-secondary p-4 mb-5">
            <h3 class="fw-bold text-center mb-2 text-primary border-bottom border-2 p-2 border-primary">確認您的訂購資訊</h3>
            <table class="table text-primary">
              <tbody v-if="order.user">
                <tr class="fw-bold fs-5">
                  <th>取餐日期及時間</th>
                  <th class="text-end">{{ order.user.getDate }} 上午{{ order.user.getTime }}</th>
                </tr>
                <tr>
                  <th scope="row">訂購人姓名</th>
                  <td class="text-end">{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row">訂購人電話</th>
                  <td class="text-end">{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th scope="row">訂購人地址</th>
                  <td class="text-end">{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row">訂購方式</th>
                  <td class="text-end">{{ order.user.payment_method }}</td>
                </tr>
                <tr>
                  <th scope="row">付款狀態</th>
                  <td class="text-end text-danger fw-bold">{{ order.is_paid? "已付款" : "尚未付款"}}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-grid gap-2">
              <router-link to="/products" class="btn btn-block btn-primary">繼續選購</router-link>
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

export default {
  data () {
    return {
      order: {}
    }
  },
  components: {
    footerSection
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.order = res.data.order
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
