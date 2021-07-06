import { createApp } from 'vue'
/* axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
/* swiper */
import SwiperCore, { Autoplay, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
/* aos */
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
/* veevalidate */
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
/* boostrap */
import 'bootstrap'
/* sweetalert */
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
/* loading */
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App.vue'
import router from './router'
import toCurrency from './assets/js/toCurrency'

AOS.init({
  delay: 500,
  duration: 1000
})

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

SwiperCore.use([Autoplay, Virtual])

const app = createApp(App)
app.config.globalProperties.$toCurrency = toCurrency
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.component('Loading', VueLoading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.mount('#app')
