import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Footer = () => {
    return (
        <footer style={{backgroundColor:'lightgray'}}>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                      <div style={{display:"flex", flexFlow:'wrap'}}>
                          <div style={{margin:25}}>Subscription</div>
                          <div style={{margin:25}}>Hype</div>
                          <div style={{margin:25}}>About Us</div>
                          <div style={{margin:25}}>Faqs</div>
                          <div style={{margin:25}}>Career</div>
                          <div style={{margin:25}}>Feedback</div>
                          <div style={{margin:25}}>Support</div>
                          <div style={{margin:25}}>Contact Us</div>

                      </div>

                    </Col>
                    <Col md={4} sm={12} style={{paddingTop:25}}>
                       <Col>Available On</Col>
                       <Col style={{justifyContent:'space-around'}}>
                           <a href='play.google.com' target='_blank'>
                       <i className='fab fa-google-play fa-3x'> </i>
                           </a>
                           <a href='www.apple.com'target='_blank'>
                       <i className='fab fa-apple fa-3x '> </i>
                           </a>
                       <i className='fab fa-fire fa-3x'> </i>
                       </Col>
                    </Col>
                    <Col md={2} sm={12} style={{paddingTop:25}}>
                     <Col md={12}>
                     Connect With us
                     </Col>
                     <Col md={12} style={{padding:'0 10px'}} >
                        <a href="www.facebook.com" target='_blank'>
                   <i className='fab fa-facebook fa-2x'></i>

                        </a>

                        <a href="www.instagram.com" target='_blank'>
                   
                    <i className='fab fa-instagram fa-2x'></i>
                   </a>
                   <a href="www.twitter.com" target='_blank'>

                    <i className='fab fa-twitter fa-2x'></i>
                    </a>
                    <a href="www.youtube.com" target='_blank'>

                    <i className='fab fa-youtube fa-2x'></i>
                   </a> 
                     </Col>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={2}>
                        <LinkContainer to='/'><h1 className='pr-2' >  GEMPLEX</h1></LinkContainer>
                    
                    </Col>
                    <Col md={8}>
                    <p style={{fontSize:'11px'}}>@ 2018-2020 Gemplex. All Rights Reserved | Terms & ConditionPrivacy PolicyDisclaimer
Gemplex and all related channel and programming logos servies marks of and all related programming visuals and elements are the property of Gemplex media pvt.ltd.</p>
                    
                    </Col>
                <Col className='ml-auto'>
                   <Col> 
                   Powered By
                   </Col>
                   <Col>
                   <i className='fab fa-aws fa-5x'></i>
                   </Col>
                </Col>
                </Row>

                <Row>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer
