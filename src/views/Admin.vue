<template lang="pug">
.admin.full.primary
  .questions
    .title
      h3 questions
      .btn 
    .contents
      .content(v-for="question in questions") {{ question }}

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'admin',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      questions: state => state.questions.questions,
    }),
  },
  methods: {},
  created() {
    console.log(this.$store);
  },
};
</script>

<style lang="scss" scoped></style>
