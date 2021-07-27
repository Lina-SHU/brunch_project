<template>
  <Form v-slot="{ errors }" class="p-2 text-primary" @submit="onSubmit">
    <div class="mb-3">
      <label for="email">Email <span class="text-danger">*</span></label>
      <Field type="email" class="form-control border-0 bg-secondary" name="email" id="email" :class="{ 'is-invalid': errors['email'] }" rules="email|required" placeholder="請輸入 Email" v-model="user.email"></Field>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="ClientName">訂購人姓名 <span class="text-danger">*</span></label>
      <Field type="text" class="form-control border-0 bg-secondary" name="您的姓名" id="ClientName" :class="{ 'is-invalid': errors['您的姓名'] }" rules="required" placeholder="請輸入姓名" v-model.trim="user.name"></Field>
      <error-message name="您的姓名" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="ClientTel">訂購人電話 <span class="text-danger">*</span></label>
      <Field type="tel" class="form-control border-0 bg-secondary" name="您的電話" id="ClientTel" :class="{ 'is-invalid': errors['您的電話'] }" rules="min:8|required" placeholder="請輸入電話" v-model.trim="user.tel"></Field>
      <error-message name="您的電話" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="ClientAddr">訂購人地址 <span class="text-danger">*</span></label>
      <Field type="text" class="form-control border-0 bg-secondary" name="您的地址" id="ClientAddr" :class="{ 'is-invalid': errors['您的地址'] }" rules="required" placeholder="請輸入地址" v-model.trim="user.address"></Field>
      <error-message name="您的地址" class="invalid-feedback"></error-message>
    </div>
    <div class="row g-3 mb-3">
      <div class="col-md-6">
        <label for="getDate">取餐日期 <span class="text-danger">*</span></label>
        <Field name="取餐日期" class="form-select border-0 bg-secondary" as="select" :class="{ 'is-invalid': errors['取餐日期'] }" rules="required" placeholder="請選擇取餐日期" v-model="user.getDate" id="getDate">
          <option :value="day" v-for="day in week" :key="day">{{ day }}</option>
        </Field>
        <error-message name="取餐日期" class="invalid-feedback"></error-message>
      </div>
      <div class="col-md-6">
        <label for="getTime">取餐時間 <span class="text-danger">*</span></label>
        <Field name="取餐時間" class="form-select border-0 bg-secondary" as="select" id="getTime" :class="{ 'is-invalid': errors['取餐時間'] }" rules="required" placeholder="請選擇取餐時間" v-model="user.getTime">
          <option value="7:00">7:00a.m.</option>
          <option value="8:00">8:00a.m.</option>
          <option value="9:00">9:00a.m.</option>
          <option value="10:00">10:00a.m.</option>
          <option value="11:00">11:00a.m.</option>
        </Field>
        <error-message name="取餐時間" class="invalid-feedback"></error-message>
      </div>
    </div>
    <div class="mb-3">
      <label for="payment_method">付款方式 <span class="text-danger">*</span></label>
      <Field name="付款方式" class="form-select border-0 bg-secondary" as="select" :class="{ 'is-invalid': errors['付款方式'] }" rules="required" placeholder="請選擇付款方式" v-model="user.payment_method" id="payment_method">
        <option value="信用卡">信用卡</option>
        <option value="Line Pay">Line Pay</option>
        <option value="ATM">ATM</option>
      </Field>
      <error-message name="付款方式" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label ">留言</label>
      <textarea class="form-control border-0 bg-secondary" id="message" rows="3" v-model.trim="message"></textarea>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-lg btn-primary" type="submit">確認結帳</button>
    </div>
  </Form>
</template>

<script>
import emitter from '@/assets/js/mitt'

export default {
  data () {
    return {
      user: {},
      message: '',
      week: []
    }
  },
  methods: {
    getWeekDays () {
      for (let i = 2; i < 10; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)
        this.week.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
      }
    },
    onSubmit (values, { resetForm }) {
      this.isLoading = true
      const data = {
        data: {
          user: this.user,
          message: this.message
        }
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(url, data)
        .then(res => {
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '訂單建立成功',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
            const orderId = res.data.orderId
            this.$router.push(`/order/${orderId}`)
            emitter.emit('product-cart')
          }
        })
        .catch(err => {
          if (err) {
            this.isLoading = false
            this.$swal({
              toast: true,
              title: '無法建立訂單，請聯繫管理員',
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top'
            })
          }
        })
      resetForm()
    }
  },
  created () {
    this.getWeekDays()
  }
}
</script>
