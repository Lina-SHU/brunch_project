<template>
  <section>
    <Loading :is-loading="isLoading"></Loading>
    <div class="table-responsive d-none d-lg-block">
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
          <template v-if="carts.carts && carts.carts.length !== 0">
            <tr v-for="cart in carts.carts" :key="cart.id" class="align-middle">
              <td><a href="#" @click.prevent="deleteCart(cart.id)" class=" d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a></td>
              <td class="py-3">
                <div class="product-img shadow-sm" :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: 30% center; height: 75px;"></div>
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
          </template>
          <template v-else>
            <tr>
              <td colspan="5" class="text-center py-3">
                <p class="text-center">購物車是空的唷！</p>
                <router-link to="/products" class="btn btn-primary px-5">訂餐去</router-link>
              </td>
            </tr>
          </template>
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
    <div class="d-lg-none">
      <ul class="list-unstyled" v-if="carts.carts && carts.carts.length !== 0">
        <li v-for="cart in carts.carts" :key="cart.id+1" class="shadow p-3 mb-2">
          <div class="d-flex justify-content-between mb-3">
            <a href="#" @click.prevent="deleteCart(cart.id)" class="d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a>
            <div class="product-img shadow-sm w-50" :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: 30% center; height: 75px;"></div>
            <router-link :to="{ path: `/product/${cart.product.id}`}" class="cartProduct d-flex-center align-items-center px-2">{{ cart.product.title }}</router-link>
          </div>
          <div class="d-flex justify-content-between">
            <div class="input-group w-50">
              <button class="btn btn-sm btn-outline-primary" type="button" :class="{ disabled: cart.qty <= 1 }"><i class="material-icons" @click="editCart(cart, cart.qty-1)">remove</i></button>
              <input type="number" min="1" class="form-control qty-input" disabled v-model.number="cart.qty">
              <button class="btn btn-sm btn-outline-primary" type="button" @click="editCart(cart, cart.qty+1)"><i class="material-icons">add</i></button>
            </div>
            <p class="m-0 d-flex-center align-items-center">金額： NT ${{ $toCurrency(`${cart.total}`) }}</p>
          </div>
        </li>
      </ul>
      <div v-else class="d-flex-center flex-column align-items-center mb-3 py-3 shadow-sm">
        <p class="text-center">購物車是空的唷！</p>
        <router-link to="/products" class="btn btn-primary px-5">訂餐去</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import emitter from '@/assets/js/mitt'
import Loading from '@/components/Front/Loading.vue'

export default {
  data () {
    return {
      carts: '',
      isLoading: false
    }
  },
  components: {
    Loading
  },
  props: ['cartsList'],
  methods: {
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
            this.$emit('getCarts')
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法刪除餐點，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
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
            this.$emit('getCarts')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法修改餐點數量，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    }
  },
  watch: {
    cartsList () {
      this.carts = this.cartsList
    }
  }
}
</script>
