import React from "react";
import NavScrollExample from "./nav";

export default class Header extends React.Component{
    constructor() {
        super();
        this.state = {
            userName: "Abdalla",
            Age: 20,
        }
    }
    
    changeState = () => {
        this.setState({ userName: this.state.userName === "Abdalla" ? "Hamdy" : "Abdalla" })
    };
    render() {
        return (
            <>
                <NavScrollExample/>
            </>
        );
    }
}