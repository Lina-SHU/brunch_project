<template>
  <loading v-model:active="isLoading"/>
  <div class="modal fade" id="modal" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="isNew">新增優惠券</h5>
          <h5 class="modal-title" v-else>編輯優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="name" class="form-label">優惠券名稱 <small class="text-danger">*必填</small></label>
            <input type="text" class="form-control" id="name" v-model='temp.title'>
          </div>
          <div class="mb-3">
            <label for="discount" class="form-label">折扣數 <small class="text-danger">*必填</small></label>
            <input type="number" class="form-control" id="discount" v-model.number='temp.percent'>
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠券代碼 <small class="text-danger">*必填</small></label>
            <input type="text" class="form-control" id="code" v-model='temp.code'>
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">到期日 <small class="text-danger">*必填</small></label>
            <input type="date" class="form-control" id="due_date" v-model="date">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="is_enabled" v-model="temp.is_enabled" :true-value="1" :false-value="0">
            <label class="form-check-label" for="is_enabled">
              是否啟用
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/assets/js/modal.js'

export default {
  data () {
    return {
      modal: '',
      temp: [],
      date: '',
      isLoading: false
    }
  },
  mixins: [modalMixin],
  emits: ['getCoupon'],
  props: ['tempCoupon', 'isNew'],
  methods: {
    updateCoupon () {
      this.isLoading = true
      if (!this.temp.title || !this.temp.percent || !this.date || !this.temp.code) {
        this.isLoading = false
        this.$swal({
          toast: true,
          title: '必填項目都要填寫唷！',
          icon: 'error',
          timer: 1500,
          showConfirmButton: false,
          position: 'top'
        })
        return
      }
      this.temp.due_date = Math.floor(new Date(this.date) / 1000)
      if (!this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.temp.id}`
        this.$http.put(url, { data: this.temp })
          .then(res => {
            if (res.data.success) {
              this.isLoading = false
              this.$swal({
                toast: true,
                title: '編輯成功',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                position: 'top'
              })
              this.hideModal()
              this.$emit('getCoupon')
              this.date = ''
            }
          })
          .catch(err => {
            if (err) {
              this.isLoading = false
              this.$swal({
                toast: true,
                title: '無法編輯優惠券，請聯繫管理員',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false,
                position: 'top'
              })
            }
          })
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: this.temp })
          .then(res => {
            if (res.data.success) {
              this.isLoading = false
              this.$swal({
                toast: true,
                title: '新增成功',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                position: 'top'
              })
              this.hideModal()
              this.$emit('getCoupon')
              this.date = ''
            }
          })
          .catch(err => {
            if (err) {
              this.isLoading = false
              this.$swal({
                toast: true,
                title: '無法新增優惠券，請聯繫管理員',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false,
                position: 'top'
              })
            }
          })
      }
    }
  },
  watch: {
    tempCoupon () {
      this.temp = {
        ...this.tempCoupon,
        is_enabled: this.tempCoupon.is_enabled || 0
      }
      if (!this.isNew) {
        this.date = `${new Date(this.temp.due_date * 1000).getFullYear()}-${('0' + (new Date(this.temp.due_date * 1000).getMonth() + 1)).slice(-2)}-${('0' + new Date(this.temp.due_date * 1000).getDate()).slice(-2)}`
      }
    }
  }
}
</script>
