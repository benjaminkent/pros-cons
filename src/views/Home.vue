<template lang="pug">
  .home-container
    h1 Pros and Cons
    form.title-container(v-if='!title' @submit='submitTitle')
      input(v-model='enteredTitle' type='text' placeholder='Enter title for list')
      button(type='submit') Enter
    .title(v-else)
      button(@click='updateTitle') Update Title
      h2 {{ title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  title: string = ''
  enteredTitle: string = ''

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
  border: 1px solid #b200ff;
  padding: 10px 0;
  background-color: #b200ff;
  color: #fff;
  font-size: 14px;
  border-radius: 30px;
  cursor: pointer;
}
</style>
