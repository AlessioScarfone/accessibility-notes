// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import BuyMeACoffeeBtn from './components/BuyMeACoffeeBtn.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      //TODO: pass correct url
      'nav-bar-content-after': () => h(BuyMeACoffeeBtn, { title: "Buy me a coffee", url: "https://www.buymeacoffee.com" })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
