<template>
  <form class="theme-switcher">
    <label
      v-for="theme in themes"
      :key="theme.alias"
      class="theme-switcher__label"
    >
      <span class="theme-switcher__title">{{ theme.title }}</span>
      <input type="radio" name="theme" :value="theme.alias" :id="theme.alias" :checked="theme.alias == 'dark-theme' ? true : false" />
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          title: "Light theme",
          alias: "light-theme",
        },
        {
          title: "Dark theme",
          alias: "dark-theme",
        },
      ],
    };
  },
  methods: {
    setTheme() {},
    getThemes() {},
  },
};
</script>

<style lang="scss" scoped>
.theme-switcher {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>