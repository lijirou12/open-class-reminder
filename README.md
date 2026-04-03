# Open Class Reminder 📱
# 开源课堂提醒器

一个专为物理老师设计的开源课表提醒应用，支持实时时钟、课前提醒、课表编辑等功能。

## 功能特性

- ⏰ **实时时钟显示** - 显示当前时间和日期
- 🔔 **智能提醒** - 可设置课前5-30分钟提醒
- 📅 **课表管理** - 支持查看和编辑课表
- 📱 **移动端优化** - 响应式设计，完美适配手机
- 💾 **数据持久化** - 本地存储，数据不丢失
- 📤 **导入导出** - 支持课表数据的备份和恢复
- 🎯 **表格编辑** - 直观的表格形式编辑界面

## 在线使用

直接在浏览器中打开 `index.html` 文件即可使用。

## 打包为Android APK

本项目支持通过GitHub Actions自动打包为Android APK文件。

### 自动构建

1. **推送代码到GitHub**：将项目上传到GitHub仓库
2. **触发构建**：
   - 推送到 `main` 或 `master` 分支会自动触发构建
   - 也可以在GitHub仓库的Actions页面手动触发
3. **下载APK**：
   - 构建完成后，在Actions页面的Artifacts中下载APK文件
   - 如果推送了tag，会自动创建Release并附带APK文件

### 手动构建

如果你想在本地构建APK，需要安装以下工具：

```bash
# 安装Node.js和Cordova
npm install -g cordova

# 创建Cordova项目
cordova create physics-schedule com.example.physicsschedule "物理课提醒"
cd physics-schedule

# 添加Android平台
cordova platform add android

# 复制HTML文件
cp ../index.html www/

# 添加插件
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-vibration

# 构建APK
cordova build android --release
```

### APK安装

1. 下载构建好的APK文件
2. 在Android设备上启用"未知来源"安装
3. 安装APK文件

## 使用说明

### 基本功能

1. **查看课表**：主界面显示今日课表，可通过左右箭头切换日期
2. **开启提醒**：点击通知栏开启课前提醒功能
3. **调整提醒时间**：使用+/-按钮调整提前提醒的分钟数

### 编辑课表

1. 点击右上角的⚙设置按钮
2. 在表格中勾选对应的时间段和星期几
3. 点击"保存"按钮保存修改

### 数据管理

- **导出数据**：在设置页面点击"导出数据"保存课表到文件
- **导入数据**：点击"导入数据"从文件恢复课表
- **恢复默认**：点击"恢复默认"重置为初始课表

## 技术栈

- **前端**：HTML5 + CSS3 + JavaScript (ES6+)
- **移动端**：Apache Cordova
- **构建**：GitHub Actions
- **存储**：localStorage

## 项目结构

```
├── index.html              # 主应用文件
├── .github/
│   └── workflows/
│       └── build-apk.yml   # GitHub Actions配置
└── README.md               # 项目说明
```

## 开发说明

### 本地开发

直接在浏览器中打开 `index.html` 即可进行开发和测试。

### 样式定制

所有样式都在 `index.html` 的 `<style>` 标签中，可以根据需要修改：

- `--ink`: 主要文字颜色
- `--paper`: 背景颜色
- `--accent`: 强调色
- `--accent2`: 次要强调色

### 功能扩展

主要的JavaScript函数：

- `renderSchedule()`: 渲染课表列表
- `openEditModal()`: 打开编辑模态框
- `saveSchedule()`: 保存课表数据
- `toggleNotif()`: 切换通知状态

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！