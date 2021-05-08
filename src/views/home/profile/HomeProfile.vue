 <!--
 * @desc: 个人信息
 * @author czh996.top
 * @Date: 2021-03-13
 -->
<template>
  <div>
    <profile>
      <base-button class="msg-btn">给我留言</base-button>
    </profile>
  </div>
</template>

<script>
import Profile from '@/components/content/profile/Profile';
import { BaseButton } from '@/components/base';

export default {
  components: {
    Profile,
    BaseButton,
  },
};
</script>

<style scoped lang='scss'>
@import '@app';
@import '@theme';

.msg-btn {
  width: 250px;
  height: 35px;
}
</style>