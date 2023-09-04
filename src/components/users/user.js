import React, { Component } from "react";
import "./user.css"
export default class User extends Component {
    state = { 
        users: [
            {email:"user1@gmail.com",name:"user1",isActive:true},
            {email:"user2@gmail.com",name:"user2",isActive:false},
            {email:"user3@gmail.com",name:"user3",isActive:true},
            {email:"user4@gmail.com",name:"user4",isActive:false},
            {email:"user5@gmail.com",name:"user5",isActive:true}
        ],
        products: [
            {title: "IPhone", price: 2000, outOfStock: true},
            {title: "TV", price: 800, outOfStock: false},
            {title: "laptop", price: 2500, outOfStock: false},
            {title: "IPad", price: 1500, outOfStock: true},
        ],
        isAuth: true,
    }
    ToggleAuth=()=> {
        this.setState({ isAuth: !this.state.isAuth })
    }
    render() { 
        return (<>
            <button onClick={this.ToggleAuth}>Toggle Auth</button>
            {this.state.isAuth&&(
                <ul style={{ listStyleType: "none" }}>
                    {
                        this.state.products.map((product,i) => {
                            if (!product.outOfStock) {
                                return (<li key={i}>The price of {product.title} is {product.price}</li>);
                            }
                        })
                    }
                </ul>)}
        </>);
    }
}
