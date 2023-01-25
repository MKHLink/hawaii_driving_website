import React from 'react';
import {Col, Row} from 'antd';
import GIF from '../../assets/GIF/header.gif';

function Header(){
    return(
        <header>
            <Row>
                <Col span={24}><img className="headerImg" src={GIF} alt='driving'/>
                    <div className='headerText'>
                        <h1>Hawaii Driving School</h1>
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header;