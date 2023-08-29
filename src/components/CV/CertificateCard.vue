<template>
  <a :href="href" target="_blank">
    <div class="c-certificate">
      <img :src="imgSrc" :alt="imgAlt" />
      <p class="c-certificate__title">{{ title }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
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
