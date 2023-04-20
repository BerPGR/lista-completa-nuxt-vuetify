<template>
  <v-row class="ma-0">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
          <v-card>
            <v-toolbar color="#9652FF">
              <v-toolbar-title class="font-weight-bold white--text">
                Add dutie
              </v-toolbar-title>
            </v-toolbar>
            <v-col cols="12" md="8">
              <v-card-text>
                <v-text-field outlined solo label="Title" v-model="title"></v-text-field>
                <v-text-field outlined solo label="Description" v-model="desc"></v-text-field>
                <v-select :items="level" v-model="level"></v-select>
              </v-card-text>
            </v-col>
            <v-card-text>
              <v-btn color="red" @click="dialog = !dialog">Fechar</v-btn>
              <v-btn color="success" @click="saveDutie">Save Dutie</v-btn>
            </v-card-text>
          </v-card>
      </v-dialog>
    </v-row>
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
        <v-btn icon @click="dialog = !dialog">
          <v-icon color="purple">
            mdi-plus-circle
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-col cols="12" v-for="(item, i) in duties" :key="i">
        <v-card>
          <v-row class="ma-0">
            <v-col cols="12" md="5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
                  <v-list-item-title>{{ item.description }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Creation Date</v-list-item-subtitle>
                  <v-list-item-title>{{ getFormatedDate(item.time) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  async fetch() {
    const { data: duties } = await this.$axios.get('/dever')
    this.duties = duties
  },
  data() {
    return {
      level1: 'Overdue',
      dialog: false,
      title: null,
      desc: null,
      duties: [],
      level: ['Overdue', 'Ongoing', 'Completed'],
    }
  },
  methods: {
    async saveDutie() {
      this.dialog = !this.dialog
      const newDutie = { title: this.title, description: this.desc, type: this.level1, time: new Date().getTime() }
      await this.$axios.post('/dever', newDutie)
    },
    getFormatedDate(date){
      const data = new Date(date)
      return data.toLocaleDateString()
    }
  },
}
</script>
