import { AuthOptions } from '@gravitano/vue-auth';

export const authOptions: AuthOptions = {
  endpoints: {
    login: {
      url: '/auth/login',
      method: 'post',
    },
    // logout: false,
    logout: {
      url: '/auth/logout',
      method: 'delete',
    },
    user: {
      url: '/auth/me',
      method: 'get',
    },
  },
  token: {
    property: 'data.token',
    type: 'Bearer',
    storageName: 'auth.token',
    autoDecode: false,
    name: 'Authorization',
  },
  user: {
    autoFetch: true,
    property: 'data',
    storageName: 'auth.user',
  },
  moduleName: 'auth',
  expiredStorage: 'auth.expired',
  redirect: {
    home: '/',
    login: '/auth/login',
  },
  registerAxiosInterceptors: true,
  storage: {
    driver: 'cookie', // supported: cookie, local, secureLs (secure local storage)
  },
  refreshToken: {
    enabled: false,
    property: 'data',
    maxAge: 60 * 60 * 24 * 30, // default 30 days
    storageName: 'auth.refresh_token',
    name: 'refresh_token',
    autoLogout: true,
  },
};
