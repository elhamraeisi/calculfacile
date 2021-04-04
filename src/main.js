import Vue from 'vue'
import App from './App.vue'
import Solde from './components/Autre/Solde.vue'
import Tva from './components/Autre/CalculTVA.vue'
import Ebay from './components/E-commerce/Ebay.vue'
import Paypal from './components/E-commerce/Paypal.vue'
import Rakuten from './components/E-commerce/Rakuten.vue'
import Dropshipping from './components/E-commerce/Dropshipping.vue'
import Notaire from './components/Immobilier/Notaire.vue'
import Emprunt from './components/Immobilier/Emprunt.vue'
import CapitalTotal from './components/Epargne/CapitalTotal.vue'
import DureePlacement from './components/Epargne/DureePlacement.vue'
import EpargnePeriodique from './components/Epargne/EpargnePeriodique.vue'
import Imc from './components/Sante/Imc.vue'
import Home from './components/Home.vue'



import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import Ads from 'vue-google-adsense'
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(VueRouter);

require('./assets/style/style.css');
const routes = [
  { path: '', component: Home },
  { path: '/solde', component: Solde },
  { path: '/tva', component: Tva },
  { path: '/ebay', component: Ebay },
  { path: '/paypal', component: Paypal },
  { path: '/rakuten', component: Rakuten },
  { path: '/notaire', component: Notaire },
  { path: '/emprunt', component: Emprunt },
  { path: '/dropshipping', component: Dropshipping },
  { path: '/capitaltotal', component: CapitalTotal },
  { path: '/dureeplacement', component: DureePlacement },
  { path: '/epargneperiodique', component: EpargnePeriodique },
  { path: '/imc', component: Imc },


];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
