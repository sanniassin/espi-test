import immutableUpdate from 'immutability-helper';
import * as contentful from 'contentful';
import _ from 'lodash';

export const CONTENT_LOAD_CONTENT_SUCCESS = 'CONTENT_LOAD_CONTENT_SUCCESS';

const client = contentful.createClient({
  space: 'ykzoqp0e2iu9',
  accessToken: '7bb08ae353b68f2b12bdf8ac8984e9a1cab50d7401bdd318c558000f106aaab4'
});

const initialState = {
  entries: null,
  lessons: [],
  layouts: [],
  courses: []
};

export const fetchContent = () => {
  return client.getEntries();
};

const loadContentSuccess = (payload) => {
  return {
    type: CONTENT_LOAD_CONTENT_SUCCESS,
    payload
  };
};

export const loadContent = () => {
  return (dispatch) => {
    return fetchContent()
      .then((payload) => {
        const { items } = payload;
        const { lessons, courses, layouts } = _.groupBy(items, (item) => {
          const contentType = item.sys.contentType.sys.id;
          return {
            lesson: 'lessons',
            course: 'courses',
            layout: 'layouts'
          }[contentType] || 'unsorted';
        });
        const content = {
          lessons,
          courses,
          layouts,
          entries: payload
        };
        dispatch(loadContentSuccess(content));
        return content;
      });
  };
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONTENT_LOAD_CONTENT_SUCCESS:
      return immutableUpdate(state, {
        $merge: action.payload
      });
    default:
      return state;
  }
}
