# 个人博客 & Vlog 分享网站

一个简单而强大的个人博客和视频分享平台，使用 Next.js 和 GitHub Pages 构建。

## ✨ 功能特性

- 📝 **博客系统** - 支持 Markdown 文章
- 🎥 **Vlog 展示** - 支持 YouTube 和 B 站视频嵌入
- 🎨 **现代化设计** - 响应式布局，美观界面
- ⚡ **快速部署** - 一键部署到 GitHub Pages
- 🔍 **SEO 友好** - 优化搜索引擎
- 📱 **移动适配** - 完美支持各类设备

## 🚀 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/xoyo-1022/xoyo-online_earth_game.git
cd xoyo-online_earth_game
```

### 2. 安装依赖
```bash
npm install
```

### 3. 本地开发
```bash
npm run dev
```
访问 `http://localhost:3000` 查看网站

### 4. 部署到 GitHub Pages
```bash
npm run build
git add .
git commit -m "更新网站内容"
git push
```

GitHub Actions 会自动构建和部署你的网站到 `https://xoyo-1022.github.io/xoyo-online_earth_game/`

## 📝 添加博客文章

1. 创建新的 Markdown 文件在 `posts/` 目录中
2. 使用以下格式：

```markdown
---
title: 文章标题
date: 2024-01-20
description: 文章简介
tags: [标签1, 标签2]
---

# 文章内容

你的文章内容...
```

3. 编辑 `app/blog/page.tsx` 中的 `mockPosts` 数组来添加你的文章到博客列表

## 🎬 添加 Vlog 视频

编辑 `app/vlog/page.tsx`，在 `vlogs` 数组中添加你的视频：

### YouTube 视频
```typescript
{
  id: 'video-id',
  title: '视频标题',
  description: '视频描述',
  youtubeId: 'dQw4w9WgXcQ', // 从 URL v= 后提取
  date: '2024-01-20',
  tags: ['标签1', '标签2'],
}
```

### B站视频
```typescript
{
  id: 'video-id',
  title: '视频标题',
  description: '视频描述',
  biliId: 'BV1xx411c7mD', // B 站视频 ID
  date: '2024-01-20',
  tags: ['标签1', '标签2'],
}
```

## 🎨 自定义网站

### 修改样式
编辑 `app/globals.css` 来自定义颜色、字体等

### 修改导航
编辑 `app/layout.tsx` 中的导航栏

### 修改首页
编辑 `app/page.tsx` 来自定义首页内容

### 修改关于页面
编辑 `app/about/page.tsx` 添加你的个人信息

## 📁 项目结构

```
xoyo-online_earth_game/
├── app/
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 全局布局
│   ├── globals.css           # 全局样式
│   ├── blog/
│   │   ├── page.tsx          # 博客列表
│   │   └── [id]/
│   │       └── page.tsx      # 博客详情
│   ├── vlog/
│   │   └── page.tsx          # Vlog 页面
│   └── about/
│       └── page.tsx          # 关于页面
├── posts/                    # 博客文章（Markdown）
├── public/                   # 静态文件
├── package.json
├── next.config.js            # Next.js 配置
└── tsconfig.json
```

## 🔗 获取视频 ID

### YouTube
1. 打开你的视频链接
2. URL 格式为 `https://www.youtube.com/watch?v=VIDEO_ID`
3. 提取 `v=` 后面的部分作为 `youtubeId`

### B站
1. 打开你的视频链接
2. URL 格式通常包含 `BV` 开头的 ID（例如 `BV1xx411c7mD`）
3. 使用这个 ID 作为 `biliId`

## 🛠 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: CSS3
- **部署**: GitHub Pages
- **自动化**: GitHub Actions

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [GitHub Pages 指南](https://pages.github.com/)
- [Markdown 语法](https://www.markdownguide.org/)

## 💡 使用 AI 辅助修改

你可以将网站的代码复制到 ChatGPT、Claude 等 AI 工具中，要求进行修改：

- "帮我修改这个页面的颜色"
- "怎样添加一个新的页面"
- "帮我优化这个代码"

## 🤝 许可证

此项目使用 MIT 许可证。详见 LICENSE 文件。

## ✉️ 联系方式

- GitHub: [@xoyo-1022](https://github.com/xoyo-1022)
- 邮箱: your-email@example.com

---

**祝你创作愉快！** 🚀✨
