<template>
  <header class="login-header">
    <logo-full-icon class="logo" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoFullIcon from '@/assets/assets-logo-full.svg?component';

export default defineComponent({
  components: { LogoFullIcon },
});
</script>

<style lang="less" scoped>
@import '@/style/variables.less';
.login-header {
  height: 64px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(5px);
  color: @text-color-primary;
}
</style>
