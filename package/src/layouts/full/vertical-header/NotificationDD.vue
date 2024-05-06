<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <v-btn icon class="custom-hover-primary" size="small" variant="text" color="primary" >
        <v-badge dot color="primary" offset-x="-5" offset-y="-3">
            <Icon icon="solar:bell-bing-line-duotone" height="22" />
        </v-badge>
    </v-btn>
</template>
