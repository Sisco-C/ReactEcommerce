import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Promotions = props => {


    return (
        <div style={{ backgroundColor: '#EDEADE' }}>
            <div>
                <div className="hero is-primary">
                    <div className="hero-body container">
                        <h4 className="title">Current Running Promotions</h4>

                        <div>
                            <div>
                                <h5>Tier Data Coupons & Promo Codes

                                </h5>
                            </div>

                        </div>
                    </div>

                </div>
                <br></br>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        // alignItems: 'center',
                        justifyContent: 'center',
                        marginleft: 'auto',
                        marginright: 'auto',

                    }}>
                        <Card style={{
                            width: '50rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '10',

                        }}>
                            <Card.Img variant="top" src="../fiftypercentoff.jpg" />
                            <div>
                                <Card.Body>
                                    <Card.Title style={{ fontStyle: 'italic', fontWeight: '900' }}>GET YOUR ENTIRE ORDER FOR 50% OFF</Card.Title>
                                    <Card.Text>
                                        <h4>
                                            Automatically Apply the Best Promo Codes and Cash Back at Checkout for Items That have a Discount.
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary" style={{ backgroundColor: 'purple', color: 'white', borderRadius: 10, borderColor: 'purple' }}>Get Deal</Button>
                                </Card.Body>
                            </div>
                        </Card>

                        <br></br>
                        <Card style={{
                            width: '50rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginleft: 'auto',
                            marginright: 'auto',
                            borderRadius: '5'
                        }}>
                            <Card.Img variant="top" src="../freeshipping.png" />
                            <div>
                                <Card.Body>
                                    <Card.Title style={{ fontStyle: 'italic', fontWeight: '900' }}>GET YOUR ITEMS SHIPPED FOR FREE TO THE USA AND CANADA</Card.Title>
                                    <Card.Text>
                                        <h4>
                                            Automatically Apply the Best Promo Codes and Cash Back at Checkout for Items That have a Discount.
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary" style={{ backgroundColor: 'purple', color: 'white', borderRadius: 10, borderColor: 'purple' }}>Grab offer while it lasts!</Button>
                                </Card.Body>
                            </div>
                        </Card>
                        <br></br>
                        <Card style={{
                            width: '50rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '10',

                        }}>
                            <Card.Img variant="top" src="../sandals.jpg" />
                            <div>
                                <Card.Body>
                                    <Card.Title style={{ fontStyle: 'italic', fontWeight: '900' }}>UPTO 70% OFF FOR SANDALS AND BROGUES</Card.Title>
                                    <Card.Text>
                                        <h4>
                                            It's sandal season for the girlies! Grab yourself a pair of your favorite sandals and have yourself a hot girl dummer!
                                        </h4>
                                    </Card.Text>
                                    <Button variant="primary" style={{ backgroundColor: 'purple', color: 'white', borderRadius: 10, borderColor: 'purple' }}>Get Deal</Button>
                                </Card.Body>
                            </div>
                        </Card>


                    </div>
                </div>
            </div>
            <footer style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            }}> follow us on Instagram</footer>
        </div>


    );
};

export default Promotions;