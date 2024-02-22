<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true, default: "Buy me a coffee" },
    url: { type: String, required: true }
})
</script>

<template>
    <a class="bmc-button" target="_blank" :href="url">
        <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee">
        <span class="text">{{ title }}</span>
    </a>
</template>
  
  
<style scoped>
.bmc-button {
    width: fit-content;
    min-height: 44px;
    min-width: 44px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    line-height: 38px;
    font-size: 14px;
    font-weight: 600;
    padding: 0.3rem 0.5rem;
    border-radius: 8px;
    margin-inline: 1rem;

    font-family: var(--vp-font-family-base);
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);

}

.bmc-button img {
    margin-right: 6px;
}

.bmc-button .text {
    padding-right: 2px;
}

@media (max-width: 640px) {
    .text {
        display: none;
    }

    .bmc-button img {
        margin-right: 0;
    }
}
</style>