var exec = require("child_process").exec;

function start(response){
	console.log("Request handler 'start' was called");
	var body = '<html>'+
		'<head>'+
		'<meta http-euiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" method="post">'+
		'<textarea name="text" rows="20" cols="60"> </textarea>'+
		'<input type="submit" value="Submit text"/>' +
		'</form>'+
		'</body>'+
		'</html>';
		response.writeHead(200,{"Content-type":"text/html"});
		response.write(body);
		response.end();
		
	
}

function upload(response){
	console.log("Request handler 'upload' was called ");
	response.writeHead(200,{"content-type":"text/plain"});
	response.write("Hello world update");
	response.end();
}



exports.start = start;
exports.upload = upload;