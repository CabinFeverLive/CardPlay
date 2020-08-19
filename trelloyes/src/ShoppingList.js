import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList(Props){
    return (
        <ul>
            {Props.items.map((item, i) =>
            <ShoppingItem 
              key={i}
              item={item} 
            />
            )}
        </ul>
    )
}

ShoppingList.defaultProps = {
    items : []
}