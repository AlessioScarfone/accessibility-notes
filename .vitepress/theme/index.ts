// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import BuyMeACoffeeBtn from './components/BuyMeACoffeeBtn.vue';
import { BUY_ME_A_COFFEE, featureFlag } from '../constants';

// https://vitepress.dev/guide/extending-default-theme#layout-slots
let injectableComponents = {}
if(featureFlag.BUY_ME_A_COFFEE) {
  injectableComponents['nav-bar-content-after'] = () => h(BuyMeACoffeeBtn, { title: "Buy me a coffee", url: BUY_ME_A_COFFEE})
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, 
      injectableComponents)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
