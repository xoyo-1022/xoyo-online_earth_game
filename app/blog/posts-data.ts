// 博客文章数据
// 添加新文章：在这里添加一条记录，并在 app/blog/posts/ 目录下创建对应的 .tsx 文件

export interface Post {
  id: string
  title: string
  date: string
  description: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 'first-post',
    title: '第一篇博客：开始记录',
    date: '2024-01-20',
    description: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。',
    tags: ['随笔', '开始'],
  },
  {
    id: 'travel-note',
    title: '旅行日记：某地探秘',
    date: '2024-01-15',
    description: '记录一次难忘的旅行经历，探索未知的风景。',
    tags: ['旅行', '探索'],
  },
]

export function getPost(id: string): Post | undefined {
  return posts.find((p) => p.id === id)
}