import React from 'react';
import {Col, Row} from 'antd';


function Header(){
    return(
        <header>
            <Row>
                <Col span={24}>
                    <div >
                        <h1>Hawaii Driving School</h1>
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header;