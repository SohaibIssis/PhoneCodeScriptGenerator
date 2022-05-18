const LibJs = require('libphonenumber-js');
const fs = require('fs');
var countries = LibJs.getCountries();
let output = '';
countries.forEach((country) => {
   output += `update country set "PhonePrefix" = '${LibJs.getPhoneCode(
      country
   )}' where "CountryCode" = '${country}'; \n`;
});
fs.writeFileSync('output.sql', output);
