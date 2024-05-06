<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'line',
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 60,
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors:['rgba(var(--v-theme-error))'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        markers: {
            size: 0
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        }
    };
});

const Chart = {
    series: [
        {
            name: 'Income',
            data: [30, 25, 35, 20, 30, 40]
        }
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-flex ga-3 align-center">
                <v-avatar size="48" class="rounded-md bg-lighterror">
                    <Icon icon="solar:box-linear" class="text-error" height="25" />
                </v-avatar>
                <h6 class="text-h6 heading">Total Income</h6>
            </div>
            <v-row class="mt-6">
                <v-col cols="6">
                    <h3 class="text-h3 heading">$680</h3>
                    <div class="text-success text-subtitle-2 font-weight-medium mt-2">+18%</div>
                </v-col>
                <v-col cols="6"> 
                    <apexchart type="line" height="60" :options="chartOptions" :series="Chart.series"> </apexchart>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
