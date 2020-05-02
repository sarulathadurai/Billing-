import React from 'react';

const List = ({list,deleteItem}) =>{

    return(
        
        <div>

           {list.map((elemI) => (
                
        <div className="item" key={elemI.id}>
  
        <table>
            <tbody>
            <tr>
               <td>{elemI.item}</td>
               <td>{elemI.amount}</td>
               <td onClick = {() => {deleteItem(elemI.id)}}>Delete</td>
           </tr>

            </tbody>
         
        </table>

        </div>
                 )
             
           )}

        </div>
         
      
  
    );

}

export default List;