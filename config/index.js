require("dotenv").config()

module.exports = {
  port: process.env.PORT || 8080,
  escher: {
    key: process.env.ESCHER_KEY.toString,
    secret: process.env.ESCHER_SECRET.toString,
    credentialScope: 'eu/escher-example-service/ems_request'
  }
}
