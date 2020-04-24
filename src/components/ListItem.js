import React from 'react';
import "/home/saru/calculator/src/Input.css"

const ListItem = (props) => {
    return (
        <div className="item">
  
         <table>
             <tbody>
             <tr>
                <td>{props.item}</td>
                <td>{props.amount}</td>
            </tr>

             </tbody>
          
         </table>

        </div>
     
    );
}

export default ListItem;