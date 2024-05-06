<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
    <v-card elevation="10" >
        <v-card-item class="py-4 px-6">
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5 mb-0">{{ title }}</v-card-title>
                <slot name="action"></slot>
                <!-- </template> -->
            </div>
        </v-card-item>
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
