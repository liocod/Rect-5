//importer les modules dont on a besoin
import React, { Component } from 'react'

//exporter le compsant pour le rendre disponible//   creation du composant par une class
export default class Profession extends Component { 
    state={
        Profession:'Etudiant'
    }
    handleClick=()=> this.setState({Profession:'Etudiant'})
    render() {
        return (
            <div className='Profession'>
                <h1 style={{fontSize:'80px',fontWeigth:'bold',textAlign:'center'}}> {this.state.Profession} </h1>
                
            </div>
        )
    }
    
}
