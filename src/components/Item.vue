<template lang="pug">
  .item-container
    li(@click='winner = !winner' :class='{ green: winner }')
      p {{ item }}
      p(v-if='winner') Winning!
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Item extends Vue {
  @Prop(String) readonly item!: string
  winner: boolean = false
}
</script>

<style lang="scss" scoped>
.green {
  background-color: #8cea00;
}
li {
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  p {
    margin: 0;
  }
}
</style>
