import immutableUpdate from 'immutability-helper';

export const UI_SET_CODE_LANGUAGE = 'UI_ENABLE_MOBILE_LAYOUT';

const initialState = {
  codeLanguage: 'javascript'
};

export const setCodeLanguage = (language) => {
  return {
    type: UI_SET_CODE_LANGUAGE,
    language
  };
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UI_SET_CODE_LANGUAGE:
      return immutableUpdate(state, {
        codeLanguage: { $set: action.language }
      });
    default:
      return state;
  }
}
