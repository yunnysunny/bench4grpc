const grpc = require('grpc');
const {grpcProto,port} = require('./config');

const server = new grpc.Server();
server.addService(grpcProto.Auth.service, {doCheck: function checkHandler(call,callback) {
    const _body = call.request;
    callback(null,{
        code:0,
        username:_body.username,
        timestamp:new Date().getTime()
    });
}});

const listen = '0.0.0.0:' + port;
server.bind(listen, grpc.ServerCredentials.createInsecure());
server.start();
console.log('listening grpc on '+listen);