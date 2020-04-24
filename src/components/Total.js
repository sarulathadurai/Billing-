import React from 'react';
import "/home/saru/calculator/src/Input.css"


const Total = (props) => {
    
    return(
        <div className="item">
             
         <table>
             <tfoot>
             <tr>
                <td>Total:</td>
                <td>{props.total}</td>
            </tr>

             </tfoot>
          
         </table>
        </div>
    );
}

export default Total;