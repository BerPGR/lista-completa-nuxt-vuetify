<template>
  <v-app dark>
    <v-navigation-drawer app color="#9652FF">
      <div class="text-center mt-10">
        <v-avatar size="100">
          <v-img :src="require('../assets/eu.png')"></v-img>
        </v-avatar>
        <p>Bernardo</p>
      </div>
      <v-list>
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
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <h3>TODODEV</h3>
      <v-spacer></v-spacer>
      <h2 class="grey--text">SIGN OUT</h2>
      <v-btn icon>
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>  
    </v-app-bar>
    <v-main style="padding: 64px 0px 0px 0px">
      <v-content>
        <Nuxt />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
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