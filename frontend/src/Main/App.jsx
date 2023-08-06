import React from "react";
import "font-awesome/css/font-awesome.min.css"

import "./App.css"
import Header from "../Components/Templates/Header"
import Menu from "../Components/Templates/Menu"
import Content from "../Components/Templates/Content"
import Footer from "../Components/Templates/Footer"

const app = props => 
<div className="app">
    <Header></Header>
    <Menu></Menu>
    <Content></Content>
    <Footer></Footer>
</div>

export default app