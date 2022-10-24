<script>
export default {
  name: "GenericButton",
  props: {
    href: String,
    corner: String,
    size: String,
    color: String,
    button: Boolean,
  },
  setup() {},
};
</script>

<template>
  <button v-if="button" :href="href" :class="[corner, size, color]">
    <slot></slot>
  </button>
  <a v-else :href="href" :class="[corner, size, color]">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
a,
button {
  color: var(--color-white);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 400;
  display: inline-block;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  border: none;
  position: relative;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 12px;

  &:hover,
  &:focus {
    color: var(--color-black);
    transform: scale(1.03);
    font-weight: 600;
  }
  &:focus {
    outline: 3px solid var(--color-primary) !important;
  }

  &.purple {
    background-color: var(--color-primary);

    &:hover,
    &:focus {
      background-color: var(--color-white);
    }
  }

  &.grey {
    background-color: var(--color-card-git);

    &:hover,
    &:focus {
      background-color: var(--color-white);
    }
  }

  &.round {
    border-radius: 8rem;
  }

  &.square {
    border-radius: 1rem;
  }
  &.large {
    font-size: 3rem;
    padding: 0.5rem 5rem;
  }
  &.medium {
    font-size: 2.4rem;
    padding: 0.6rem 4.5rem;
  }
  &.small {
    font-size: 2.2rem;
    padding: 0.4rem 3rem;
  }
}
</style>
