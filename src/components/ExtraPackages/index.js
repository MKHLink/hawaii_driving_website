import React from 'react';
import {Col,Row, Card} from 'antd';

function ExtraPackages(){
    return(
        <div>
        <Row gutter={4}>
        <Col  xs={24} xl={8} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>One Time Lesson</span>}  bordered={false}>
          <p className='driverCards'>
            Single Driving Lesson (70 minutes)<br/>
            Pick Up And Drop Off<br/>
            Class Behind The Wheel<br/>
            <span style={{color:'green', fontSize:50}}>$70</span>
          </p>
        </Card>
        </Col>

        <Col  xs={24} xl={8} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>Driving Test Apointment</span>}  bordered={false}>
          <p className='driverCards'>
            Quickly Scheduled Based on Availablity<br/>
            Payment must be done to DMV website<br/>
            Can combine with other package for car<br/>
            <span style={{color:'green', fontSize:50}}>$10</span>
          </p>
        </Card>
        </Col>

        <Col  xs={24} xl={8} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>Car and Instructor for an Exam</span>}  bordered={false}>
          <p className='driverCards'>
            Car Provided for Exam <br/>
            Pick Up And Drop Off<br/>
            Necessary Materials for the Exam<br/>
            <span style={{color:'green', fontSize:50}}>$85</span>
          </p> 
        </Card>
        </Col>
        </Row>

        </div>
    );
}

export default ExtraPackages;