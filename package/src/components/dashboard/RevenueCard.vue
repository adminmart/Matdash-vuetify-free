<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
const select = ref('Sept 2024');
const items = ref(['Sept 2024', 'Oct 2024', 'Nov 2024']);
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            toolbar: {
                show: false
            },
            type: 'bar',
            fontFamily: 'inherit',
            foreColor: '#adb0bb',
            height: 285,
            stacked: true,
            offsetX: -15
        },
        colors: ['rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-error))'],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '15%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
            padding: {
                top: 0,
                bottom: 0,
                right: 0
            },
            borderColor: 'rgba(0,0,0,0.05)',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'],
            labels: {
                style: { fontSize: '13px', colors: '#adb0bb', fontWeight: '400' }
            }
        },

        tooltip: {
            theme: 'dark'
        }
    };
});

const Chart = {
    series: [
        {
            name: '2024',
            data: [1.2, 2.7, 1, 3.6, 2.1, 2.7, 2.2, 1.3, 2.5]
        },
        {
            name: '2023',
            data: [-2.8, -1.1, -2.5, -1.5, -2.3, -1.9, -1, -2.1, -1.3]
        }
    ]
};
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <div class="d-md-flex justify-space-between mb-mb-0 mb-3">
                <v-card-title class="text-h5">Revenue Forecast</v-card-title>
                <div>
                    <v-select
                        v-model="select"
                        :items="items"
                        variant="outlined"
                        density="compact"
                        class="text-body-1"
                        hide-details
                    ></v-select>
                </div>
            </div>
            <div class="mx-n1 mt-4 pt-2">
                <apexchart type="bar" height="285" class="rounded-bars" :options="chartOptions" :series="Chart.series"> </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
