//importer les modules dont on a besoin

import React, { Component } from 'react'

//exporter le compsant pour le rendre disponible//   creation du composant par une class

export default class FullName extends Component {
    state={
        FullName:'Eric Diouf'
    }
    handleClick=()=> this.setState({FullName:'Eric Diouf'})
    render() {
        return (
            <div className='FullName'> 
                <h1 style={{fontSize:'80px',fontWeigth:'bold',textAlign:'center'}}>{this.state.FullName}</h1>
            </div>
        );
    }
}
