<script>
export default {
  name: "ErrorSummary",
  props: {
    href: String,
    message: String,
    title: String,
    example: String,
  },
  setup() {},
};
</script>

<template>
  <div class="error-summary" aria-labelledby="error-summary-title" role="alert" data-module="error-summary">
    <h2 class="error-summary__title" id="error-summary-title">{{ title }}</h2>
    <div class="error-summary__body">
      <ul class="list error-summary__list">
        <li>
          <a :href="href">{{ message }}</a>
        </li>
        <li v-if="example">
          <a :href="href">{{ example }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-summary {
  color: var(--color-white);
  background-color: var(--color-grey-dark);
  padding: 15px;
  margin-bottom: 30px;
  border: 5px solid #d4351c;
}

.error-summary__list a {
  font-weight: 700;
  font-size: 1.8rem;
  font-family: "GDS Transport", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: underline;
  text-decoration-thickness: auto;
  text-decoration-thickness: max(1px, 0.0625rem);
  text-underline-offset: 0.1em;
  color: #d4351c;
}

.error-summary__list a:hover {
  color: #942514;
}

.error-summary__list {
  font-family: "GDS Transport", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;
  color: #0b0c0c;
  margin-top: 0;
  margin-bottom: 15px;
  padding-left: 0;
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-top: 0.6rem;
  }
}

.error-summary__title {
  font-family: "GDS Transport", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 700;
  font-size: 2.5rem !important;
  font-size: 1.125rem;
  line-height: 1.1111111111;
  margin-top: 0;
  margin-bottom: 15px;
}
</style>
