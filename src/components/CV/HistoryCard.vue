<template>
  <div class="c-history">
    <img class="c-history__image" :src="imageSrc" alt="image" />
    <div class="c-history__content">
      <h3 class="c-history__title">{{ title }}</h3>
      <div
        class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start"
        style="gap: 0.6rem"
      >
        <h4 v-if="company">{{ company }}</h4>
        <h4 v-if="type">•</h4>
        <h4>{{ type }}</h4>
      </div>
      <div
        class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start"
        style="gap: 0.6rem"
      >
        <p>{{ date }}</p>
        <p>•</p>
        <p>{{ duration }}</p>
      </div>
      <div
        class="c-flex-strip c-flex-strip--row c-flex-strip--align-center c-flex-strip--justify-flex-start"
        style="gap: 0.6rem"
      >
        <p>{{ location }}</p>
      </div>
      <div class="c-history__skills">
        <span v-if="skills?.length" class="bold"
          >Skills: <span>{{ skills }}</span></span
        >
      </div>
      <ul>
        <li v-for="(text, index) in textArray" :key="index">
          <p class="c-history__text">{{ text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
    company: String,
    type: String,
    date: String,
    duration: String,
    location: String,
    skills: String,
    text: String,
  },
  computed: {
    textArray() {
      return this.text?.split(",");
    },
  },
};
</script>
