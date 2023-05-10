import React from 'react';
import {Col,Row, Card} from 'antd';

function DirverPackages(){
    return(
        <div>
        <Row gutter={4}>
        <Col  xs={24} xl={6}style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>License Ready Package</span>}  bordered={false}>
          <p className='driverCards'>
            5 Driving Lessons (45m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            Professional Instructor for Exam <br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$225</span><br/>
            <span style={{color: 'blue'}}>Original Price : $300/You Save $75</span><br/>
          </p>
        </Card>
        
        </Col>
        <Col  xs={24} xl={6} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>Experience Package</span>} bordered={false}>
        <p className='driverCards'>
            5 Driving Lessons (60m each)<br/>
            Collections And Returns<br/>
            Appointment And Driving Test Car<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$315</span><br/>
            <span style={{color: 'blue'}}>Original Price : $375/You Save $60</span><br/>
          </p>
        </Card>
        
        </Col>
        <Col  xs={24} xl={6} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>New Driver Package</span>} bordered={false}>
        <p className='driverCards'>
            10 Driving Lessons (45m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$370</span><br/>
            <span style={{color: 'blue'}}>Original Price : $430/You Save $60</span><br/>
          </p>
        </Card>
        </Col>
        
        <Col  xs={24} xl={6} style={{marginBottom:4}}>
        <Card headStyle={{ backgroundColor: 'rgb(255, 0, 85)', color: '#ffffff' }} title={<span style={{fontSize: 'x-large'}}>Professional Package</span>} bordered={false}>
        <p className='driverCards'>
            10 Driving Lessons (60m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$540</span><br/>
            <span style={{color: 'blue'}}>Original Price : $635/You Save $95</span><br/>
          </p>
        </Card>
        </Col>
      </Row>
        </div>
    );
}

export default DirverPackages;