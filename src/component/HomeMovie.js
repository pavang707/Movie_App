import React from 'react'
import TopRated from '../TopRated'
import Intheater from '../Intheater'
import {Row,Col,Card,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const HomeMovie = () => {
    return (
      <>
       <Row>
           <Col  md={12}>
           <Carousel >

            {Intheater.map((movie)=>{
            return(

                  <Carousel.Item>
                <Link to={`/movie/${movie.id}`}>
                    <img 
                   className="d-block w-100"
                    src={movie.posterurl}
                    alt={movie.title}
                    width='100%'
                    height='400px'
                    opacity='0.8'
                    ></img>
                     </Link>
                    </Carousel.Item>
               
                )
              })}
                </Carousel>
  </Col>
 </Row>

 <Row>

 
  {TopRated.map((theater)=>{
    return(
      <Card className="my-3 p-3 rounded">
      <Link to={`/movies/${theater.id}`}>
      <Card.Img src={theater.posterurl} variant='top'/>
      </Link>
      <Card.Body>
      <Link to={`/movies/${theater.id}`}>
         <strong>
             {theater.title}
         </strong>
          </Link>
      </Card.Body>
</Card>
    )
  })}
</Row> 
</>
    )
}

    

      
      



export default HomeMovie
