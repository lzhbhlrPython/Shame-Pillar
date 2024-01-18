import { Avatar, Typography, Layout, Row, Col, Card, Timeline, Watermark } from 'antd';
import Introduction from './components/introduction';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
const { Link } = Typography;
const { Footer, Content } = Layout;;

import shameItems from './assets/shameItems.json';

const colors = ['#f5222d', '#fa541c', '#fa8c16', '#faad14', '#fadb14', '#a0d911', '#52c41a', '#13c2c2', '#1677ff', '#2f54eb', '#722ed1', '#eb2f96'];

function App() {
  const avatarSrc = "http://oss.yzbh.tj.cn/halo/avatar.png";
  const pageTitle = "Py的耻辱柱";
  const pageSubtitle = "The Shame Pillar of Gardenia";
  const footerText = `Copyright ${
    new Date().getFullYear() === 2024 ? 2024 : "2024 - " + new Date().getFullYear()
  } Gardenia`;

  return (
    <>
      <div>
        <Row align={"middle"}>
          <Col span={2}>
            <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={avatarSrc}></Avatar>
          </Col>
            <Col span={22}>
            <h1>{pageTitle}</h1>
            <h2>{pageSubtitle}</h2>
          </Col>
        </Row>
        <Content>
          <Row align={"middle"}>
            <Introduction />
            <Col span={24}>
            <Watermark content={shameItems.watermark}>
              <div>
                <Timeline>
                  {shameItems.shame.map((item, index) => {
                    const color = colors[index % colors.length];
                    return (
                      <Timeline.Item key={index} color={color}>
                        <Card title={<Markdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{item.title}</Markdown>}>
                          <Markdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{item.description}</Markdown>
                        </Card>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </div>
              </Watermark>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row align={"middle"} justify="space-around">
            <Col span={12}>
              <p>{footerText}</p>
            </Col>
            <Col span={12} style={{textAlign:'right'}}>
              <p>Design by {<Link href='https://www.pyliubaolin.top'>Gardenia</Link>}</p>
            </Col>
          </Row>
        </Footer>
      </div>
      
    </>
  )
}

export default App;
