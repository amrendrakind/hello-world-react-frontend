import { GREETINGS } from '../types';
import APIServices from '../APIServices';

const initialStete = [];

const greetingLists = () => async (dispatch) => {
  const greetingData = await APIServices.getGreetingData();
  const greetings = greetingData.map((greeting) => ({
    message: greeting.message,
    body: greeting.body,
  }));
  dispatch({
    type: GREETINGS,
    payload: greetings,
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
