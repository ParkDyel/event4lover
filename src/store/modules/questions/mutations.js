import { digestMessage } from '@/utils';

import initJson from './init.json';

const mutations = {
  addQuestion(state, payload) {
    const $_res = {
      status: undefined,
    };
    const $_node = this.$_deepCopy(initJson);

    for (const $_key of $_node) {
      if (payload[$_key]) {
        $_node[$_key] = payload[$_key];
        $_res.status = true;
      } else {
        $_res.status = false;
        break;
      }
    }

    if ($_res.status) {
      $_res.hash = digestMessage(String(+new Date()));
      state.questions.push($_node);
    }

    return $_res;
  },
  editQuestion: async function(state, payload) {
    const $_res = {
      status: undefined,
    };
    const $_theQuetsion = state.questions.filter(
      x => x.hash == payload.hash,
    )[0];
    if ($_theQuetsion != undefined) {
      $_res.status = true;
      for (const $_key of $_theQuetsion) {
        if (payload[$_key]) {
          $_theQuetsion[$_key] = payload[$_key];
        }
      }
    }
    return $_res;
  },
};

export { mutations as default };
