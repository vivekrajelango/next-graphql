var fs = require('fs');
var casual = require('casual');


var data = []
// data.table = []
for (i=0; i <1000; i++){
   var obj = {
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone
   }
   data.push(obj)
}
// console.log('da', data);
fs.writeFile ("mock-data.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);