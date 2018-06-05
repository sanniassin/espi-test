import immutableUpdate from 'immutability-helper';
import * as contentful from 'contentful';

export const CONTENT_LOAD_ENTRIES_SUCCESS = 'CONTENT_LOAD_ENTRIES_SUCCESS';

const client = contentful.createClient({
  space: 'ykzoqp0e2iu9',
  accessToken: '7bb08ae353b68f2b12bdf8ac8984e9a1cab50d7401bdd318c558000f106aaab4'
});

const initialState = {
  entries: {}
};

export const fetchEntries = () => {
  return client.getEntries();
};

const loadEntriesSuccess = (payload) => {
  return {
    type: CONTENT_LOAD_ENTRIES_SUCCESS,
    payload
  };
};

export const loadEntries = () => {
  return (dispatch) => {
    return fetchEntries()
      .then((payload) => {
        dispatch(loadEntriesSuccess(payload));
        return payload;
      });
  };
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_LOAD_ENTRIES_SUCCESS:
      return immutableUpdate(state, {
        entries: { $set: action.payload }
      });
    default:
      return state;
  }
}
