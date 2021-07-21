<template>
  <div class="modal fade" id="modal" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-primary bg-secondary">
          <h5 class="modal-title">領取優惠券</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <h3 class="animate__animated animate__heartBeat">贈送您 8 折優惠券</h3>
          <p>記得使用唷！<span class="material-icons">sentiment_very_satisfied</span></p>
          <div class="input-group my-3">
            <input type="text" class="form-control" readonly value="FRESHBRUNCH333" ref="couponCode">
            <button class="btn btn-primary" type="button" @click="copyCode">
              <i class="material-icons">content_copy</i>
            </button>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: ''
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    copyCode () {
      this.$refs.couponCode.select()
      document.execCommand('Copy')
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      backdrop: 'static'
    })
  }
}
</script>
