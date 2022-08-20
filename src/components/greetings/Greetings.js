import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { greetingLists } from '../../redux/greeting/greeting';
import Greeting from './Greeting';

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.Greeting);
  useEffect(() => {
    if (greeting.length === 0) {
      dispatch(greetingLists());
    }
  }, []);

  return (
    <div>
      <Greeting
        key={greeting.id}
        greeting={greeting}
      />
    </div>
  );
};

export default Greetings;
