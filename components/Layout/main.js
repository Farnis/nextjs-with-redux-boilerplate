import React from "react";
import {Meta} from './Meta'
import Header from './Header'
import Footer from './footer'

export default ({children, title = "تیکا", headerType = 1}) => (
  <div>
    <Meta title={title}/>
    <Header type={headerType} hidden={false}/>
    {children}
    <Footer/>
  </div>
);