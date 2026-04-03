# GitHub仓库创建和上传指南 🚀

## 步骤1：创建GitHub仓库

1. **登录GitHub**
   - 访问 [github.com](https://github.com)
   - 登录你的GitHub账号

2. **创建新仓库**
   - 点击右上角的 "+" 按钮
   - 选择 "New repository"
   - 填写仓库信息：
     - Repository name: `open-class-reminder`
     - Description: `开源课堂提醒器 - 物理老师专用课表提醒应用`
     - 选择 Public（公开）或 Private（私有）
     - **不要**勾选 "Add a README file"（我们已经有了）
     - **不要**勾选 "Add .gitignore"（我们已经有了）
   - 点击 "Create repository"

## 步骤2：准备本地文件

确保你的项目文件夹包含以下文件：
```
g:/AI/课表/
├── index.html                    # ✅ 主应用文件
├── README.md                     # ✅ 项目说明
├── package.json                  # ✅ 项目配置
├── .gitignore                    # ✅ Git忽略文件
├── .github/
│   └── workflows/
│       └── build-apk.yml         # ✅ GitHub Actions配置
└── UPLOAD_GUIDE.md               # ✅ 本指南文件
```

## 步骤3：使用Git上传（推荐）

### 方法A：命令行上传

1. **打开命令行**
   - 在项目文件夹 `g:/AI/课表/` 中右键
   - 选择 "在终端中打开" 或 "Git Bash Here"

2. **初始化Git仓库**
   ```bash
   git init
   git add .
   git commit -m "初始提交：物理课提醒器应用"
   ```

3. **连接到GitHub仓库**
   ```bash
   # 替换 YOUR_USERNAME 为你的GitHub用户名
   git remote add origin https://github.com/YOUR_USERNAME/open-class-reminder.git
   git branch -M main
   git push -u origin main
   ```

### 方法B：GitHub Desktop上传

1. **下载GitHub Desktop**
   - 访问 [desktop.github.com](https://desktop.github.com)
   - 下载并安装GitHub Desktop

2. **添加本地仓库**
   - 打开GitHub Desktop
   - 点击 "Add an Existing Repository from your Hard Drive"
   - 选择项目文件夹 `g:/AI/课表/`

3. **发布到GitHub**
   - 点击 "Publish repository"
   - 确认仓库名称为 `open-class-reminder`
   - 点击 "Publish Repository"

## 步骤4：验证上传成功

1. **检查文件**
   - 访问你的GitHub仓库页面
   - 确认所有文件都已上传

2. **检查Actions**
   - 点击仓库的 "Actions" 标签
   - 应该能看到 "Build Android APK" 工作流

3. **触发首次构建**
   - 如果没有自动触发，点击 "Build Android APK"
   - 点击 "Run workflow" 手动触发

## 步骤5：获取APK文件

1. **等待构建完成**
   - 构建大约需要5-10分钟
   - 在Actions页面可以看到构建进度

2. **下载APK**
   - 构建完成后，点击构建任务
   - 在 "Artifacts" 部分下载 `physics-schedule-apk`
   - 解压后即可获得APK文件

## 故障排除

### 常见问题

1. **权限错误**
   ```bash
   git config --global user.name "你的用户名"
   git config --global user.email "你的邮箱"
   ```

2. **推送失败**
   - 检查仓库URL是否正确
   - 确认GitHub用户名和仓库名拼写正确

3. **Actions构建失败**
   - 检查 `.github/workflows/build-apk.yml` 文件是否正确上传
   - 查看构建日志中的错误信息

### 获取帮助

- GitHub文档：[docs.github.com](https://docs.github.com)
- Git教程：[git-scm.com/docs](https://git-scm.com/docs)

## 下一步

上传成功后，你可以：

1. **分享应用**：将仓库链接分享给其他老师
2. **持续改进**：修改代码后推送，自动构建新版本
3. **创建Release**：使用git tag创建正式版本发布

## 示例仓库URL

上传成功后，你的仓库地址将是：
```
https://github.com/YOUR_USERNAME/open-class-reminder
```

APK下载地址将是：
```
https://github.com/YOUR_USERNAME/open-class-reminder/actions
