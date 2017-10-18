import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './card.css'


class Card extends Component {
    render() {
        return (            
            <div className="card">
                <Link className="card__link" to="/detail">
                    <div className="card-body">
                        <h4 className="card-title">Article title</h4>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Card;