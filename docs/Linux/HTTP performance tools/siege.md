siege
=====

https://easyengine.io/tutorials/benchmark/siege/

## install

    apt-get install siege

## Run

    siege -b -c 100 -t 30s medflixs.com

-t time 测试时间，比如 60s 或 5M
-c concurrency 并发数
-r repetitions 重复做几轮
-f text file 从外部文件读取参数值
-d delay 延迟时间默认是1秒; 如果设置为 -d 5 表示是在1-5秒之间的随机延迟时间

## 多个请求

在 siege-urls.txt 文件中定义两个不同的并发请求 Get 和 Post。order.json 中是 json格式的消息体。

```
#siege-urls.txt
https://api.appletest.com/v1/apps/app_f1KG/orders/12345
https://api.appletest.com/v1/apps/app_f1KG/orders/12345 POST <./order.json
```

## 执行命令

    $ siege  --header="Authorization:Bearer your_username" -f siege-urls.txt

## Stress-testing httperf, siege, apache benchmark