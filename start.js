const { runServer } = require("./app");

runServer({
  acsUrl: `https://www.coursera.org/api/samlLogin.v1/login`,
  audience: `https://shibboleth.coursera.org/sp`,
  issuer: `khutaPlatform`,
  port: process.env.PORT || 7000,
  host: "0.0.0.0",
});
