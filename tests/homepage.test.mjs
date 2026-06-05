import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const homepage = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8')

test('homepage presents the three requested content channels', () => {
  for (const channel of ['Vlog', 'Blog', 'Moments']) {
    assert.match(homepage, new RegExp(`title: '${channel}'`))
  }
})

test('homepage keeps the personal archive positioning and primary actions', () => {
  for (const copy of [
    '地球副本',
    '记录生活主线任务，也收藏支线里的微光。',
    '观看最新影像',
    '阅读最近文章',
    '浏览图文片段',
  ]) {
    assert.ok(homepage.includes(copy), `missing homepage copy: ${copy}`)
  }
})

test('homepage includes the scroll storytelling hooks', () => {
  assert.match(homepage, /data-scroll-motion/)
  assert.match(homepage, /data-parallax-image/)
  assert.match(homepage, /data-reveal/)
})

test('homepage includes structured-style narrative sections', () => {
  for (const marker of ['sticky-story', 'fluid-transition', 'Vlog 让时间继续流动', 'Motion archive']) {
    assert.ok(homepage.includes(marker), `missing narrative marker: ${marker}`)
  }
})
