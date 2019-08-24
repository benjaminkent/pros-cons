<template lang="pug">
  .list-container
    .title-container
      h2 *Title*
      i.fad.fa-plus-circle
    p.total Total *title*: *total*
    ol
      li
        p thing
        i.fad.fa-minus-circle
      li
        p thing
        i.fad.fa-minus-circle
      li
        p thing
        i.fad.fa-minus-circle
      li
        p thing
        i.fad.fa-minus-circle
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class List extends Vue {}
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
.title-container {
  display: flex;
  justify-content: space-between;
  i {
    margin: 7px 10px 0 0;
  }
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
}
i {
  cursor: pointer;
}
.fa-plus-circle {
  color: #11c639;
}
.fa-minus-circle {
  color: #ff2e23;
}
</style>
