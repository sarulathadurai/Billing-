import React from 'react';
import ListItem from "./ListItem"

const List = (props) =>{

    return(
        
        <div>

           {props.list.map((elemI,index) => (
                <ListItem 
                    key = {index}
                    amount = {elemI.Amount}
                    item  = {elemI.Item}
                />



             )
           )}



        </div>
         
      
  
    );

}

export default List;