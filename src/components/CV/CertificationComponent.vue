<script>
export default {
  name: "CertificationComponent",
  props: {
    href: String,
    title: String,
    imgUri: String,
  },
  setup() {},
};
</script>

<template>
  <a :href="href" class="certification">
    <img :src="imgUri" alt="" class="certification__image" />
    <p class="certification__title">{{ title }}</p>
  </a>
</template>

<style lang="scss" scoped>
@import "../../../public/sass/abstracts/_mixins.scss";
.certification {
  --imageWidth: 80px;
  --imageHeight: 100px;
  --topMargin: 50px;
  --maxWidth: 400px;
  --gap: 25px;

  @include respond(phone) {
    --topMargin: 30px;
    --gap: 20px;
  }

  max-width: var(--maxWidth);
  display: flex;
  gap: var(--gap);
  margin-top: var(--topMargin);

  &__image {
    height: var(--imageHeight);
    width: var(--imageWidth);

    @include respond(phone) {
      height: calc(var(--imageHeight) / 2);
      width: calc(var(--imageWidth) / 2);
    }
  }

  &__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0.2rem 0.5rem;
    color: #ffffff;

    @include respond(phone) {
      font-size: 2rem;
    }
  }
}
</style>
