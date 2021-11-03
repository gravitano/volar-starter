import { createAuth } from '@gravitano/vue-auth';
import axios from 'axios';
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from '../router';
import store from '../store';
import { authOptions } from './options';

export const useAuth = () => createAuth(authOptions, axios, store, router);

export const authState = () => {
  const store = useStore();

  const loggedIn = computed(() => store.getters['auth/isLoggedIn']);

  return { loggedIn };
};
