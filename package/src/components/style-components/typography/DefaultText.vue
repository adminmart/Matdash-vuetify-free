<script setup lang="ts">
import { ref } from "vue"; 
</script>
<template>
    <div class="d-flex flex-column ga-1">
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-primary">Text Primary</h5>
            <div class="text-body-1 text-primary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-textSecondary">Text Secondary</h5>
            <div class="text-body-1 text-textSecondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-info">Text Info</h5>
            <div class="text-body-1 text-textSecondary" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-warning">Text Warning</h5>
            <div class="text-body-1 text-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-error">Text Error</h5>
            <div class="text-body-1 text-error">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
        <v-card variant="outlined" class="my-3 pa-6">
            <h5 class="text-h5 text-success">Text Success</h5>
            <div class="text-body-1 text-success" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
        </v-card>
    </div>
</template>
