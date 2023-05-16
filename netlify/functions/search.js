const axios = require("axios");
const urlencode = require("urlencode");

exports.handler = async (event) => {
  const { queryStringParameters } = event;
  const parameters = Object.entries(queryStringParameters)
    .map(([key, value]) => `${key}=${urlencode.encode(value)}`) // *** 인코딩 문제해결
    .join("&")
    .concat(`&api_key=${process.env.REACT_APP_API_KEY}`);

  const url = `https://api.themoviedb.org/3/search/movie?${parameters}`;

  const response = await axios.get(url);
  const { headers } = response;
  headers["Access-Control-Allow-Origin"] = process.env.REACT_APP_HOST_SERVER; // *** 동일출처정책 문제해결

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      data: response.data.results,
    }),
  };
};
