import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './Caraddata';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/actions'

const CardShow = () => {
    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(ADD(e))
    }
    return (
        <>
            <div className="container mt-3">
                <h1 className="text-center">Add To Cart Projecte In Redux</h1>
                <div className="row d-flex  justify-content-center align-items-center">
                    {
                        Cardsdata.map((element, id) => {

                            return <Card key={id} className='mx-3 my-3  p-0 card_style' style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem' }} src={element.imgdata} />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                        <p>price:₹ {element.price}</p>

                                    </Card.Text>
                                    <Button onClick={() => send(element)} className='w-100 ' variant="primary">Add To Card</Button>
                                </Card.Body>
                            </Card>
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default CardShow;
