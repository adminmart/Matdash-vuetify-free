<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex ga-3 align-center">
                <v-avatar size="48" class="rounded-md bg-lightsecondary">
                    <Icon icon="solar:football-outline" class="text-secondary" height="25" />
                </v-avatar>
                <h6 class="text-h6 heading">New Customers</h6>
            </div>

            <div class="d-flex align-center justify-space-between mb-3 mt-12">
                <h5 class="text-textPrimary text-subtitle-1 font-weight-medium">New Goals</h5>
                <div class="text-textPrimary text-subtitle-1 font-weight-medium">83%</div>
            </div>
            <v-progress-linear model-value="83" height="7" color="secondary" bg-color="lightsecondary" rounded></v-progress-linear>
        </v-card-item>
    </v-card>
</template>
