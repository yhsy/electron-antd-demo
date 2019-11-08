import { getBanner } from './service';

const Model = {
    namespace: 'bannerList',
    state: {
        list: []
    },
    effects: {
        *getBanner({payload}, {call, put}){
          const response = yield call(getBanner,payload);
          //   console.log(response)
          yield put({
              type: 'queryBanner',
              payload: response || []
          }) 
        }
    },
    reducers: {
        queryBanner(state, action) {
            return {
                ...state,
                list: action.payload.data
            }
        }
    }
}

export default Model;