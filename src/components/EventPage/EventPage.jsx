import React, { useContext, useEffect } from 'react';

// Network Imports
import { getEventList } from '../../xhr/getEventList';

//Component Imports
import RenderEventList from '../../views/RenderEventList/RenderEventList';

// CSS Imports
import './EventPage.css';

//Context Imports
import EventsContext from '../../context/EventsContext';
import SnackbarContext from '../../context/SnackbarContext';

//CONSTANT Imports
import {
  ERROR_MESSAGES,
  LIST_HEADING,
  LIST_TYPE,
  SNACKBAR_TYPE,
} from '../../constant';

function EventPage() {
  const {
    eventsList,
    selectedEvents,
    setEventsList,
    isError,
    setIsError,
    isLoading,
    setIsLoading,
  } = useContext(EventsContext);

  const { setOpenSnackbar, setErrorMsg, setSnackbarType } =
    useContext(SnackbarContext);

  const callGetEventList = async () => {
    setIsLoading(true);
    try {
      const response = await getEventList();
      setEventsList(response);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorMsg(ERROR_MESSAGES.API_FETCH_ERROR + error.message);
      setSnackbarType(SNACKBAR_TYPE.ERROR);
      setOpenSnackbar(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    callGetEventList();
  }, []);

  return (
    <>
      {!isLoading && !isError && (
        <div className="event-container">
          <RenderEventList
            list={eventsList}
            listType={LIST_TYPE.EVENT_LIST}
            listHeading={LIST_HEADING.ALL_EVENTS}
          />
          <RenderEventList
            list={selectedEvents}
            listType={LIST_TYPE.SELECTED_EVENTS}
            listHeading={LIST_HEADING.SELECTED_EVENTS}
          />
        </div>
      )}
    </>
  );
}

export default EventPage;
