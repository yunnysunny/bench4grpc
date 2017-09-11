# The node benchmark project for grpc

1. install node-inspector

```
npm install -g node-inspector
```
2. start node-insepctor

```
node-inspector
```

3. start server

```
node --debug index.js
```

4. start jmeter

Since Node.js is not good at long loop run, I create a project use jmeter to do request, which is hosted [jmeter4grpc](https://github.com/yunnysunny/jmeter4grpc).

I have uploaded the jar library created by the jmeter project and a jmeter's project file, which are hosted on [jmeter4grpc-0.0.1.jar](https://silian.whyun.com/download/jmeter4grpc-0.0.1.jar) and [grpc_bench.jmx](https://silian.whyun.com/download/grpc_bench.jmx). 

The default of paramters of host and port in `grpc_bench.jmx` is `127.0.0.1` and `1987`, you can load the jmx file and modify it in jmeter, then resave it. At the end run the command as follows:

```
jmeter_dir/bin/jmeter -n -t grpc_bench.jmx -l the_result_log -e -o output_dir/
```

5. create cpu profile

Open browser, and visit http://127.0.0.1:8080/?port=5858, then select `Collect Javascript CPU Profile` to record and create cpu profile.

