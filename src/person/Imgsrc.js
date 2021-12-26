//importer les modules dont on a besoin

import React, { Component } from 'react';

//exporter le compsant pour le rendre disponible//   creation du composant par une class

export default class Imgsrc extends Component {
    render() {
        return (
            <div className='Img'> 
                <img src='./img.png'alt='profil'/>
            </div>
        );
    }
}
 