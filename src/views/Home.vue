<template lang="pug">
  .home-container
    h1 Compare!
    form.title-container(v-if='showCompareInput' @submit.prevent='submitCompares')
      input(v-model='firstCompareValue' type='text' placeholder='Enter first thing to compare')
      input(v-model='secondCompareValue' type='text' placeholder='Enter second thing to compare')
      button(type='submit') Enter
    .update-title(v-else)
      button(@click='updateCompares') Update Compares
    .add-container(v-if='compares.first')
      .add-form
        form(@submit.prevent='addItems')
          .input-group
            label Item for {{ compares.first }}
            input(v-model='firstCompareItem' type='text')
          .input-group
            label Item for {{ compares.second }}
            input(v-model='secondCompareItem' type='text')
          .add-buttons
            button(type='submit')
              i.fad.fa-plus-circle
              | Add items to compare
    .lists-container
      List(:header='compares.first' :list='firstList' :removeItem='removeItemFromFirst')
      List(:header='compares.second' :list='secondList' :removeItem='removeItemFromSecond')
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
  firstCompareValue: string = ''
  secondCompareValue: string = ''
  compares: { first: string; second: string } = {
    first: '',
    second: '',
  }
  firstCompareItem: string = ''
  secondCompareItem: string = ''
  showCompareInput: boolean = true
  firstList: string[] = []
  secondList: string[] = []

  submitCompares() {
    if (!this.firstCompareValue || !this.secondCompareValue) {
      return
    }
    this.compares = {
      first: this.firstCompareValue,
      second: this.secondCompareValue,
    }
    this.firstCompareValue = ''
    this.secondCompareValue = ''
    this.showCompareInput = false
  }
  updateCompares() {
    this.showCompareInput = true
    this.compares = {
      first: '',
      second: '',
    }
  }
  addItems() {
    if (!this.firstCompareItem || !this.secondCompareItem) {
      return
    }
    this.firstList.push(this.firstCompareItem)
    this.secondList.push(this.secondCompareItem)
    this.firstCompareItem = ''
    this.secondCompareItem = ''
  }
  removeItemFromFirst(index: number) {
    this.firstList.splice(index, 1)
  }
  removeItemFromSecond(index: number) {
    this.secondList.splice(index, 1)
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
  margin: 10px 0;
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
  border: 1px solid #008bf8;
  padding: 10px 0;
  background-color: #008bf8;
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
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 100px;
}
.add-container {
  margin-top: 30px;
  min-width: 310px;
  .add-form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .add-buttons {
    display: flex;
    margin-top: 20px;
    i {
      margin-right: 7px;
      color: #8cea00;
    }
    button {
      background-color: #182825;
      border: 1px solid #182825;
    }
    button:hover {
      background-color: #04e762;
      border: 1px solid #04e762;
    }
    button:first-child {
      margin-right: 10px;
    }
    button:last-child {
      margin-left: 10px;
    }
  }
}

@media (max-width: 850px) {
  .lists-container {
    width: 100%;
  }
}
</style>
