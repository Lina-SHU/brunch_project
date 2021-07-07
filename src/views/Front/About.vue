<template>
  <section>
    <div class="about-heroheader mb-5">
      <div class="container">
        <h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base">
          經典系列<br>用心製作
        </h2>
      </div>
    </div>
    <div class="container">
      <div class="about-content">
        <div data-aos="fade-left" class="about-img">
          <img src="https://i.imgur.com/xIm3uBq.jpg" alt="about" class="img-fiuld w-50">
        </div>
        <div data-aos="fade-up" class="bg-secondary p-md-6 p-4 shadow-sm about-text">
          <h3 class="text-primary mb-3">關於 FRESH BRUNCH</h3>
          <p>
            我們是充滿活力熱情的團隊，對早午餐的品質有著義無反顧的堅持，從食材挑選、製作到打包，注重衛生管理，確保您吃得安全，食得安心。
          </p>
          <p>
            在 FRESH BRUNCH 裡一切的一切除了滿滿的活力，亦有嚴格的食安控管，並且張羅一切與新鮮有關聯的事/食物，每日一早活力來源必少不了我們！
          </p>
          <p>
            您的早晨就交由 FRESH BRUNCH 注入一天的精彩吧！
          </p>
        </div>
      </div>
    </div>
    <div class="scroll-banner mb-5"></div>
    <div class="container mb-5">
      <div class="row mb-3">
        <div class="col-md-6">
          <img data-aos="fade-up" src="https://i.imgur.com/9MFB2s8.jpg" alt="goods" class="w-100 rounded-3 shadow ">
        </div>
        <div class="col-md-6">
          <div data-aos="fade-down" class="d-flex-center flex-column h-100 mt-lg-0 mt-2">
            <h4>嚴選食材</h4>
            <p class="w-lg-50">
              使用安心食物、減少加工食品。<br>
              確保您所享用的不僅是最新鮮美食、亦是最天然優質食材，讓您吃得安心又放心。
            </p>
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse mb-3">
        <div class="col-md-6">
          <img data-aos="fade-down" src="https://i.imgur.com/RtljzuZ.jpg" alt="goods" class="w-100 rounded-3 shadow">
        </div>
        <div class="col-md-6">
          <div  data-aos="fade-up" class="d-flex-center flex-column align-items-lg-end h-100 text-lg-end mt-lg-0 mt-2">
            <h4>安心品質</h4>
            <p class="w-lg-50">
              從食材挑選到衛生管理，從大事項到小細節，您的每一口都有我們最嚴格的把關認證，只為了讓您安心享受。
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img data-aos="fade-up" src="https://i.imgur.com/z1bQX68.jpg" alt="goods" class="w-100 rounded-3 shadow">
        </div>
        <div class="col-md-6">
          <div data-aos="fade-down" class="d-flex-center flex-column h-100 mt-lg-0 mt-2">
            <h4>新鮮抵達</h4>
            <p class="w-lg-50">
              使用安全亦可回收食盒包裝，且各美食皆為現點現做，食材亦為當日抵達，確保您享用的微最新鮮美食。
            </p>
          </div>
        </div>
      </div>
    </div>
    <cta></cta>
    <footerSection></footerSection>
  </section>
</template>

<script>
import footerSection from '../../components/Footer.vue'
import cta from '../../components/CallToAction.vue'

export default {
  components: {
    footerSection,
    cta
  }
}
</script>
