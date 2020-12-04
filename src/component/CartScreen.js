import React from 'react'
import TopRated from '../TopRated'
import {Row,Card,Col,Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const CartScreen = ({match}) => {
   const movie=TopRated.find((p)=>p.id===match.params.id)
   return (
    <div style={{height:'300px'}}>
    <Card className="bg-dark text-white" >
    <Card.Img src={movie.posterurl} alt="Card image" 
    height='500px'
    width='50%'
    style={{opacity:'0.5'}}
    />
    <Card.ImgOverlay>
<Card.Title className='pt-3'>{movie.title}</Card.Title>
      <Card.Text>
       <Row>
          <div>
          <div>
            <i className='fas fa-play fa-2x  p-4'></i>
         <LinkContainer to='/movie'>
         <Button type='text'>Watch Trailer</Button>

         </LinkContainer>
         
          </div>
          <div>

           </div>
           <Col md={8}>
           {movie.storyline}
           </Col>
            </div>
            <Col md={2} className='pt-2'>
              <div>Director</div>
              <div>Duration</div>
              <div>Generes</div>
              </Col>
              <Col md={2} className='pt-2'>
<div>{movie.actors[1]}</div>
<div>{movie.duration}</div>
              <div>Generes</div>
              </Col>
        
       </Row>
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
  </div>


)
}

export default CartScreen
