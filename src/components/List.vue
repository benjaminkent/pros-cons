<template lang="pug">
  .list-container
    h2 {{ header }}
    p.total Total {{ header }}: *total*
    ol
      li(v-for='item in list')
        p {{ item }}
        i.fad.fa-minus-circle
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class List extends Vue {
  @Prop(String) readonly header!: string
  @Prop({ default: [] }) readonly list!: []

  showTrash: boolean = false
}
</script>

<style lang="scss" scoped>
.list-container {
  min-width: 310px;
}
h2 {
  margin: 0;
}
.total {
  margin: 0;
  font-weight: bold;
}
ol {
  padding-left: 0;
  margin: 20px 0 0 0;
  li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
    }
    i {
      margin-right: 10px;
    }
  }
  li:hover i {
    visibility: visible;
  }
}
i {
  cursor: pointer;
  visibility: hidden;
}
// .fa-plus-circle {
//   color: #11c639;
// }
.fa-minus-circle {
  color: #ff2e23;
}
</style>
