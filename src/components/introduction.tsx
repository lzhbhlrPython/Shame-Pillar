import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

const markdowncontent = `
### 欢迎来到Py的耻辱柱！

#### 动机

事实上，搭建耻辱柱并不是第一次，但上一个耻辱柱因为Vercel在中国大陆的访问问题以及图床问题停止使用了。

但是，为了长期记录自己在生活中的失误，监督自己的行为，我又重新搭建了这个耻辱柱。

#### 要求

大家当乐子看就好，不要人身攻击，不要恶意评论，不要恶意转发。

欢迎在[Github](https://github.com/lzhbhlrPython/Shame-Pillar)上提出建议。也希望得到Star。

#### 声明

本耻辱柱的内容均为作者自己的失误，与其他人无关。

#### 技术栈

- React
- Ant Design
- Vite
- Typescript
`;

const Introduction = () => {
  return (
    <div style={{ border: "1px solid #ccc", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "20px", marginBottom: "20px", width: "100%" }}>
      <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {markdowncontent}</Markdown>
    </div>
  );
};

export default Introduction;