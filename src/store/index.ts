import { authModule } from '@gravitano/vue-auth';
import { createStore } from 'vuex';
import { authOptions } from '../auth/options';

export type RootState = {
  count: number;
};

// Create a new store instance.
const store = createStore<RootState>({
  modules: {
    auth: authModule(authOptions),
  },
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
