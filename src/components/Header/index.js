import React from 'react';
import {Col, Row} from 'antd';



function Header(){
    return(
        <header>
            <Row>
                <Col span={24}>
                    <div >
                        <h1 style={{fontSize:60,fontWeight:900,fontFamily:'Arial'}}>HAWAII DRIVING SCHOOL</h1>
                        
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header;