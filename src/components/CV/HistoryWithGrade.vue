<template>
  <div class="c-history c-history--with-grade">
    <div :class="['c-history__grade', { 'c-history__grade--long': isLong }]">
      <h3>{{ grade }}</h3>
    </div>
    <div class="c-history__content">
      <h3 class="c-history__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLong: {
      type: Boolean,
      required: false,
      default: false,
    },
    grade: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
