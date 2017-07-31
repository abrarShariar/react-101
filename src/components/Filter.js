import React, { Component } from 'react';
import HttpService from '../services/HttpService';

class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            repoByUsername : []
        }
    }

    componentDidMount(){
        HttpService.getRepoByUsername('abrarShariar').then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log("Error");
        })
    }


    render(){
        return(
            <div className="Filter">
                <div>
                    <input type="checkbox" name="vehicle" value="Bike"/> I have a bike<br/>
                </div>
            </div>
            )
    }
}

export default Filter;

