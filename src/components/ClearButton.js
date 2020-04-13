import React from 'react';
import './ClearButton.css';

export default class ClearButton extends React.Component{

   render(){
       return(
           <div className="clear">
               {this.props.children}
           </div>
       );
   }
}