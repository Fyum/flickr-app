import React from 'react';
import Card from './Card';

const GridCards = ({
  items,
}) => {

  return (
    <div className="row">
      {
        items && items.map(item => 
          <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 mx-auto">
            <Card
              item={item}
            />
          </div>
        )
      }
    </div>
  )
}

export default GridCards;