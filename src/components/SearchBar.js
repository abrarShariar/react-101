import React, { Component } from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="SearchBar">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="search" placeholder="Search Github"/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;