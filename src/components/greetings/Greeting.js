import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  const { greeting } = props;

  const allData = Object.entries(greeting).map((entry) => {
    const [key, value] = entry;
    return { key, value };
  });
  return (
    <div>
      <ul>
        {allData.map((data) => (
          <li
            key={data.id}
          >
            <div>{data.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Greeting;

Greeting.propTypes = {
  greeting:
          PropTypes.objectOf(
            {
              message: PropTypes.string,
              body: PropTypes.string,
            },
          ).isRequired,
};
