import React, { Component } from 'react';

class Filter extends React.Component{
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

