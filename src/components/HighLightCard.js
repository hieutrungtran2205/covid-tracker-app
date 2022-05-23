import { Card, Col, Row, Typography } from 'antd';
import CountUp from 'react-countup';
import '../App.css';

function HighLightCard({ summary, setTypeCard }) {
    return (
        <div className='hightLight' style={{ marginBottom: '16px' }}>
            <Row gutter={16} className='rowCard'>
                <Col span={8} className='colCard'>
                    <Card
                        title='Số ca nhiễm'
                        headStyle={{ backgroundColor: 'red', color: '#fff' }}
                        size="small"
                        hoverable={true}
                        onClick={() => setTypeCard('cases')}
                    >
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={summary.cases} duration={2} separator="," />
                        </Typography>
                        +{summary.todayCases} ca trong 24h qua
                    </Card>
                </Col>
                <Col span={8} className='colCard'>
                    <Card
                        title='Số ca khỏi'
                        headStyle={{ backgroundColor: 'green', color: '#fff' }}
                        size="small"
                        hoverable={true}
                        onClick={() => setTypeCard('recovered')}
                    >
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={summary.recovered} duration={2} separator="," />
                        </Typography>
                        +{summary.todayRecovered} ca trong 24h qua
                    </Card>
                </Col>
                <Col span={8} className='colCard'>
                    <Card
                        title='Số ca tử vong'
                        headStyle={{ backgroundColor: 'black', color: '#fff' }}
                        size="small"
                        hoverable={true}
                        onClick={() => setTypeCard('deaths')}
                    >
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={summary.deaths} duration={2} separator="," />
                        </Typography>
                        +{summary.todayDeaths} ca trong 24h qua
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default HighLightCard;