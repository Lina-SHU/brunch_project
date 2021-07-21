<template>
  <div>
    <loading v-model:active="isLoading"/>
    <div class="container py-3 mt-5">
      <h1 class="text-center mb-4 text-primary fs-2">
        <strong class="border-bottom border-primary d-inline-block border-4 pb-2">訂單列表</strong>
      </h1>
      <div class="d-flex justify-content-end">
        <button class="btn btn-danger" v-if="orderList.length >=2" @click="deleteAll">刪除所有訂單</button>
      </div>
      <table class="table mt-3">
        <thead>
          <tr class="text-center">
            <th scope="col"></th>
            <th scope="col">訂單編號</th>
            <th scope="col">訂購人姓名</th>
            <th scope="col">訂購人 Email</th>
            <th scope="col">訂購日期</th>
            <th scope="col">是否付款</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderList" :key="order.id">
            <td><a href="#" @click.prevent="deleteOrder(order.id)" class="d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a></td>
            <td>{{ order.id }}</td>
            <td>{{ order.user.name }}</td>
            <td>{{ order.user.email }}</td>
            <td>{{ new Date(order.create_at*1000).getFullYear() }}/{{ new Date(order.create_at*1000).getMonth()+1 }}/{{ new Date(order.create_at*1000).getDate() }}</td>
            <td>{{ order.is_paid ? '已付款':'未付款' }}</td>
            <td>
              <button class="btn btn-primary me-2" type="button" @click="editOrder(order)">編輯</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :pages="pagination" @get-list="getOrder"></Pagination>
      <EditModal ref="editModal" :temp-order='tempOrder' @get-order="getOrder"></EditModal>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Admin/Pagination.vue'
import EditModal from '@/components/Admin/EditOrderModal.vue'

export default {
  data () {
    return {
      orderList: [],
      pagination: [],
      tempOrder: [],
      isLoading: false
    }
  },
  components: {
    Pagination,
    EditModal
  },
  methods: {
    getOrder (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.orderList = res.data.orders
            this.pagination = res.data.pagination
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法取得訂單列表，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    deleteOrder (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '已成功刪除',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            this.getOrder()
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法刪除訂單，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    deleteAll () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '訂單清空囉！',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            this.getOrder()
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法清空訂單，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
    },
    editOrder (order) {
      this.tempOrder = JSON.parse(JSON.stringify(order))
      this.$refs.editModal.openModal()
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
