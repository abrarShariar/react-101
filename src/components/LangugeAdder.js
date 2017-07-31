import React, { Component } from 'react';

class LangugeAdder extends React.Component{
    render(){
        return(
            <div className="LanguageAdder">
                <div className="form-group">
                    <input className="form-control" type="text" />
                    <button className="btn btn-success" id="add-btn">ADD</button>
                </div>
            </div>
        )
    }
}

export default LangugeAdder;