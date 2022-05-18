const LibJs = require('libphonenumber-js');
var countries = LibJs.getCountries();
countries.forEach((country) => {
   console.log(
      `update country set "PhonePrefix" = ${LibJs.getPhoneCode(
         country
      )} where "CountryCode" = '${country}'`
   );
});
