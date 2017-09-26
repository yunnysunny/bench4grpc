const path = require('path');
const grpc = require('grpc');
const protobuf = require('protobufjs');
const root = new protobuf.Root();

const PROTO_PATH = path.resolve(__dirname, './protobuf/auth.proto');
const protoRoot = root.loadSync(PROTO_PATH, { keepCase: true, enumsAsStrings:true });

exports.grpcProto = grpc.loadObject(protoRoot,{protobufjsVersion:6}).com.whyun;

exports.port = process.env.BENCH_TEST_PORT || 1987;