<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logoimg from '@/assets/images/logos/logo.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="Logoimg" alt="home" />
        </RouterLink>
    </div>
</template>