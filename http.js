var http = require('http');
var fs = require('fs');//引入文件系统模块
var read = fs.readFileSync('index.html','utf-8')
var contact = fs.readFileSync('contact.html','utf-8')
//
var server =
http.createServer(function(request,reponse){

	if(request.url == '/'){
		reponse.writeHead(200,
		{'Content-Type':
		'text/html;charset=utf-8'})

		reponse.end(read)
	} else if (request.url == '/about'){
		reponse.writeHead(200,
		{'Content-Type':
		'text/html;charset=utf-8'})
		reponse.end(`关于我们`)
	} else if(request.url == '/contact'){
		reponse.writeHead(200,
		{'Content-Type':
		'text/html;charset=utf-8'})
		if(request.method == 'GET'){
           reponse.end(contact)
		} else if(request.method == 'POST') {
           var content = '';
           request.on('data',function(chunk){
           	  content += chunk;
           });
           request.on('end',function(){
           	 reponse.end(`
           	 	您提效的数据：
           	 	${content}`)
           })
		
		}
		
		
	} else {
		reponse.writeHead(404,
		{'Content-Type':
		'text/html;charset=utf-8'})
		reponse.end('404')
	}
	

})

server.listen(3000,function(){
	console.log('listen on port 3000')
})