import { Reducer } from 'redux';
import { RecentlyViewed, RECENTLY_VIEWED_INITIAL_STATE, RecentlyViewedType } from './type';

type RecentlyViewedReducer = {
  type: string;
  payload?: any;
};

const recentlyViewedReducer: Reducer<RecentlyViewed> = (
  state: RecentlyViewed = RECENTLY_VIEWED_INITIAL_STATE,
  action: RecentlyViewedReducer,
) => {
  switch (action.type) {
    case RecentlyViewedType.ADD_NEW_LOCATION:
      return {
        viewed: [...state.viewed, action.payload],
      };

    default:
      return { ...state };
  }
};

export default recentlyViewedReducer;
