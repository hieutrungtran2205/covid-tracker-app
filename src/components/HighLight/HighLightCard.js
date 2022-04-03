import { Card, Typography } from 'antd';
import CountUp from 'react-countup';

function HighLightCard({ title, count, type, color, raise }) {
    return (
        <div>
            <Card
                title={title}
                headStyle={{ backgroundColor: `${color}`, color: '#fff' }}
                size="small"
                hoverable={true}
            >
                <Typography variant="h5" component="h2">
                    <CountUp start={0} end={count} duration={2.75} separator="," />
                </Typography>
                The last 24 hours +{raise} cases
            </Card>
        </div>
    );
}

export default HighLightCard;