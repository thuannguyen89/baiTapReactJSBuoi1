import React, { Component } from "react";
import Nav from './nav';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class BaiTapThucHanhLayout extends Component 
{
    render() {
        return (
            <>
                <Nav />
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}