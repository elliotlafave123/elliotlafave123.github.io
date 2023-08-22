<template>
  <div class="c-certification">
    <img :src="bcsLogo" alt="BCS logo" class="c-certification__image" />
    <div class="c-certification__content">
      <h3 class="c-certification__title">{{ title }}</h3>
      <p class="c-certification__description">{{ description }}</p>
      <!-- <p class="c-certification__date">{{ date }}</p> -->
      <a :href="href" class="c-certification__download"
        >Download Certificate<i class="fa-sharp fa-solid fa-file-pdf"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    bcsLogo: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/BCS_logo_2021.svg/1200px-BCS_logo_2021.svg.png",
    },
  },
};
</script>
