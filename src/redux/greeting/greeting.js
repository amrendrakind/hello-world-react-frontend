import { GREETINGS } from '../types';
import APIServices from '../APIServices';

const initialStete = [];

const greetingLists = () => async (dispatch) => {
  const response = await APIServices.getGreetingData();
  dispatch({
    type: GREETINGS,
    payload: response,
  });
};

const greetingReducer = (state = initialStete, action) => {
  switch (action.type) {
    case GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
export { greetingLists };
