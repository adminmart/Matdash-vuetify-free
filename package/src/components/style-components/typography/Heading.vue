<script setup lang="ts">
import { ref } from "vue";
const headings = ref([
    ['h1.Heading', 'text-h1','font size: 36 | line-height: 60 | font weight: 600'],
    ['h2.Heading', 'text-h2','font size: 30 | line-height: 36 | font weight: 600'],
    ['h3.Heading', 'text-h3','font size: 22 | line-height: 32| font weight: 600'],
    ['h4.Heading', 'text-h4','font size: 20 | line-height: 25 | font weight: 600'],
    ['h5.Heading', 'text-h5','font size: 18 | line-height: 25 | font weight: 600'],
    ['h6.Heading', 'text-h6','font size: 16 | line-height: 25 | font weight: 600'],
]);   

const subtext = ref(
    [
        ['Subtitle 1.', 'text-subtitle-1',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 15 | line-height: 17.6 | font weight: 400'],
        ['Subtitle 2.', 'text-subtitle-2',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 13 | line-height: 16 | font weight: 400'],
        ['Body 1.', 'text-body-1',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 14 | line-height: 24 | font weight: 400'],
        ['Body 2.', 'text-body-2',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 12 | line-height: 24 | font weight: 400'],
        ['Caption.', 'text-caption',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 14 | line-height: 24 | font weight: 400'],
        ['OVERLINE.', 'text-overline letter-spacing-0',' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur','font size: 12 | line-height: 24 | font weight: 400']
    ]
)
</script>
<template>
    <div class="d-flex flex-column ga-1">
        <v-card variant="outlined" v-for="[name, cls,val] in headings" :key="name" class="my-3 pa-6">
            <div :class="[cls, '']">{{ name }}</div>
            <div class="text-caption ">
                <div class="font-weight-medium text-textSecondary">{{ val }}</div>
            </div>
        </v-card>
    </div>

    <div class="d-flex flex-column ga-1">
        <v-card variant="outlined" v-for="[name1, cls1,val1,prop] in subtext" :key="name1" class="my-3 pa-6">
            <div :class="[cls1, '']">{{ name1 }} <span>{{ val1 }}</span></div>
            <div class="text-caption ">
                <div class="text-body-1 text-textSecondary">{{ prop }}</div>
            </div>
        </v-card>
    </div>
</template>
