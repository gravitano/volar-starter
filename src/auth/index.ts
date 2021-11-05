import { createAuth } from '@gravitano/vue-auth';
import axios from 'axios';
import router from '../router';
import store from '../store';
import { authOptions } from './options';

export const useAuth = () => createAuth(authOptions, store, router, axios);
