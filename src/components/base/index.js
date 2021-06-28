import Vue from 'vue'
import BaseNotice from './BaseNotice.vue'
import BaseSelect from './BaseSelect.vue'
import BaseShade from './BaseShade.vue';
import BaseLink from './BaseLink.vue';
import BaseInput from './BaseInput.vue';
import BaseLoader from './BaseLoader.vue';
import BaseLogo from './BaseLogo.vue';
import BaseButton from './BaseButton.vue';
import BasePopover from './BasePopover.vue';
import BaseToast from './BaseToast.vue'

const components = {
  BaseButton,
  BaseInput,
  BaseLink,
  BaseLoader,
  BaseLogo,
  BasePopover,
  BaseShade,
  BaseToast,
  BaseSelect,
  BaseNotice
}

for (const component in components) {
  Vue.component(component, components[component])
}

export {
  BaseButton,
  BaseInput,
  BaseLink,
  BaseLoader,
  BaseLogo,
  BasePopover,
  BaseShade,
  BaseToast,
  BaseSelect,
  BaseNotice
}

