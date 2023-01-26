import React from 'react';
import {Col,Row, Card} from 'antd';

function ExtraPackages(){
    return(
        <div>
        <Row>
        <Col  xs={24} xl={8}>
        <Card title={<span style={{fontSize: 'xx-large'}}>One Time Lesson</span>}  bordered={false}>
          <p className='driverCards'>
            Single Driving Lesson (90 minutes)<br/>
            Pick Up And Drop Off<br/>
            Class Behind The Wheel<br/>
            <span style={{color:'green', fontSize:50}}>$70</span>
          </p>
        </Card>
        </Col>

        <Col  xs={24} xl={8}>
        <Card title={<span style={{fontSize: 'xx-large'}}>Driving Test Apointment</span>}  bordered={false}>
          <p className='driverCards'>
            Quickly Scheduled Based on Availablity<br/>
            <span style={{color:'green', fontSize:50}}>$10</span>
          </p>
          <br/>
          <br/>
          <br/>
        </Card>
        </Col>

        <Col  xs={24} xl={8}>
        <Card title={<span style={{fontSize: 'xx-large'}}>Car and Instructor for an Exam</span>}  bordered={false}>
          <p className='driverCards'>
            Pick Up And Drop Off<br/>
            Necessary Materials for the Exam<br/>
            <span style={{color:'green', fontSize:50}}>$95</span>
          </p>
          <br/>
          
        </Card>
        </Col>
        </Row>

        </div>
    );
}

export default ExtraPackages;