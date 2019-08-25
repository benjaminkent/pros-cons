<template lang="pug">
  .list-container
    h2 {{ header }}
    ol
      Item(
        v-for='(item, index) in list'
        :item='item'
        :removeItem='removeItem'
        :index='index'
        :key='index'
        )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Item from '@/components/Item.vue'

@Component({
  components: {
    Item,
  },
})
export default class List extends Vue {
  @Prop(String) readonly header!: string
  @Prop({ default: [] }) readonly list!: string[]
  @Prop(Function) readonly removeItem!: () => void

  isGreen: boolean = false
}
</script>

<style lang="scss" scoped>
.list-container {
  min-width: 310px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.total {
  margin: 0;
  font-weight: bold;
}
ol {
  padding-left: 0;
  margin: 20px 0 0 0;
  width: 100%;
}
h2 {
  margin: 0;
}
</style>
