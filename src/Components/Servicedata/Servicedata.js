import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const Servicedata = (props) => {
    const { id, price, name, Authore, image } = props.service;
    return (
        <div className="home-card">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            <p>ID:{id}</p>
                        </Card.Text>

                        <Card.Text>
                            <p>Authore:{Authore}</p>
                        </Card.Text>

                        <Card.Text>
                            <p>Price:{price}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardGroup>

        </div>
    );
};

export default Servicedata;