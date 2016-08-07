 var fs = require('fs');
var csv= fs.readFileSync('data.csv').toString();

	var lines = csv.split("\n");
 	var result = [];
 	var headers = lines[0].split(",");
 	var cont = 0;
 	for(var i = 1; i < lines.length; i++)
 	{
 	 var obj = {};
 	 var currentline =lines[i].split(",");
 	 for (var j = 0; j < headers.length; j++)
 	 {
 	 	obj[headers[j]] =currentline[j];
 	 }
 	 result.push(obj);
 	}

 	var str=JSON.stringify(result);
 	str=str.replace()
 	console.log(str);
 	fs.writeFileSync("outputData.json",str);
