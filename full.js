/*for this we have to download (npm install -g csvtojson )package
ref : http://stackoverflow.com/questions/16617532/large-csv-to-json-object-in-node-js */

var Converter=require("csvtojson").Converter;

var csvConverter=new Converter({constructResult:false, toArrayString:true}); // The constructResult parameter=false will turn off final result construction in memory for stream feature. toArrayString will stream out a normal JSON array object.

var readStream=require("fs").createReadStream("data.csv"); 

var writeStream=require("fs").createWriteStream("outpuData.json");

readStream.pipe(csvConverter).pipe(writeStream);