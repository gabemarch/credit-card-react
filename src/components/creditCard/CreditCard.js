import React from 'react';
import './CreditCard.scss';
import chip from '../../assets/images/chip.png';
import hologram from '../../assets/images/hologram.png';
import visa from '../../assets/images/visa.png';

export const CreditCard = () => {
  return (
    <div className="credit-card">
      <div className="credit-card-images">
        <img className="credit-card-images-chip" src={chip} alt=""/>
        <img className="credit-card-images-hologram" src={hologram} alt=""/>
        <img className="credit-card-images-visa" src={visa} alt=""/>
      </div>
      <div className="credit-card-owner">
        <span>John Smith</span>
      </div>
      <div className="credit-card-dynamic-values">
        <div className="credit-card-number">
          <p className="card-number">123 456 789</p>
        </div>
        <div className="credit-card-expire-date">
          <p className="expire-date">03/21</p>
        </div>
      </div>
    </div>
  )
}
