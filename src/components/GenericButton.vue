<template>
  <button
    v-if="button"
    :id="id"
    :type="type"
    :aria-label="ariaLabel"
    :class="[
      'c-button',
      `c-button--${color}`,
      `c-button--${size}`,
      `c-button--${corner}`,
      fullWidth && 'c-button--full-width',
      centerText && 'c-button--center-text',
    ]"
  >
    <slot></slot>
    <i v-if="icon" :class="['fa', icon]" aria-hidden="true"></i>
  </button>
  <a
    v-else
    :id="id"
    :aria-label="ariaLabel"
    :href="href"
    :class="[
      'c-button',
      `c-button--${color}`,
      `c-button--${size}`,
      `c-button--${corner}`,
      fullWidth && 'c-button--full-width',
      centerText && 'c-button--center-text',
      withBorder && `c-button--${color}--with-border`,
    ]"
  >
    <slot></slot>
    <i v-if="icon" :class="['fa', icon]" aria-hidden="true"></i>
  </a>
</template>

<script>
export default {
  name: "GenericButton",
  props: {
    href: String,
    id: String,
    type: String,
    ariaLabel: String,
    corner: {
      type: String,
      default: "semi-round",
    },
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: "primary",
    },
    button: Boolean,
    fullWidth: Boolean,
    centerText: Boolean,
    withBorder: Boolean,
    icon: String, // New prop for FontAwesome icon class
  },
  setup() {},
};
</script>
