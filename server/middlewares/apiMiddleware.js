/***
 *
 * API Middleware that translates request to the Beluga API server
 *
 ***/

const axios = require('axios');
const apiDomain = process.env.API_URL;

const formatHeaders = (req) => {
  const headers = {
    headers: {
      //'X-User-Email': req.session.me ? req.session.me.profile.user.email : '',
      //'X-User-Token': req.session.me ? req.session.me.profile.user.authenticationToken : '',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return headers;
};

return module.exports = (req, res) => {
  const path = req.path;
  //const query = req.query ? `?${util.queryString(req.query)}` : '';
  console.log(req.query);
  const url = `${apiDomain}/api${path}`;
  console.log(url);
  axios.get(url, formatHeaders(req)).then((apiRes) => {
    res.status(apiRes.status).send(apiRes.data);
  }).catch((error) => {
    res.status(error.response.status).send(error.response.data.error);
  });
};