exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      api: process.env.REACT_APP_WEATHER_API_KEY,
    }),
  };
};
