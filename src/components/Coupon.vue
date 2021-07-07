<template>
  <div>
    <div class="coupon-banner">
      <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-lg-8">
            <p data-aos="zoom-in" class="fs-1 text-start text-lg-left text-white text-shadow"><strong>還沒領取優惠券？</strong></p>
            <p data-aos="zoom-in" class="text-center fs-1 text-white text-shadow">
            <strong>速速取領專屬優惠券</strong>
            <button class="btn btn-primary btn-lg px-6 ms-lg-3 mt-3 mt-lg-0 rounded-pill" type="button" @click="this.$refs.getCouponModal.openModal()">領獎去</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <getCouponModal ref='getCouponModal'></getCouponModal>
  </div>
</template>

<script>
import getCouponModal from './GetCouponModal.vue'

export default {
  components: {
    getCouponModal
  }
}
</script>
