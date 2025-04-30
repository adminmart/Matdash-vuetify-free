<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue';
import { useDisplay } from "vuetify";
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import Logo from './logo/Logo.vue';
// Icon Imports
import Upgradeversion from './vertical-sidebar/UpgradeBox/index.vue';
// dropdown imports
import NotificationDD from './vertical-header/NotificationDD.vue';
import ProfileDD from './vertical-header/ProfileDD.vue';
import { Icon } from '@iconify/vue';
import NavCollapse from './vertical-sidebar/NavCollapse/NavCollapse.vue';
const sidebarMenu = shallowRef(sidebarItems);
const { mdAndDown } = useDisplay();
const sDrawer = ref(true);
onMounted(() => {
  sDrawer.value = !mdAndDown.value; // hide on mobile, show on desktop
});
watch(mdAndDown, (val) => {
  sDrawer.value = !val;
});
</script>

<template>
    <!------Sidebar-------->
    <v-navigation-drawer left elevation="0"  app class="leftSidebar"  v-model="sDrawer">
        <!---Logo part -->
        <div class="pa-5">
            <Logo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <div>
        <perfect-scrollbar class="scrollnavbar">
            <v-list class="pa-6 pt-0">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
                    <NavCollapse class="" :item="item" :level="0" v-else-if="item.children" />
                    <!---Single Item-->
                    <NavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
            </v-list>
            <div class="pa-4">
                <Upgradeversion/>
            </div>
        </perfect-scrollbar>
    </div>

    </v-navigation-drawer>
    <!------Header-------->
    <v-app-bar elevation="0" height="70" class="top-header">
        <div class="d-flex align-center justify-space-between w-100">
            <div>
                <v-btn class="hidden-lg-and-up ms-md-3  text-muted" @click="sDrawer = !sDrawer" icon variant="flat"
                    size="small">
                    <Icon icon="solar:hamburger-menu-outline" height="20"></Icon>
                  
                </v-btn>
                <!-- Notification -->
                <NotificationDD />
            </div>
            <div>
                <!-- Upgrade button -->
                <v-btn class="mr-2 bg-primary" href="https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-demo-section" target="_blank">Check Pro Template</v-btn>
                <!-- User Profile -->
                <ProfileDD />
            </div>
        </div>
    </v-app-bar>
</template>
