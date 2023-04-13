<template>
  <v-row class="ma-0">
    <v-col cols="12">
      <h3 class="grey--text ml-4">Dashboard</h3>

      <v-toolbar color="transparent" elevation="0" class="mt-12">
        <v-btn icon>
          <v-icon color="purple">
            mdi-cards
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="success">
            mdi-check-circle
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="orange">
            mdi-briefcase
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="red">
            mdi-clock
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="purple">
            mdi-plus-circle
          </v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
