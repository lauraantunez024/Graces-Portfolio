<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
   
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <!-- <v-main> -->
        <Nuxt />
    <!-- </v-main> -->
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-cat',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-video-vintage',
          title: 'Video Projects',
          to: '/videos'
        },
        {
          icon: 'mdi-audio-input-stereo-minijack',
          title: 'Audio Projects',
          to: '/audio'
        },
        {
          icon: 'mdi-cellphone',
          title: 'Contact Me',
          to: '/contact'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Grace Rolfe"
    }
  }
}
</script>
<style scoped>
.v-toolbar__title {
  margin-left: 45vw;
  font-size: 2rem;
}

</style>