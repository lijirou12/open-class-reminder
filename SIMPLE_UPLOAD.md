# 最简单的上传方法 🚀

## 方法1：网页直接上传（最简单）

1. **创建仓库**
   - 访问 https://github.com/new
   - Repository name: `open-class-reminder`
   - Description: `开源课堂提醒器`
   - 选择 Public
   - 点击 "Create repository"

2. **上传文件**
   - 在新创建的仓库页面，点击 "uploading an existing file"
   - 将以下文件拖拽到页面中：
     ```
     index.html
     README.md
     package.json
     .gitignore
     UPLOAD_GUIDE.md
     ```
   - 在 "Commit changes" 输入：`初始提交：物理课提醒器`
   - 点击 "Commit changes"

3. **上传GitHub Actions文件**
   - 点击 "Create new file"
   - 文件名输入：`.github/workflows/build-apk.yml`
   - 复制粘贴 `build-apk.yml` 的内容
   - 点击 "Commit changes"

## 方法2：使用Git命令（推荐）

如果你已安装Git，在项目文件夹中右键选择"Git Bash Here"，然后复制粘贴以下命令：

```bash
# 初始化仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "初始提交：物理课提醒器"

# 连接到GitHub（替换YOUR_USERNAME为你的用户名）
git remote add origin https://github.com/YOUR_USERNAME/open-class-reminder.git

# 推送
git branch -M main
git push -u origin main
```

## 需要我帮你做什么？

我可以帮你：
1. ✅ 准备所有文件（已完成）
2. ✅ 写好所有配置（已完成）
3. ❌ 直接上传到GitHub（需要你的账号权限）
4. ✅ 指导你完成上传（正在进行）

## 上传后会发生什么？

1. **自动构建**：GitHub会自动开始构建APK
2. **等待5-10分钟**：构建完成
3. **下载APK**：在仓库的Actions页面下载

## 遇到问题？

如果你在上传过程中遇到任何问题，请告诉我具体的错误信息，我会帮你解决！

## 快速链接

- GitHub注册：https://github.com/join
- 创建仓库：https://github.com/new
- Git下载：https://git-scm.com/download