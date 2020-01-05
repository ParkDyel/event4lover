<template lang="pug">
.test
  vue-typer.test(:text="nowQuestion(index)" :repeat='0' initialAction="typing" :type-delay='100' :pre-type-delay='300' 
  :pre-erase-delay='10000'
  :erase-delay='100'
  :erase-on-complete="true" erase-style="backspace" @typed="onTyped" @erased="onErased" @completed='onComplete')
  .btn-wrapper.dfr.jcsa(v-if="isShowBtn")
    .btn.o-btn.dfc.jcc(@click="onClickTrueBtn") O
    .btn.x-btn.dfc.jcc(@click="onClickFalseBtn") X
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'test',
  components: {
    VueTyper,
  },
  data() {
    return {
      index: 0,
      isShowBtn: false,
      nowAnswer: false,
      questions: [
        {
          question: '사귀고 처음 간 식당 이름은 만락회센타입니다.',
          answer: false,
          result: 0,
        },
        {
          question: '사귀고 처음 같이 잔 곳은 누리 호텔입니다.',
          answer: true,
          result: 0,
        },
        {
          question: '처음 커플링을 맞춘 곳의 이름은 파카 주얼리입니다.',
          answer: false,
          result: 0,
        },
        {
          question: '처음 다예네 집에 간 날짜는 11월 20일입니다.',
          answer: true,
          result: 0,
        },
        {
          question: '사귄 지 100일 되는 날은 월요일입니다.',
          answer: true,
          result: 0,
        },
        {
          question: '사귄 지 1년 되는 날은 월요일입니다.',
          answer: true,
          result: 0,
        },
        {
          question: '사귄 지 2년 되는 날은 월요일입니다.',
          answer: false,
          result: 0,
        },
        {
          question: '사귄 지 800일 되는 날은 월요일입니다.',
          answer: true,
          result: 0,
        },
        {
          question: '사귄 지 3년 되는 날은 월요일입니다.',
          answer: false,
          result: 0,
        },
        {
          question: '처음 함께 간 외국 공항은 FUK입니다.',
          answer: true,
          result: 0,
        },
      ],
    };
  },
  computed: {
    nowQuestion() {
      return i => {
        return `Q${i + 1}. ${this.questions[i].question}`;
      };
    },
  },
  methods: {
    checkResult() {
      const $_qLen = this.questions.length;
      const $_theQuestion = this.questions[this.index];

      this.isShowBtn = false;
      $_theQuestion.result = $_theQuestion.answer === this.nowAnswer ? 1 : 0;

      if ($_qLen - 1 > this.index) {
        this.index += 1;
      } else {
        this.$router.push({
          name: 'present',
          params: {
            score: this.questions.reduce((acc, cur) => {
              return acc + cur.result;
            }, 0),
          },
        });
      }
    },
    onTyped($_str) {
      this.isShowBtn = true;
      this.$_debug_console_log(`onTyped[${this.index}] : ${$_str}`);
    },
    onErased($_str) {
      this.$_debug_console_log(`onErased[${this.index}] : ${$_str}`);
    },
    onComplete() {
      this.$_debug_console_log(`onComplete[${this.index}]`);
      this.checkResult();
    },
    onClickTrueBtn() {
      this.$_debug_console_log(`onClickTrueBtn[${this.index}]`);
      this.nowAnswer = true;
      this.checkResult();
    },
    onClickFalseBtn() {
      this.$_debug_console_log(`onClickFalseBtn[${this.index}]`);
      this.nowAnswer = false;
      this.checkResult();
    },
  },
  created() {
    this.questions = this.$_suffleArray(this.questions);
  },
};
</script>

<style lang="scss" scoped>
.test {
  padding: 20vh 10vw;
  width: 80vw;
  .btn-wrapper {
    position: absolute;
    bottom: 25%;
    left: 0;

    width: 90vw;
    height: 20%;

    padding: 0 5vw;
    font-size: 100px;

    z-index: 2;
    .btn {
      width: 100%;
      height: 100%;

      &.o-btn {
        color: rgb(65, 163, 255);
        text-shadow: 3px 3px 2px rgb(10, 28, 44);
      }
      &.x-btn {
        color: rgb(255, 60, 60);
        text-shadow: 3px 3px 2px rgb(37, 10, 10);
      }
    }
  }
}
</style>

<style lang="scss">
.vue-typer.test {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
  font-size: 50px;
  color: rgb(231, 255, 254);
  text-shadow: 4px 4px 4px rgb(0, 0, 0);
  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
    color: inherit;
    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
    }
    &.selected {
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
    }
    &.erased {
      /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */
    background-color: rgb(231, 255, 254);
    &.pre-type {
      /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
    }
    &.pre-erase {
      /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
    }
    &.idle {
      /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
    }
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
    }
    &.selecting {
      /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
    }
    &.erasing {
      /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
    }
    &.complete {
      /* Styles for the idle caret when VueTyper has finished all typing/erasing */
    }
  }
}
</style>
