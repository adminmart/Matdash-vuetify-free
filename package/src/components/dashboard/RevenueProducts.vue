<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { RevenueProjectsData } from '@/data/Dashboard';
</script>
<template>
    <v-card elevation="10" class="revenue-products">
        <v-card-item class="pb-4">
            <div class="d-flex ga-3 align-center justify-space-between">
                <v-card-title class="text-h5">Revenue by Product</v-card-title>
            </div>
            <div class="mt-4">
                <v-table class="revenue-table">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-body-1">Assigned</th>
                                <th class="text-body-1">Progress</th>
                                <th class="text-body-1">Priority</th>
                                <th class="text-body-1">Budget</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in RevenueProjectsData" :key="item.leadname" class="month-item">
                                <td>
                                    <div class="d-flex align-center">
                                        <v-avatar size="48" rounded="md"> <img :src="item.img" :alt="item.img" width="48" /></v-avatar>
                                        <div class="mx-3">
                                            <h6 class="text-subtitle-1 text-no-wrap font-weight-medium">{{ item.leadname }}</h6>
                                            <span class="text-body-1 text-no-wrap text-textSecondary">{{ item.designation }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-no-wrap text-body-1 text-textSecondary">
                                        {{ item.projectname }}
                                    </p>
                                </td>
                                <td>
                                    <v-chip rounded="sm" class="font-weight-semibold" :color="item.statuscolor" size="small" label>{{
                                        item.statustext
                                    }}</v-chip>
                                </td>
                                <td>
                                    <p class="text-body-1">{{ item.money }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-table>
            </div>
        </v-card-item>
    </v-card>
</template>
