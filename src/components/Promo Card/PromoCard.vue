<template>
  <a :href="link" class="c-promo-card">
    <div class="c-promo-card__content">
      <p class="c-promo-card__text">{{ text }}</p>
      <div class="card-icon">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
