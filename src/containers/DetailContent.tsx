import React from 'react';

const DetailContent = () => {
  return (
    <div className="detail__content">
      <div className="flag__container">
        <div className="flag">
          <img src="./images/flag.jpg" alt="" />
        </div>
      </div>
      <div className="details__text__content">
        <h1>Belgium</h1>
        <div className="detail__lists">
          <ul className="first__list">
            <li>
              Native Name: <span>Belgie</span>
            </li>
            <li>
              Population: <span>Belgie</span>
            </li>
            <li>
              Region: <span>Belgie</span>
            </li>
            <li>
              Sub Region: <span>Belgie</span>
            </li>
            <li>
              Capital: <span>Belgie</span>
            </li>
          </ul>
          <ul className="second__list">
            <li>
              Top Level Domain: <span>Belgie</span>
            </li>
            <li>
              Currencies: <span>Belgie</span>
            </li>
            <li>
              Languages: <span>Belgie</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
