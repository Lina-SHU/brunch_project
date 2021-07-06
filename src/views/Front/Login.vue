<template>
  <div class="about-heroheader mb-5">
    <div class="container">
      <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
        經典系列<br>用心製作
      </h2>
    </div>
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <img src="https://i.imgur.com/RrMajqK.jpg" alt="login-img" class="img-fiuld login-image w-100 shadow">
      </div>
      <div class="col-md-6 d-flex-center flex-column mt-3 mt-lg-0">
        <h3 class="mb-4 text-primary"><strong class="border-bottom border-primary d-inline-block border-4 pb-2">後台管理登入</strong></h3>
        <Form v-slot="{ errors }" @submit="onSubmit">
          <div class="mb-3">
            <label for="email">Email</label>
            <Field type="text" :class="{ 'is-invalid': errors['email'] }" class="form-control" id="email" name="email" rules="email|required" v-model="user.username"></Field>
            <error-message name="email" class="invalid-feedback"></error-message>
          </div>
          <div class="mb-3">
            <label for="password">密碼</label>
            <Field type="password" :class="{ 'is-invalid': errors['密碼'] }" class="form-control" id="password" name="密碼" rules="required" v-model="user.password"></Field>
            <error-message name="密碼" class="invalid-feedback"></error-message>
          </div>
          <button type="submit" class="btn btn-lg btn-primary">登入</button>
        </Form>
      </div>
    </div>
  </div>
  <footerSection></footerSection>
</template>

<script>
import footerSection from '../../components/Footer.vue'

export default {
  data () {
    return {
      user: {}
    }
  },
  components: {
    footerSection
  },
  methods: {
    onSubmit (values) {
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/admin')
          } else {
            this.$swal({
              toast: true,
              title: '登入失敗',
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
  }
}
</script>
