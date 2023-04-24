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
                <v-select :items="level" v-model="level1"></v-select>
              </v-card-text>
            </v-col>
            <v-card-text>
              <v-btn color="red" @click="dialog = !dialog">Fechar</v-btn>
              <v-btn color="success" @click="saveDutie()">Save Dutie</v-btn>
            </v-card-text>
          </v-card>
      </v-dialog>

      <v-dialog v-model="editDialog" persistent>
          <v-card>
            <v-toolbar color="#9652FF">
              <v-toolbar-title class="font-weight-bold white--text">
                Add dutie
              </v-toolbar-title>
            </v-toolbar>
            <v-col cols="12" md="8">
              <v-card-text>
                <v-text-field outlined solo label="Title" v-model="titleEdit"></v-text-field>
                <v-text-field outlined solo label="Description" v-model="descEdit"></v-text-field>
                <v-select :items="level" v-model="level1Edit"></v-select>
              </v-card-text>
            </v-col>
            <v-card-text>
              <v-btn color="red" @click="editDialog = !editDialog">Fechar</v-btn>
              <v-btn color="success" @click="() => {
                const updDutie = { title: titleEdit, description: descEdit, type: level1Edit }
                updateDutie(updDutie)
              }">Save Updated Dutie</v-btn>
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
          <v-row class="ma-0" align="center">
            <v-col cols="12" md="5">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
                  <v-list-item-title><v-icon small>mdi-square-small</v-icon>{{ item.description }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle>Creation Date</v-list-item-subtitle>
                  <v-list-item-title>{{ getFormatedDate(item.time) }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" md="2" v-if="item.type">
              <v-chip :color="getChipColor(item.type)" class="font-weight-bold px-6 py-2">
                {{ item.type }}
              </v-chip>
            </v-col>
            <v-col cols="12" md="3">
              <v-row class="ma-0">
                <v-btn icon @click="deleteDutie(item)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
                <v-btn icon class="ml-4" @click="() =>{
                  id = item._id
                  titleEdit = item.title
                  descEdit = item.description
                  level1Edit = item.type
                  editDialog = !editDialog
                }">
                  <v-icon color="orange">mdi-pencil</v-icon>
                </v-btn>
              </v-row>
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
      id: null,
      level1: 'Overdue',
      dialog: false,
      editDialog: false,
      title: null,
      desc: null,
      titleEdit: null,
      descEdit: null,
      level1Edit: null,
      duties: [],
      level: ['Overdue', 'Ongoing', 'Completed'],
    }
  },
  methods: {
    async saveDutie() {
      this.dialog = !this.dialog
      const newDutie = { title: this.title, description: this.desc, type: this.level1, time: new Date().getTime() }
      await this.$axios.post('/dever', newDutie)
      .then(() => {
        location.reload()
      })
    },

    async deleteDutie(dutie) {
      await this.$axios.delete(`/dever/${dutie._id}`, dutie).then(() => {
        location.reload()
      })
    },

    async updateDutie(dutieUpdated) {
      this.editDialog = !this.editDialog
      const updatedDutie = { title: dutieUpdated.title, description: dutieUpdated.description, type: dutieUpdated.type, time: new Date().getTime() }
      await this.$axios.put(`/dever/${this.id}`, updatedDutie)
    },

    getFormatedDate(date){
      const data = new Date(date)
      return data.toLocaleDateString()
    },

    getChipColor(type) {
      if (type === 'Ongoing') {
        return "orange"
      }
      else if (type === 'Overdue') {
        return 'red'
      }
      else {
        return 'green'
      }
    }
  },
}
</script>
