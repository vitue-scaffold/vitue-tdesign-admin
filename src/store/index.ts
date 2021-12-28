import { createStore } from 'vuex';
import user from './modules/user';
import setting from './modules/setting';
import permission from './modules/permission';

export const store = createStore({
  modules: {
    user,
    setting,
    permission,
  },
});

export default store;
