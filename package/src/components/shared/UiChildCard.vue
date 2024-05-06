<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>

<template>
    <v-card variant="outlined">
        <v-card-item class="py-4 px-6">
            <v-card-title class="text-h5 mb-0">{{ title }}</v-card-title>
        </v-card-item>
        <v-divider />
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
