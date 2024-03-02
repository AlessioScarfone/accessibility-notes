---
prev: 
    text: 'Home'
    link: '/index'
next: false
sidebar: false
---


<script setup>
import BuyMeACoffeeBtn from '../.vitepress/theme/components/BuyMeACoffeeBtn.vue';
import { BUY_ME_A_COFFEE, GITHUB_LINK, featureFlag } from '../.vitepress/constants';
</script>

# Credits

If you appreciated my work and found it useful, support me with a **star** ⭐ on <a :href="GITHUB_LINK" target="_blank">GitHub</a> and if you like, a **coffee** ☕! 
**Thanks!**

<BuyMeACoffeeBtn v-if="featureFlag.BUY_ME_A_COFFEE" title="Buy me a coffee" :url=BUY_ME_A_COFFEE style="margin:0px"/>

----

Home page image from: <a href="https://www.flaticon.com/free-icons/accessibility" title="accessibility icons">Accessibility icons created by Smashicons - Flaticon</a>