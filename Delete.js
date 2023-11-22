
const http = require('http');
const formTag = `
<form method="DELETE" action="/login">
<input type="text" name="id">
<input type="submit">
</form>
`;

function firstPage(data) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
${data}
</body>
</html>
`;
}

const server = http.createServer(function(request, response){
// 최초접속
if(request.method === 'GET' && request.url === '/') {
response.writeHead(200, {'Content-Type': 'text/html'});
let page = firstPage(formTag);
response.write(page);
response.end();
}

// 무언가
if(request.method === 'DELETE' && request.url.startsWith('/login')) {
// let jimin='' ;
// console.log(request.method)
// request.on('data',(chunck)=>{
//     jimin += chunck
// });

request.on('end',()=>{
response.writeHead(200, {'Content-Type': 'text/html'});
const name = request.url.split('=')[1];
let page = firstPage(name);
response.write(page);
response.end();

})
}
});

// 서버 포트 설정
server.listen(2080, function(error) {
if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
});