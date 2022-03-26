import { Card, Typography } from 'antd';
import styles from './CardItem.module.css';
import CountUp from 'react-countup';
function CardItem({ cardTitle, value, lastUpdate, cardSubtitle, headStyle }) {
    return (
        <div >
            <Card
                className={styles.card}
                title={cardTitle}
                hoverable={true}
                headStyle={headStyle}
                value={value}
                size="small"
            >
                <Typography variant="h5" component="h2">
                    <CountUp start={0} end={value} duration={2.75} separator="," />
                </Typography>
                {cardSubtitle}
            </Card>
        </div>
    );
}

export default CardItem;