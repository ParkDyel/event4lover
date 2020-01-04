<template lang="pug">
transition(name="fade")
  .modal-container(v-if="loaded")
    .header
      slot(name="header")
    .content.dfr.jcc
      slot(name="content")
    .ln-solid
    .btn-wraper.dfr.jcc
      transition(name="fade")
        slot(name="btn-wraper")
</template>

<script>
export default {
  name: 'modal',
  data() {
    return { loaded: false };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>

<style scoped>
.modal-container {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  background-color: rgb(66, 66, 66);
  box-shadow: 4px 4px 3px rgb(0, 0, 0);
}

.content {
  padding-bottom: 10px;
}

.btn-wraper {
  padding-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
  transition-timing-function: ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
