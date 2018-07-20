//STAGING (DEFAULT) ENV
const environments= {};

environments.staging = {
   'httpPort': 3000,
   'httpsPort': 3001,
   'envName': 'staging'
};

module.exports = environments.staging;