---
title: 我的 HexoBlog 的诞生（一）
date: 2020-01-24 22:53:24
cover: 
description: 本文记录和讲解一下我的 HexoBlog 是如何一步一步被部署至 Github Pages 上的，可供大家参考。部署完成后可参考我的下一篇文章《我的 HexoBlog 的诞生（二）》进行个性化设置和配置，不过在此之前，需阅读 Hexo 官方文档，对 Hexo 有基本的完整的认识。
tags:
 - Hexo v4.2.1
 - Git v2.25.0.windows.1
 - GitHub
 - Node.js v12.14.0
 - Windows 10
categories: 
 - 我的 HexoBlog 的诞生
---

　　本文记录和讲解一下我的 HexoBlog 是如何一步一步被部署至 Github Pages 上的，可供大家参考。部署完成后可参考我的下一篇文章《我的 HexoBlog 的诞生（二）》进行个性化设置和配置，不过在此之前，需阅读 [Hexo 官方文档](https://hexo.io/zh-cn/docs/)，对 Hexo 有基本的完整的认识。

### 注册我的 Github 账户，建立 Github Pages

1. 进入 [Github 首页](http://github.com/)，点击 Sign up 注册，填写 Username 等，验证邮箱，注册成功；
2. 点击右上角的加号，点击 New repository，填写 Repository name，这里的仓库名必须要按照”<我的 Github 用户名>.github.io“的格式来填，填写 Description，点击 Creat repository，创建 Github Pages 成功。

### 安装 Node.js，安装 Git 和 Git 的配置

3. 进入 [Node.js 官方网站](https://nodejs.org/)，点击下载 LTX（Long Term Support）版，我下载的是 v12.14.0 版本的，安装步骤非常简单，一直 next；

4. 进入 [Git 官方网站下载页面](https://git-scm.com/downloads)，选择 64 位 Windows 版本的 Git 下载，安装步骤也是一直 next，安装好后需要进行全局用户信息的配置，在桌面右键，选择 Git Bash Here 进入终端，配置命令如下，分别执行即可，执行后没任何提示就说明执行成功；

   ```bash
   git config --global user.name "<我的Github用户名>"
   ```

   ```bash
   git config --global user.email "<我的Github邮箱>"
   ```

5. 接着在终端输入`ssh-keygen -t rsa`，按 3 个回车，此时打开 [.ssh 文件夹](C:\\Users\\<我的Windows用户名>\\.ssh)，用文本编辑器打开 id_rsa.pub，Ctrl+A 复制里面全部的内容；

6. 进入浏览器，进入 Gihub，点击右上角的头像，点击 Setting，点击左侧的 SSH and GPG keys，点击右侧的 New SSH key，填写 Tile，也可以不填，填写 Key，右键粘贴，粘贴刚复制的内容，最后点击 Add SSH key。

7. 测试本地和 Github 的 SSH 配置是否正确，打开终端输入`ssh -T git@github.com`回车，输入 yes，回车，看到一句提示信息：Hi <我的 Github 用户名>! You've successfully authenticated, but GitHub does not provide shell access，配置成功。

### 安装 Hexo

8. 在合适的路径下新建一个文件夹，文件夹名自定义，例如 HexoBlog，作为<存储 HexoBlog 的文件夹>；

9. 打开<存储 HexoBlog 的文件夹>，在空白处点鼠标的右键，选择 Git Bash Here 进入终端；

10. 安装 cnpm 提高下载速度，以后下载插件都可用 cnpm（即将下载某一个插件的命令中的 npm 改为 cnpm）。在终端输入如下命令，回车，等待 cnpm 下载完成；

   ```bash
   npm install -g cnpm --registry=http://registry.npm.taobao.org
   ```

11. 在终端输入如下命令，回车，等待 hexo-cli 下载完成，可输入 `hexo -v` 查看相关信息；

   ```bash
   cnpm install -g hexo-cli
   ```

12. 在终端输入`hexo init`，等待，可在<存储 HexoBlog 的文件夹>中看到生成了如下图所示的文件。

    ![初始文件](https://image.ql-isaac.cn/初始文件.png)

### 本地部署我的 HexoBlog

13. 在终端输入`hexo s`，打开浏览器，输入 localhost:4000，可看到本地部署的我的 HexoBlog，如下图所示，Ctrl+C 停止运行；

    ![本地部署的我的HexoBlog](https://image.ql-isaac.cn/本地部署的我的HexoBlog.png)

### 部署至 Github Pages

14. 安装 Hexo 的 Git 插件。终端输入如下命令，回车，等待下载完成。

   ```bash
   cnpm install --save hexo-deployer-git
   ```

15. 进入<存储 HexoBlog 的文件夹>，用文本编辑器打开 _config.yml，在最下面找到“deploy:"，补充成如下内容，保存关闭：

   ```
   deploy:  
     type: git  
     repo: git@github.com:<我的Github用户名>/<我的Github用户名>.github.io.git         
     branch: master
   ```

16. 在终端输入`hexo g -d`，回车，进行博客的最终操作——生成静态文件后立即部署到 Github Pages 上（建议每次想把本地博客上传到 Gihub Pages 时，都使用该命令）。

17. [大功告成](https://ql-isaac.github.io)（ql-isaac替换成自己的 Github 用户名）。


### 参考资料

https://blog.csdn.net/huangqqdy/article/details/83032408
https://caiyantao.gitee.io/2019/04/13/Hexo-%E4%B8%80
https://caiyantao.gitee.io/2019/04/13/Hexo-一/
https://caiyantao.gitee.io/2019/04/13/Hexo%EF%BC%88%E4%BA%8C%EF%BC%89/#more
https://caiyantao.gitee.io/2019/04/13/Hexo（二）/#more
https://www.bilibili.com/video/av44544186?from=search&seid=9508828059673681599