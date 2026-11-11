# 成人内容百科 V2

原生 HTML / CSS / JavaScript 的响应式品牌与作品资料导航首页。视觉方向采用深墨蓝、暖纸白、橙红与荧光浅绿的编辑部 / 数字档案馆风格。

## 文件
- `index.html`：页面结构、SEO 元信息、WebSite JSON-LD
- `styles.css`：响应式样式
- `script.js`：分类、关键词、别名/编号搜索、核验状态筛选、移动导航
- `assets/logo.png`：品牌 Logo（若不存在，请放入自己的图片并命名为 logo.png）
- `robots.txt`、`sitemap.xml`：部署示例

## 预览
浏览器直接打开 `index.html` 即可。

## 正式上线前
1. 将 `https://www.example.com/` 替换为正式 HTTPS 域名，更新 canonical、OG URL、JSON-LD 与 sitemap。
2. 替换 `editor@example.com` 联系邮箱。
3. 替换所有演示条目。演示名称和编号均为虚构，演示状态不代表真实核验结果。
4. 为真实品牌、作品和专题创建独立、可抓取的详情 URL，服务端返回完整 HTML 或使用预渲染。
5. 详情页补充原创介绍、分类、别名、编号、来源、核验状态和更新时间。
6. Sitemap 仅放入规范且允许索引的真实 URL。

## 推荐 URL
- `/category/short-drama/`、`/category/anime/`、`/category/comics/`、`/category/novels/`
- `/brand/{slug}/`、`/work/{slug}/`、`/topics/{slug}/`

不要只依赖首页 JavaScript 搜索结果承担 SEO。重要分类和词条应有独立 URL。

## 内容边界
本站仅为符合所在地法律规定的成年人提供品牌与作品资料索引，不托管、不播放、不下载、不交易成人内容，也不提供绕过年龄或访问限制的服务。上线前应审查所在地法律、版权、隐私及年龄访问要求。


## 引流页目标站配置（本次调整）
- 所有主要转化入口指向：https://chengrenbaike.com/
- 主按钮、导航入口、专题入口、页脚品牌入口均设置为新标签页打开，并使用 `rel="noopener noreferrer"`。
- 首页本地搜索与分类数据仅用于展示交互效果，不代表目标站的实时检索结果。
- **Canonical 注意事项：** `index.html` 中的 `https://YOUR-LANDING-PAGE-DOMAIN.example/` 是占位值，部署时必须替换为引流页自身的正式 URL。不要直接将 Canonical 指向目标站，除非你希望搜索引擎将引流页视为目标站的重复页面并合并索引信号。
- 若目标站有确认过的搜索 URL、栏目 URL 或词条 URL，可在后续提供后将分类卡片及搜索表单改为真实站内跳转。
