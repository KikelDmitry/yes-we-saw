<template>
  <main-content :addClass="title.toLowerCase()">
    <add-form></add-form>
  </main-content>
</template>

<script>
import MainContent from "@/views/AppPage.vue";
import AddForm from "@/components/AddForm.vue";

export default {
  components: {
    MainContent,
    AddForm,
  },
  data() {
    return {
      title: "Stat-page",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>