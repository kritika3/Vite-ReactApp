import React from 'react';

//Component Import
import EventCard from '../EventCard/EventCard';

//CSS Imports
import './RenderEventList.css';


function RenderEventList({ list, listType, listHeading }) {

  return (
    <div className="event-list__wrapper">
      <span className="list-heading">{listHeading}</span>
      <div className="event-list__container">
        {list &&
          list.map((card, index) => (
            <EventCard key={index} cardDetails={card} listType={listType} />
          ))}
      </div>
    </div>
  );
}

export default RenderEventList;
