<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <p>{{ $t('summary') }}</p>

    <div>
      <br />
      <div>
        <t-select
          v-model="language"
          :bordered="false"
          placeholder="-请选择-"
          :clearabl="false"
          :options="options"
          :style="{ width: '150px' }"
          @change="toggleLocales"
        />
      </div>
      <br />
      <div>
        <t-switch size="large" :label="['🌜', '🌞']" @change="toggleThemeMode"></t-switch>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore();

const options = [
  {
    label: '🇨🇳 中文',
    value: 'zh-CN',
  },
  {
    label: '🇬🇧 英文',
    value: 'en',
  },
];

const language = ref('zh-CN');

const { availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};

const toggleThemeMode = (val: boolean) => {
  store.dispatch('setting/changeTheme', {
    mode: val ? 'dark' : 'light',
    showFooter: true,
    isSidebarCompact: false,
    showBreadcrumb: false,
    layout: 'side',
    splitMenu: false,
    isFooterAside: false,
    isSidebarFixed: true,
    isHeaderFixed: true,
    showHeader: true,
    backgroundTheme: 'blueGrey',
    brandTheme: 'default',
  });
};
</script>

<style>
.t-switch.t-size-l .t-switch__content {
  font-size: 16px;
}
</style>
