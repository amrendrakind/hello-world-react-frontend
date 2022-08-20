const API = 'http://127.0.0.1:3000/api/v1/greetings';

const getGreetingData = async () => {
  const response = await fetch(API, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const greetingData = await response.json();
  return greetingData;
};

export default { getGreetingData };
