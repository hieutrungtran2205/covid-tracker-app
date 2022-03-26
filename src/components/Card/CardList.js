import { Col, Row } from 'antd';
import CardItem from './CardItem';
import styles from './CardList.module.css';

function CardList({ data: { confirmed, recovered, deaths, lastUpdate } }) {


    return (
        <div className={styles.wrapper}>
            <Row gutter={16}>
                <Col span={8}>
                    <CardItem
                        cardTitle="Infected"
                        value={confirmed.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of active cases from COVID-19."
                        headStyle={{ backgroundColor: 'orange', color: '#fff' }}
                    />
                </Col>
                <Col span={8}>
                    <CardItem
                        cardTitle="Recovered"
                        value={recovered.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of recoveries from COVID-19."
                        headStyle={{ backgroundColor: 'green', color: '#fff' }}
                    />
                </Col>
                <Col span={8}>
                    <CardItem
                        cardTitle="Deaths"
                        value={deaths.value}
                        lastUpdate={lastUpdate}
                        cardSubtitle="Number of deaths caused by COVID-19."
                        headStyle={{ backgroundColor: 'red', color: '#fff' }}
                    />
                </Col>

            </Row>
        </div>
    );
}

export default CardList;