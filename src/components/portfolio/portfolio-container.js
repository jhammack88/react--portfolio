import React, { Component } from "react";

import PortfolioItem from "./portfolio-items"


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio", 
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce" },
                {title: "Eventbrite", category: "Scheduling"},
                {title: "Ministry Safe", category: "Enterprise"}, 
                {title: "SwingAway", category: "eCommerce"}
            ]
        };
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.title} title={item.title} url= {'google.com'} />;

        })
    }

    handleFiter = filter => {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }



    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('ecommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        )
    }
}