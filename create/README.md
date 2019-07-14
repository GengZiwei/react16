## React16
[地图react-amap](https://elemefe.github.io/react-amap/components/map)<br />
#环境变量
  .env 为最低级别当所属环境找不到时间进行查找
  .env.parjectName 为单独环境配置 中级环境
#开发配置
  使用react-app-rewired 进行脚手架二次配置 2.0关系需要下载customize-cra 在config-overrides 进行。
  package:
    "homepage": "." 文件访问的路径
    "config-overrides-path": "./config-overrides" 指向customize-cra 配置文件所在地址