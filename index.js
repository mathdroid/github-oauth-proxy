const fetch = require("isomorphic-unfetch");
const q = require("micro-query");

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

module.exports = async (req, res) => {
  const query = q(req);
  const qs = encode(query);
  const url = `https://github.com/login/oauth/access_token?${qs}`;
  console.log(url);
  const result = await fetch(url, {
    method: "POST"
  });

  return await result.text();
};