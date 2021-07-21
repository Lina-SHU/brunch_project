<template>
  <div class="col-md-8">
    <div class="row d-flex-center">
      <div class="col-md-4 d-none d-lg-block" v-for="image in imagesUrl" :key="image">
        <div class="ingredients opacity-75" :style="{ 'background-image' : `url(${image}` }" style="background-size: cover; background-position: 20% center; height: 250px;"></div>
      </div>
    </div>
    <div class="d-block d-lg-none">
      <swiper
        :slides-per-view="2"
        :space-between="30"
        :loop="true"
        :autoplay="autoplay"
        :loopFillGroupWithBlank="true"
        :breakpoints="{
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }"
      >
        <swiper-slide v-for="image in imagesUrl" :key="image+1">
          <div class="ingredients opacity-75" :style="{ 'background-image' : `url(${image}` }" style="background-size: cover; background-position: 20% center; height: 250px;"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      autoplay: {
        delay: 3000
      }
    }
  },
  props: ['imagesUrl']
}
</script>
