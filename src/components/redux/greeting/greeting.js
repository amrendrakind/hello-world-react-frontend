import { GREETINGS } from '../types';
import APIServices from '../APIServices';

const initialStete = [];

const greetingLists = (greeting) => {
  const greetingList = greeting.map((greeting) => ({
    message: greeting.message,
    body: greeting.body,

  }));
  return {
    type: GREETINGS,
    payload: greetingList,
  };
};

const greetingDataFromAPI = (greeting) => async (dispatch) => {
  const response = await APIServices.getGreetingData(greeting);
  dispatch(greetingLists(response));
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
export { greetingLists, greetingDataFromAPI };
