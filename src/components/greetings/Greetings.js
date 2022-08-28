import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { greetingLists } from '../../redux/greeting/greeting';
import Greeting from './Greeting';

const Greetings = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.Greeting);
  useEffect(() => {
    if (greetings.length === 0) {
      dispatch(greetingLists());
    }
  }, []);
  // console.log(greetings);
  return (
    <div>
      <ul>
        {greetings.map((greeting) => (
          <Greeting
            key={greeting.id}
            greeting={greeting}
          />
        ))}
      </ul>
    </div>
  );
};

export default Greetings;
