import React, { Component } from 'react'
//exporter le compsant//   creation du composant par une class

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {Person: true};
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          Person: !prevState.Person
        }));
      }
    render() {
        return (
            <div>
                 <button onClick={this.handleClick}>
                    {this.state.Person ? 'ON' : ''}
                </button>
                
            </div>
        )
    }
}

  