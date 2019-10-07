import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-items";


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio", 
            isLoading: false,
            data: []
        };

        this.handleFiter = this.handleFiter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    getPortfolioItems() {
        axios
          .get('https://johnhammack.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
          })
      }

    portfolioItems() {
        return this.state.data.map(item => {
            // debugger;
            return <PortfolioItem key={item.name} item={item} title={item.name} url= {item.url} slug={item.id} />;

        })
    }

    handleFiter = filter => {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
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