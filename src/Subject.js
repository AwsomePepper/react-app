import React, { Component } from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1>
            <a href='e' onClick={(e) => {
                alert('hello');
                e.preventDefault();
            }}>
              {this.props.title}
              </a>
            </h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export {Subject};

