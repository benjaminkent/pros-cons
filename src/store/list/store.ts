import store from '@/store'
import {
  Module,
  VuexModule,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators'

@Module({ namespaced: true, store, dynamic: true, name: 'ListStore' })
class ListStore extends VuexModule {}

export default getModule(ListStore)
