<template>
  <div class="dropdown-menu dropdown-menu-end mt-2 p-3" style="min-width: 400px;">
    <div v-if="cartList.carts && cartList.carts.length !== 0">
      <div v-for="cart in cartList.carts" :key="cart.id+'1'" class="mb-3">
        <div class="d-flex justify-content-between align-items-center">
          <div class="cart-content d-flex">
            <a href="#" @click.prevent="deleteCart(cart.id)" class=" d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a>
            <div :style="{ 'background-image' : `url(${cart.product.imageUrl}` }" style="background-size: cover; background-position: center center; height: 50px; width: 80px;"></div>
            <div class="cart-item ms-2">
              <h4 class='fs-6 m-0'>{{ cart.product.title }}</h4>
              <small class='fs-6'>${{ $toCurrency(`${cart.total}`) }}</small>
            </div>
          </div>
          <div class="input-group input-group-sm w-40">
            <button class="btn btn-sm btn-outline-primary" type="button" :class="{ disabled: cart.qty <= 1 }"><i class="material-icons" @click="editCart(cart, cart.qty-1)" style="width: 24px;">remove</i></button>
            <input type="number" min="1" class="form-control qty-input" disabled v-model.number="cart.qty">
            <button class="btn btn-sm btn-outline-primary" type="button" @click="editCart(cart, cart.qty+1)"><i class="material-icons" style="width: 24px;">add</i></button>
          </div>
        </div>
      </div>
      <div class="d-grid gap-2">
        <router-link to="/cart" class="btn btn-primary">結帳去</router-link>
      </div>
    </div>
    <div v-else>
      <p class="text-center">購物車是空的唷！</p>
      <div class="d-grid gap-2">
        <router-link to="/products" class="btn btn-primary">訂餐去</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/js/mitt'

export default {
  data () {
    return {
      cartList: {},
      isLoading: false
    }
  },
  props: ['cart'],
  emits: ['getCart'],
  methods: {
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
            this.$emit('getCart')
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    cart () {
      this.cartList = this.cart
    }
  }
}
</script>
