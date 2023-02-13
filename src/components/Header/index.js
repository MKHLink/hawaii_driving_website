import React from 'react';
import {Col, Row} from 'antd';
import HeaderImg from '../../assets/GIF/header.jpg';


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