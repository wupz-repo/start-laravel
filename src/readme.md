## 启动项目

1. 在 code 目录下执行 composer install
2. 从 .env.example 复制一份 .env 文件
3. 在code目录下 执行 `php artisan key:generate` 生成 APP_KEY

## 部署项目

````
$ s deploy
````

## 打包成镜像

````
$ s build
````