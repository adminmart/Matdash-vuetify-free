<script setup lang="ts">
import { BlogCardData } from '@/data/Dashboard';
</script>
<template>
    <v-row>
        <v-col cols="12" lg="4" v-for="card in BlogCardData" :key="card.title">
            <v-card elevation="10"  rounded="md" class="card-hover">
                <div>
                    <v-img :src="card.coveravatar" height="250px" cover class="rounded-t-md align-end text-right">
                        <v-card-item
                            ><v-chip class="bg-surface text-body-2 font-weight-medium" size="small" rounded="sm" v-text="card.read"></v-chip
                        ></v-card-item>
                    </v-img>
                    <v-avatar size="40" class="mt-n7 mx-6">
                        <img :src="card.avatar" alt="icon" height="40" />
                    </v-avatar>
                    <v-card-item class="pt-4">
                        <v-chip class="text-body-2 font-weight-medium bg-grey100" size="small" rounded="sm" v-text="card.category"></v-chip>
                        <h5 class="text-h5 text-13 my-6 custom-text-primary">
                            <RouterLink class="text-decoration-none color-inherits custom-title" :to="card.link">{{ card.title }}</RouterLink>
                        </h5>
                        <div class="d-flex align-center justify-space-between">
                            <div>
                                <v-avatar class="" size="18">
                                    <EyeIcon size="18" class="text-textPrimary" />
                                </v-avatar>
                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.view"></span>
                                <v-avatar class="ml-4" size="18">
                                    <Message2Icon size="18"  class="text-textPrimary" />
                                </v-avatar>
                                <span class="text-subtitle-1 ml-2 text-textSecondary" v-text="card.comments"></span>
                            </div>
                            <div>
                                <v-avatar size="10">
                                    <CircleIcon size="10" class="text-textPrimary" />
                                </v-avatar>
                                <span class="text-subtitle-2 ml-2 text-textSecondary" v-text="card.time"></span>
                            </div>
                        </div>
                    </v-card-item>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
