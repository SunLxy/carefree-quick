# 说明文档

1. web页面直接使用 `styled-components` 进行页面代码
2. main使用ts进行封装代码

## 功能

1. 打开的页面刷新
2. 像浏览器一样的右键功能
3. 点击跳转页面的时候 看能不能进行阻止打开新的窗口，通过事件通知主程序页面进行新增tab选项卡

## 自动更新

1. 页面加载完成，判断调用自动更新，判断是否更新
2. 更新则弹出弹框
3. 不更新不做处理

## 步骤

### 开发

1. npm run start 启动渲染层服务
2. npm run server 启动更新服务
3. npm run app 启动主程序

### 打包

1. npm run build:app

## 打包问题

1. 需要自己做打包 代码签名([mac参考](https://support.apple.com/zh-cn/guide/keychain-access/kyca8916/mac)和[Xcode 导出签名证书](https://help.apple.com/xcode/mac/current/#/dev154b28f09)进行创建，之后导出`p12`文件)
2. 命令行中执行`vi ~/.zshrc`,在代码最后添加`export CSC_LINK=导出的p12文件地址`和`export CSC_KEY_PASSWORD=密码`
3. 退出编辑状态后，在命令行运行`source ~/.zshrc`
4. 防止环境问题，最好把命令行全部关闭重新打开
