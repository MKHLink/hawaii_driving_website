import React from 'react';
import {Col, Row} from 'antd';



function About(){
    
    return(
        <div className='about'>
            <Row>
            <Col span={24}>
                <p className="aboutP">
                    Hawaii Driving Scool is a reliable training center, serving in Jackson Heights, Flushing and multiple Queens areas.
                    <br/>
                    We guarantee you will receive one of the most advanced and intensive training in New York City.
                    
                </p>
            </Col>
            </Row>
        </div>
    )
}

export default About;