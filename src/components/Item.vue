<template lang="pug">
  .item-container
    li
      p.item(
        @click='winner = !winner'
        @contextmenu.prevent='tied = !tied'
        :class='{ green: winner, yellow: tied }'
      ) {{ item }}
      p.remove(@click='removeItem(index)') X
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Item extends Vue {
  @Prop(String) readonly item!: string
  @Prop(Function) readonly removeItem!: () => void
  @Prop(Number) readonly index!: number
  winner: boolean = false
  tied: boolean = false
}
</script>

<style lang="scss" scoped>
.green {
  background-color: #8cea00;
}
.yellow {
  background-color: #ffd91e;
}
li {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 3px;
  p {
    margin: 0;
    padding: 7px 0 7px 5px;
    border-radius: 3px;
  }
}
.item {
  width: 90%;
}
.remove {
  width: 10%;
  display: flex;
  justify-content: center;
}
.remove:hover {
  background-color: red;
}
</style>
