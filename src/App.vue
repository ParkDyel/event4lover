<template lang="pug">
  #app
    //- <div id="nav">
    //-   <router-link to="/">Home</router-link> |
    //-   <router-link to="/about">About</router-link>
    //- </div>
    router-view
</template>
<script>
export default {
  created() {
    window.vueRoot = this;
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;

  background-color: #222;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  /*
     Introduced in Internet Explorer 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
  -ms-user-select: none;
  user-select: none;
}
</style>

<style lang="scss">
@import '@/assets/css/micro.scss';
</style>
