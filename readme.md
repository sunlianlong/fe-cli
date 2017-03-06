#前端项目脚手架

初衷：在网络上利用git存储项目模板,本地执行命令clone创建项目,免去从头构建的麻烦

代码来源<a href="https://segmentfault.com/a/1190000006190814" style="background-color:#030;">教你从零开始搭建一款前端脚手架工具</a>

下载：

```
git clone https://github.com/sunlianlong/fe-cli.git

cd scion && npm install

npm link
```

使用方法：

```
打开命令行工具并执行 fe 或者 fe -h 可以查看所有命令及简写

fe add 添加一个新模板

fe list 查看所有模板

fe init 依据模板在本地建立一个新的项目

fe delete 删除模板
```