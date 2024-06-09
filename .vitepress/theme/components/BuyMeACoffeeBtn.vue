<script setup lang="ts">
const props = defineProps({
    title: { type: String, required: true, default: "Buy me a coffee" },
    url: { type: String, required: true }
})
</script>

<template>
    <a class="bmc-button" target="_blank" :href="url">
        <img src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png" alt="Buy me a coffee">
        <span class="text">{{ title }}</span>
    </a>
</template>

<style scoped>
.bmc-button {
    width: fit-content;
    height: 44px;
    min-width: 44px;
    max-height: 44px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    line-height: 38px;
    font-size: 14px;
    font-weight: 600;
    padding: 0.3rem 0.5rem 0.3rem 0.4rem;
    border-radius: 8px;
    margin-inline: 1rem;
    text-decoration: none;

    font-family: var(--vp-font-family-base);
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}

.bmc-button:hover {
    color: var(--vp-button-brand-text);
}

.bmc-button img {
    margin-right: 6px;
    object-fit: contain;
    max-height: 100%;
}

.bmc-button .text {
    padding-right: 2px;
}

@media screen and (max-width: 640px) {
    .text {
        display: none;
    }

    .bmc-button {
        padding: 0.1rem;
        margin-inline: 0;
        img {
            margin-right: 0;
        }
    }
}
</style>