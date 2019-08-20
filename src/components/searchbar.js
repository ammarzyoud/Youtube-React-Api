import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { text: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event) {
        this.setState({ text: event.target.value });
        this.props.onSearchChangeTerm(event.target.value);
    }


    render(){
        return (
            <div className="search-bar">
                <a href = "https://www.youtube.com/?gl=JO" target = "_blank"><img  className = "logo" src = "https://amp.businessinsider.com/images/59a59a8d79bbfd1d008b601a-960-480.png"></img></a>
                <input    
                    placeholder="search"
                    value={this.state.text}
                    onChange={this.onInputChange} 
                />              
            </div>
        );        
    }
}

export default SearchBar;