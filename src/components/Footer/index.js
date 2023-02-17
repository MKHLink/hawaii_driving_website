import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer(){
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>

      <section className='footer'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <br/>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Hawaii Driving School
              </h6>
              <p>
                We look forward to hearing from you and provide you with the ultimate driving experience.
              </p>
            </MDBCol>

            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <br/>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                136-82 39th Ave #3G, Queens, NY 11354
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hawaiidrivingschool@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />  (718) 307-9717
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <span className='text-reset fw-bold'>
          Hawaii Driving School
        </span>
      </div>
    </MDBFooter>
    );
}

export default Footer;


