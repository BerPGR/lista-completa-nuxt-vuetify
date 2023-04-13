<template>
  <v-app dark>
    <v-navigation-drawer app color="#9652FF" v-model="drawer">
      <div class="text-center mt-10">
        <v-avatar size="100">
          <v-img :src="require('../assets/eu.png')"></v-img>
        </v-avatar>
        <p class="white--text">Bernardo</p>
        <v-btn class="mt-4 white--text" color="green lighten-2">
          Add new project
        </v-btn>
      </div>
      <v-list class="mt-4">
        <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="transparent" app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <h3 class="grey--text font-weight-regular">TODO</h3>
      <h3 class="grey--text">DEV</h3>
      <v-spacer></v-spacer>
      <h2 class="grey--text">SIGN OUT</h2>
      <v-btn icon>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>  
    </v-app-bar>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'Dashboard', icon: 'mdi-apps'
        },
        {
          title: 'Settings', icon: 'mdi-cog'
        }
      ]
    }
  },
}
</script>