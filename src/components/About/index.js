import React from 'react';
import {Col, Row} from 'antd';



function About(){
    
    return(
        <div className='about'>
            <Row>
            <Col span={24}>
                <p className="aboutP">
                    Hawaii Driving Scool is a prestegious school
                    located in Jackson Heights and Flushing. 
                    <br/>
                    Together with us, you will go through one of the most advanced and intensive driving courses available in New York City.
                    
                </p>
            </Col>
            </Row>
        </div>
    )
}

export default About;