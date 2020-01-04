export default {
  install(Vue, option) {
    const $_debug = option.debug.toLowerCase() == 'true' ? true : false;
    Vue.prototype.$_debug_isDebug = () => {
      return $_debug;
    };
    Vue.prototype.$_debug_console_log = (...args) => {
      if ($_debug) {
        return console.log(args);
      }
    };
    Vue.prototype.$_suffleArray = a => {
      if (Array.isArray(a)) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      } else {
        return ['ERR', "is'nt Array"];
      }
    };
  },
};
