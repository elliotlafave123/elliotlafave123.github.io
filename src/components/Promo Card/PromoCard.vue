<template>
  <a :href="link" class="c-promo-card c-promo-card--no-bg c-promo-card--borderless c-promo-card--blue">
    <div class="c-promo-card__header">
      <h3 class="c-promo-card__title">{{ text }}</h3>
    </div>
    <!-- <p class="c-promo-card__description">@article.Created.ToString("D") </p> -->
    <p v-if="description" class="c-promo-card__description">{{ description }}</p>
    <span class="c-promo-card__learn-more">Read more <i class="fa-sharp fa-solid fa-arrow-right"></i></span>
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
    description: {
      type: String,
      required: false,
    },
  },
};
</script>
