function route(handle,pathname,response){
	console.log("About to route a request a request for "+ pathname);
	if(typeof handle[pathname] === 'function'){
		 return handle[pathname](response);
	}else {
		console.log("No request handler is found for "+pathname);
		return '404 not found';
	}
}

exports.route=route;
