import React from 'react';
import {Col,Row, Card} from 'antd';

function DirverPackages(){
    return(
        <div>
        <Row>
        <Col  xs={24} xl={6}>
        <Card title={<span style={{fontSize: 'xx-large'}}>License Ready Package</span>}  bordered={false}>
          <p className='driverCards'>
            5 Driving Lessons (45m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$275</span><br/>
            <span style={{color: 'orange'}}>Original Price : $285/You Save $10</span><br/>
            <span>Payment Plan Available</span>
          </p>
          <br/>
          <br/>
          <br/>
        </Card>
        
        </Col>
        <Col  xs={24} xl={6}>
        <Card title={<span style={{fontSize: 'xx-large'}}>Experience Package</span>} bordered={false}>
        <p className='driverCards'>
            5 Driving Lessons (60m each)<br/>
            Collections And Returns<br/>
            Appointment And Driving Test Car<br/>
            Trolley For Exam<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$310</span><br/>
            <span style={{color: 'orange'}}>Original Price : $325/You Save $15</span><br/>
            <span>Payment Plan Available</span>
          </p>
        </Card>
        
        </Col>
        <Col  xs={24} xl={6}>
        <Card title={<span style={{fontSize: 'xx-large'}}>New Driver Package</span>} bordered={false}>
        <p className='driverCards'>
            10 Driving Lessons (45m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$460</span><br/>
            <span style={{color: 'orange'}}>Original Price : $480/You Save $20</span><br/>
            <span>Payment Plan Available</span>
          </p>
          <br/>
          <br/>
        </Card>
        </Col>
        
        <Col  xs={24} xl={6}>
        <Card title={<span style={{fontSize: 'xx-large'}}>Professional Package</span>} bordered={false}>
        <p className='driverCards'>
            10 Driving Lessons (60m each)<br/>
            Pick Up And Drop Off<br/>
            Appointment And Driving Test Car<br/>
            Trolley For Exam<br/>
            Instructor For Exam<br/>
            <span style={{color:'red'}}>Limited Time Offer :</span><br/>
            <span style={{color:'green', fontSize:50}}>$575</span><br/>
            <span style={{color: 'orange'}}>Original Price : $605/You Save $30</span><br/>
            <span>Payment Plan Available</span>
          </p>
        </Card>
        </Col>
      </Row>
        </div>
    );
}

export default DirverPackages;