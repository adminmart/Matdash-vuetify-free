<script setup lang="ts">
import { DailyActivitiesData } from '@/data/Dashboard';
import { Icon } from '@iconify/vue';
</script>

<template>
    <v-card elevation="10">
        <v-card-item>
            <v-card-title class="text-h5">Daily activities</v-card-title>
            <div class="daily-activities mt-8 px-3">
                <div v-for="list in DailyActivitiesData" :key="list.title">
                    <v-row class="d-flex mb-1">
                        <v-col cols="4" lg="3" md="auto" sm="auto" class="px-0 pt-0 pb-0 d-flex align-start">
                            <p class="text-body-1 text-textSecondary text-no-wrap">{{ list.title }}</p>
                        </v-col>
                        <v-col cols="1" sm="1" class="px-0 text-center pt-0 pb-0 mt-1">
                            <Icon icon="tabler:circle-filled" size="13" :class="'text-' + list.textcolor" />
                            <div v-if="list.line" class="line mx-auto bg-grey100"></div>
                        </v-col>
                        <v-col cols="7" sm="8" class="pt-0 pb-0">
                            <h6 v-if="list.boldtext" class="text-body-1 text-textPrimary">{{ list.subtitle }}</h6>
                            <p v-else class="text-body-1 text-textPrimary">{{ list.subtitle }}</p>
                            <div class="mt-n1">
                                <RouterLink :to="list.url" class="text-body-1 text-primary text-decoration-none" v-if="list.link">{{
                                    list.link
                                }}</RouterLink>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>

