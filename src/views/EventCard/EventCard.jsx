import React, { useContext } from 'react';

//Util Imports
import { canAddEvent, getFormattedTime } from '../../utils/helper';

//Component Imports
import CustomButton from '../CustomButton/CustomButton';

//CSS Imports
import './EventCard.css';

//Context Imports
import EventsContext from '../../context/EventsContext';
import SnackbarContext from '../../context/SnackbarContext';

//CONSTANT Imports
import {
  BUTTON_TYPE,
  ERROR_MESSAGES,
  LIST_TYPE,
  SNACKBAR_TYPE,
} from '../../constant';

function EventCard({ cardDetails, listType }) {
  const { setOpenSnackbar, setErrorMsg, setSnackbarType } =
    useContext(SnackbarContext);
  const { selectedEvents, setSelectedEvents } = useContext(EventsContext);

  const { id, event_name, end_time, event_category, start_time } = cardDetails;

  //Select Button Handler
  const selectEvent = (id) => {
    if (canAddEvent(selectedEvents, cardDetails)) {
      if (selectedEvents.length < 3) {
        setSelectedEvents((prevSelectedEvents) => [
          ...prevSelectedEvents,
          cardDetails,
        ]);
      } else {
        setSnackbarType(SNACKBAR_TYPE.ERROR);
        setErrorMsg(ERROR_MESSAGES.MAX_LIMIT_REACHED);
        setOpenSnackbar(true);
      }
    } else {
      setSnackbarType(SNACKBAR_TYPE.ERROR);
      setErrorMsg(ERROR_MESSAGES.OVERLAPPING_EVENTS);
      setOpenSnackbar(true);
    }
  };

  //Remove Button Handler
  const removeEvent = (id) => {
    setSelectedEvents((prevEvents) =>
      prevEvents.filter((card) => card.id !== id),
    );
  };

  return (
    <div key={id} className="card">
      <span className="card-event__intial">{event_category[0]}</span>
      <span className="card-divider"></span>
      <div className="card-event__desc">
        <span className="card-event__name">{event_name}</span>
        <span className="card-event__category">{`(${event_category})`}</span>
        <span className="card-event__timings">
          {`${getFormattedTime(start_time)} - ${getFormattedTime(end_time)}`}
        </span>
        <CustomButton
          id={id}
          buttonAction={
            listType === LIST_TYPE.EVENT_LIST ? selectEvent : removeEvent
          }
          buttonName={
            listType === LIST_TYPE.EVENT_LIST
              ? BUTTON_TYPE.SELECT
              : BUTTON_TYPE.REMOVE
          }
        />
      </div>
    </div>
  );
}

export default EventCard;
