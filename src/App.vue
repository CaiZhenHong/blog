<template>
  <div id="app">
    <router-view></router-view>
    <base-notice :show="msgShow" @hidden="hidden">
      <div :class="msgType | msgIcon">{{ msgText }}</div>
    </base-notice>
  </div>
</template>

<script>
import { BaseNotice } from '@/components/base';

export default {
  components: {
    BaseNotice,
  },

  data: function () {
    return {
      msgShow: false,
    };
  },

  computed: {
    msgType: function () {
      return this.$store.state.msgBox.type;
    },
    msgText: function () {
      return this.$store.state.msgBox.text;
    },
    flag: function () {
      return Boolean(this.$store.state.msgBox.flag);
    },
  },

  watch: {
    flag: function () {
      this.msgShow = true;
    },
  },

  methods: {
    hidden: function () {
      this.msgShow = false;
    },
  },

  filters: {
    msgIcon: function (v) {
      switch (v) {
        case 'succeed': {
          return 'icon__succeed';
        }
      }
    },
  },
};
</script> 

<style lang="scss">
@import '@theme';
#app {
  border-top: 1px solid #00000000;
  height: 100%;
  background: $bg;
}
</style>
