import React, { Component } from 'react';

class LanguageAdder extends React.Component{

    languageList = [];

    constructor(props){
        super(props);
        this.state = {
            langList: this.languageList
        }
        this.addLang = this.addLang.bind(this);
    }

    onNewLangAdded(){
        console.log("on new lang add from onNewLangAdded");
    }


    myFoo = () => {
        this.props.onNewLangAdd(listInfo);

    }

    addLang(event) {
       let input = document.getElementById('lang-input').value;
       this.languageList.push(input);

       this.setState({
           langList: this.languageList
       })
    }

    render(){
        return(
            <div className="LanguageAdder">
                <div className="form-group">
                    <input className="form-control" type="text" id="lang-input" />
                    <button className="btn btn-success" id="add-btn" onClick={this.addLang}>ADD</button>
                </div>
            </div>
        )
    }
}

export default LanguageAdder;