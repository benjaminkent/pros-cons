<template lang="pug">
  .home-container
    h1 Pros and Cons
    form.title-container(v-if='!title' @submit='submitTitle')
      input(v-model='enteredTitle' type='text' placeholder='Enter title for list')
      button(type='submit') Enter
    .title(v-else)
      button(@click='updateTitle') Update Title
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
  input {
    width: 100%;
    background-color: #eee;
    border: none;
    text-indent: 10px;
    padding: 10px 0;
    font-size: 14px;
  }
}
.title {
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
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
