<template lang="pug">
  .home-container
    h1 Pros and Cons
    form.title-container(v-if='!title' @submit='submitTitle')
      input(v-model='enteredTitle' type='text' placeholder='Enter title for list')
      button(type='submit') Enter
    .update-title(v-else)
      button(@click='updateTitle') Update Title
    .add-container
      form
        label Add Item
        input(v-model='addedItem' type='text' placeholder='Add Pro or Con')
        .add-buttons
          button(type='submit')
            i.fad.fa-plus-circle
            | Pro
          button(type='submit')
            i.fad.fa-plus-circle
            | Con
    .title
      h2 {{ title }}
    .lists-container
      List(:header='proHeader' :list='proList')
      List(:header='conHeader' :list='conList')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import List from '@/components/List.vue'

@Component({
  components: {
    List,
  },
})
export default class Home extends Vue {
  title: string = ''
  enteredTitle: string = ''
  proHeader: string = 'Pros'
  conHeader: string = 'Cons'
  proList: string[] = ['pro1', 'pro2', 'pro3']
  conList: string[] = ['con1', 'con2', 'con3']
  addedItem: string = ''

  submitTitle() {
    this.title = this.enteredTitle
  }

  updateTitle() {
    this.title = ''
    this.enteredTitle = ''
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  min-width: 310px;
}
input {
  width: 100%;
  background-color: #eee;
  border: none;
  text-indent: 10px;
  padding: 10px 0;
  font-size: 14px;
}
.update-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  min-width: 310px;
  h2 {
    margin: 0;
  }
}
.title {
  margin-top: 30px;
  min-height: 40px;
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
}
button {
  width: 100%;
  border: 1px solid #034078;
  padding: 10px 0;
  background-color: #034078;
  color: #fff;
  font-size: 14px;
  border-radius: 30px;
  cursor: pointer;
}
button:hover {
  background-color: #222;
}
.lists-container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.add-container {
  margin-top: 30px;
  min-width: 310px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .add-buttons {
    display: flex;
    margin-top: 20px;
    i {
      margin-right: 7px;
    }
    button:first-child {
      margin-right: 10px;
      background-color: green;
      border: 1px solid green;
    }
    button:last-child {
      margin-left: 10px;
      background-color: red;
      border: 1px solid red;
    }
  }
}
</style>
