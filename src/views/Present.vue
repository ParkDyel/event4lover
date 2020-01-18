<template lang="pug">
.present.full.dfc.jcc
  .success.full(v-if="isPassed")
    .header 축 800 일!
    .slider-wrap
      vue-flux(v-if="isLoadImages" :options='vueFlux.options' :images='vueFlux.images' :transitions='["book"]' ref='slider')
        template(v-slot:index)
          flux-index
    vue-typer.mail(:text='msg.mail'
      :repeat='0' initialAction="typing"
      :type-delay='100' :pre-type-delay='100' 
      :pre-erase-delay='3000')
  .failed(v-else)
    vue-typer.present(:text="msg.failed[0]"
      :repeat='0' initialAction="typing"
      :type-delay='100' :pre-type-delay='300' 
      :pre-erase-delay='10000'
      @completed='onComplete')
  base-modal(v-if='isRequestRetry')
    template(v-slot:content)
      vue-typer.retry(text="다시 시도해 볼꺼지?.."
        :repeat='0' initialAction="typing"
        :type-delay='100' :pre-type-delay='300' 
        :pre-erase-delay='10000'
        @completed='onCompleteRetry')
    template(v-if='isShowRetryBtn' v-slot:btn-wraper)
      .btn.retry-btn(@click="goTo({name : 'test'})") 재시도
</template>
<script>
import { VueTyper } from 'vue-typer';
import { VueFlux, FluxIndex } from 'vue-flux';

export default {
  name: 'present',
  components: {
    VueTyper,
    VueFlux,
    FluxIndex,
  },
  data() {
    return {
      isPassed: this.$route.params.score > 8 ? true : false,
      isRequestRetry: false,
      isShowRetryBtn: false,
      isLoadImages: false,
      cntLoadImages: 0,
      msg: {
        failed: [
          '실망이야... 우리 사랑이 이것뿐이라니',
          '또르륵.. 우리 추억은 어디로 간 거야',
          '어떻게 너가 우리한테 이럴 수 있어!',
          '나는 혼자 연애했던거야? ㅠㅠ',
        ],
        mail: [
          '어느새 다예와 새로운 기념일을 맞이하게 되었네!',
          '주변 사람들의 걱정과는 달리 날이 가면 갈수록 지겨워지는게 아니라, 다예가 더 이뻐 보이고 더 사랑스러워 보여',
          '그리고 그걸 자주 표현한 것 같은데, 다예가 요새 자꾸 내가 다예한테 차갑다고 해서 억울한 면이 없잖아 있어 ㅠㅠ',
          '그럼에도 다예 말대로 다예가 그렇게 느낀거니깐, 나는 항상 다예를 사랑하고 더 많이 사랑할거야',
          '하지만 앞으로 사귀면서 다투지 않기 위해선 서로를 배려하는 노력이 필요할 것 같아',
          '그럼에도 다례를 사랑하는 마음은 항상 변하지 않을 거야!!',
          '비록 여러모로 다예가 많이 힘든 상황 속이지만 지금까지 잘 이겨내 왔듯 앞으로도 잘 이겨내리라 믿어!',
          '항상 사랑하고 지지하는 남자친구 동영이가!',
        ],
      },
      vueFlux: {
        options: {
          allowFullscreen: false,
          allowToSkipTransition: false,
          autohideTime: 500,
          autoplay: true,
          bindKeys: false,
          delay: 3000,
          enableGestures: false,
          infinite: true,
          lazyLoad: true,
          lazyLoadAfter: 3,
        },
        images: [],
      },
    };
  },
  watch: {
    cntLoadImages(newVal) {
      this.$_debug_console_log(`watch on cntLoadImages => ${newVal}`);
      if (newVal >= 10) {
        this.isLoadImages = true;
      }
    },
  },
  methods: {
    goTo($_req) {
      this.$router.push($_req);
    },
    onComplete() {
      this.$options.showRetryModal = setTimeout(() => {
        this.isRequestRetry = true;
      }, 3000);
    },
    onCompleteRetry() {
      this.isShowRetryBtn = true;
    },
  },
  created() {
    this.$_debug_console_log(this.$route.params);
    this.msg.failed = this.$_suffleArray(this.msg.failed);

    const $_count = 10;
    for (let cur = 1; cur <= $_count; cur++) {
      this.vueFlux.images.push(require(`@/assets/images/${cur}.jpg`));
      this.cntLoadImages += 1;
    }
  },
  beforeDestroy() {
    clearTimeout(this.$options.showRetryModal);
    this.$options.showRetryModal = undefined;
  },
};
</script>

<style scoped>
.success .header {
  font-size: 40px;
  color: rgb(231, 255, 254);
  text-shadow: 4px 4px 4px rgb(0, 0, 0);
  padding-top: 20px;
}

.success .slider-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}

.btn.retry-btn {
  padding: 10px 20px;
  border: 2px;
  border-radius: 5px;
  font-size: 20px;

  background-color: rgb(175, 175, 175);
  box-shadow: 2px 2px 2px rgb(0, 0, 0);
  color: black;
}
</style>

<style lang="scss">
.vue-typer.mail {
  font-size: 25px;
  color: rgb(231, 255, 254);
  text-shadow: 4px 4px 4px rgb(0, 0, 0);
  .custom.char {
    color: inherit;
  }

  .custom.caret {
    background-color: rgb(231, 255, 254);
  }
}
</style>

<style lang="scss">
.vue-typer.present {
  font-size: 50px;
  color: rgb(134, 0, 0);
  text-shadow: 4px 4px 4px rgb(0, 0, 0);
  .custom.char {
    color: inherit;
  }

  .custom.caret {
    background-color: rgb(231, 255, 254);
  }
}
</style>

<style lang="scss">
.vue-typer.retry {
  font-size: 30px;
  color: rgb(221, 221, 221);
  text-shadow: 4px 4px 4px rgb(0, 0, 0);
  .custom.char {
    color: inherit;
  }

  .custom.caret {
    background-color: rgb(231, 255, 254);
  }
}
</style>
