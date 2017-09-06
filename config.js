const path = require('path');
const grpc = require('grpc');
const PROTO_PATH = path.resolve(__dirname, './protobuf/auth.proto');

exports.grpcProto = grpc.load(PROTO_PATH,'proto',{}).com.whyun;

exports.port = process.env.BENCH_TEST_PORT || 1987;