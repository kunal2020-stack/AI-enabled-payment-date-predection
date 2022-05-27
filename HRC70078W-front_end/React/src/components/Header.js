import React from "react";
import "./Header.css";
import ABC_product from './images/abc_products.png'

function Header() {
  return (
    <div className="header">
      <div className = 'header_abc_products'>
        <img alt="ABC Products" src={ABC_product}/>
      </div>
      <div className ='header_hrc_logo'>
        <img alt="hrc_logo" src='https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png'/>
      </div>
      <div className="header_invoice_list">Invoice List</div>
    </div>
  );
}

export default Header;
