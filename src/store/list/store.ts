import store from '@/store'
import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'

@Module({ namespaced: true, store, dynamic: true, name: 'ListStore' })
class ListStore extends VuexModule {
  compares: { first: string; second: string } = {
    first: '',
    second: '',
  }
  firstList: string[] = []
  secondList: string[] = []
}

export default getModule(ListStore)
