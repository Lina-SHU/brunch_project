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
    <div class="container">
      <div class="row d-flex-center">
        <div class="col-md-6">
          <ul class="process d-flex justify-content-between list-unstyled">
            <li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3">1. <br><span class="d-none d-lg-inline">清單確認</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">2. <br><span class="d-none d-lg-inline">資料填寫</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">3. <br><span class="d-none d-lg-inline">付款確認</span><i class="material-icons icons text-primary">navigate_next</i></li>
            <li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3">4. <br><span class="d-none d-lg-inline">完成訂單</span></li>
          </ul>
        </div>
      </div>
      <h3 class="text-center my-4 text-primary"><strong data-aos="flip-up" class="border-bottom border-primary d-inline-block border-4 pb-2">購物車</strong></h3>
      <div class="row d-flex-center my-5">
        <div class="col-md-8">
          <button v-if="carts.carts && carts.carts.length >=2" class="btn btn-outline-danger border-0 d-flex align-items-center" @click.prevent="deleteAllCart"><i class="material-icons me-2">delete</i>刪除購物車</button>
          <div class="table-responsive">
            <table class="table text-primary text-nowrap" style="min-width: 500px;">
              <thead>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center" width="20%">餐點圖片</th>
                  <th class="text-center">餐點名稱</th>
                  <th class="text-center" width="30%">數量</th>
                  <th class="text-center">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in carts.carts" :key="cart.id" class="align-middle">
                  <td><a href="#" @click.prevent="deleteCart(cart.id)" class=" d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a></td>
                  <td class="py-3">
                    <div class="product-img shadow" :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: 30% center; height: 75px;"></div>
                  </td>
                  <td><router-link :to="{ path: `/product/${cart.product.id}`}" class="cartProduct">{{ cart.product.title }}</router-link></td>
                  <td>
                    <div class="input-group">
                      <button class="btn btn-sm btn-outline-primary" type="button" :class="{ disabled: cart.qty <= 1 }"><i class="material-icons" @click="editCart(cart, cart.qty-1)">remove</i></button>
                      <input type="number" min="1" class="form-control qty-input" disabled v-model.number="cart.qty">
                      <button class="btn btn-sm btn-outline-primary" type="button" @click="editCart(cart, cart.qty+1)"><i class="material-icons">add</i></button>
                    </div>
                  </td>
                  <td class="text-end">{{ $toCurrency(`${cart.total}`) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="fw-bold text-end fs-5">
                    結帳金額：   NT$ {{ $toCurrency(`${carts.total}`) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="d-flex justify-content-between">
            <router-link to="/products" class="btn btn-lg btn-outline-primary">繼續購物</router-link>
            <button class="btn btn-lg btn-primary" @click="goTOpay">結帳去</button>
          </div>
        </div>
      </div>
    </div>
    <footerSection></footerSection>
  </section>
</template>

<script>
import emitter from '../../assets/js/mitt'
import footerSection from '../../components/Footer.vue'

export default {
  data () {
    return {
      carts: {},
      isLoading: false
    }
  },
  components: {
    footerSection
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
          console.log(err)
        })
    },
    deleteCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '已成功刪除餐點',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            this.getCarts()
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          console.log(err)
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
          console.log(err)
        })
    },
    editCart (item, qty) {
      this.isLoading = true
      const data = {
        data: {
          product_id: item.product.id,
          qty
        }
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(url, data)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            emitter.emit('product-cart')
            this.getCarts()
          }
        })
        .catch(err => {
          console.log(err)
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
  }
}
</script>
