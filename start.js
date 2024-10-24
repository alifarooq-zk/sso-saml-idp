const { runServer } = require("./app");

runServer({
  acsUrl: `https://www.coursera.org/api/samlLogin.v1/login`,
  audience: `https://shibboleth.coursera.org/sp`,
  issuer: `khutaPlatform`,
});
