//importer les modules dont on a besoin

import React, { Component } from 'react';

//exporter le compsant pour le rendre disponible//   creation du composant par une class

export default class Bio extends Component {
    state={
        Bio:'Businessman'
    }
    handleClick=()=> this.setState({Bio:'Businessman'})
    render() {
        return (
            <div className='Bio'>
                <h1 style={{fontSize:'80px',fontWeigth:'bold',textAlign:'center'}}>{this.state.Bio}</h1>
            </div>
        );
    }
}
