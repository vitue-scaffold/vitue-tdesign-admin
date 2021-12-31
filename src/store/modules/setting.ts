import STYLE_CONFIG from '@/config/style';
import { COLOR_TOKEN, ColorSeries } from '@/config/color';

// 定义的state初始值
const state = {
  ...STYLE_CONFIG,
  colorList: COLOR_TOKEN,
};

type IInitStateType = typeof state;

interface IStateType extends IInitStateType {
  isAsideFooter: boolean;
}

const mutations = {
  update(state: IStateType, payload: IStateType) {
    state.showBreadcrumb = payload.showBreadcrumb;
    state.mode = payload.mode;
    state.layout = payload.layout;
    state.isSidebarCompact = payload.isSidebarCompact;
    state.splitMenu = payload.splitMenu;
    state.isFooterAside = payload.isFooterAside;
    state.isSidebarFixed = payload.isSidebarFixed;
    state.isHeaderFixed = payload.isHeaderFixed;
    state.showHeader = payload.showHeader;
    state.showFooter = payload.showFooter;
    state.backgroundTheme = payload.backgroundTheme;
    state.brandTheme = payload.brandTheme;
  },
  toggleSidebarCompact(state: IStateType) {
    state.isSidebarCompact = !state.isSidebarCompact;
  },
  showSidebarCompact(state: IStateType, payload: boolean) {
    state.isSidebarCompact = payload;
  },

  addColor(state: IStateType, payload: ColorSeries) {
    state.colorList = { ...state.colorList, ...payload };
  },
};

const getters = {
  showHeader: (state: IStateType) => state.showHeader,
  showSidebar: (state: IStateType) => state.layout !== 'top',
  showSidebarLogo: (state: IStateType) => state.layout === 'side',
  showHeaderLogo: (state: IStateType) => state.layout !== 'side',
  showFooter: (state: IStateType) => state.showFooter,
  mode: (state: IStateType) => {
    if (state.mode === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme:dark)');
      if (media.matches) {
        return 'dark';
      }
      return 'light';
    }
    return state.mode;
  },
};

const actions = {
  async changeTheme({ commit, dispatch }, payload) {
    dispatch('changeMode', payload);
    dispatch('changeBrandTheme', payload);
    commit('update', payload);
  },
  async changeMode({ state }, payload: IStateType) {
    let theme = payload.mode;

    if (payload.mode === 'auto') {
      const media = window.matchMedia('(prefers-color-scheme:dark)');
      if (media.matches) {
        theme = 'dark';
      } else {
        theme = 'light';
      }
    }
    const isDarkMode = theme === 'dark';
    if (theme !== state.mode) {
      document.documentElement.setAttribute('theme-mode', isDarkMode ? 'dark' : '');
    }
  },
  changeBrandTheme({ state }: { state: IStateType }, payload: IStateType) {
    const { brandTheme, mode } = payload;
    if (brandTheme !== state.brandTheme) {
      document.documentElement.setAttribute(
        'theme-color',
        /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/.test(brandTheme) && mode === 'dark'
          ? `${brandTheme}`
          : brandTheme,
      );
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
