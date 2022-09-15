## 1. 准备条件

- iOS/iPadOS 设备
- 安装具有脚本功能的代理工具（ShadowRocket/Surge/QuanX）

> **注：本教程不适用于安卓设备**



## 2. 修改配置文件

> 以ShadowRocket为例

- 进入配置文件：配置 ➡️ 本地文件 ➡️ 编辑配置
- 认证证书：HTTPS解密 ➡️ 生成CA证书 ➡️ 安装证书 ➡️ 到系统设置认证证书
- 解密域名：enroll.scut.edu.cn,fkmypass.vercel.app
- 添加脚本：
  - 类型：http-response
  - 添加脚本为 [fkmypass.js](./fkmypass.js) 文件（复制后记得修改代码中信息）
  - 表达式：https://enroll.scut.edu.cn/door/out/h5/
  - 最大尺寸：1048576
  - 需要Body：是
  - 启用脚本：是



## 3. 保存配置



## 4. 开启代理

- 首页 ➡️ 开启任何代理



## 5. 直接进入页面即可
