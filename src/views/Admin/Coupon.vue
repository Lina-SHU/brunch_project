<template>
  <loading v-model:active="isLoading"/>
  <div class="container py-3 mt-6">
    <h1 class="text-center mb-4 text-primary fs-2"><strong class="border-bottom border-primary d-inline-block border-4 pb-2">優惠券管理</strong></h1>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" @click="updateModal('new')">新增優惠券</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">優惠券名稱</th>
          <th scope="col">折扣數</th>
          <th scope="col">到期日</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in couponList" :key="coupon.id">
          <td><a href="#" @click.prevent="deleteCoupon(coupon.id)" class="d-flex-center align-items-center"><i class="btn-outline-danger border-0 rounded-2 material-icons p-1">delete</i></a></td>
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ new Date(coupon.due_date*1000).getFullYear() }}/{{ new Date(coupon.due_date*1000).getMonth()+1 }}/{{ new Date(coupon.due_date*1000).getDate() }}</td>
          <td>{{ coupon.is_enabled ? '啟用':'未啟用' }}</td>
          <td>
            <button class="btn btn-primary me-2" type="button" @click="updateModal('edit', coupon)">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @get-list="getCoupon"></pagination>
    <updateModal ref="updateModal" :is-new="isNew" :temp-coupon="tempCoupon" @get-coupon="getCoupon"></updateModal>
  </div>
</template>

<script>
import pagination from '../../components/Pagination.vue'
import updateModal from '../../components/UpdateCouponModal.vue'

export default {
  data () {
    return {
      couponList: [],
      pagination: [],
      isNew: true,
      tempCoupon: [],
      isLoading: false
    }
  },
  components: {
    pagination,
    updateModal
  },
  methods: {
    getCoupon (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.couponList = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateModal (value, coupon) {
      if (value === 'edit') {
        this.isNew = false
        this.tempCoupon = JSON.parse(JSON.stringify(coupon))
      } else if (value === 'new') {
        this.isNew = true
        this.tempCoupon = {}
      }
      this.$refs.updateModal.openModal()
    },
    deleteCoupon (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
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
            this.getCoupon()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getCoupon()
  }
}
</script>
