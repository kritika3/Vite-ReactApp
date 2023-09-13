import { createContext, useState } from 'react';

const initalState = {
  eventsList: null,
  selectedEvents: [],
  isLoading: false,
  isError: false,
  setEventsList: () => {},
  setSelectedEvents: () => {},
  setIsError: () => {},
  setIsLoading: () => {},
};

const EventsContext = createContext(initalState);

export function EventsContextProvider(props) {
  const [eventsList, setEventsList] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <EventsContext.Provider
      value={{
        eventsList,
        setEventsList,
        selectedEvents,
        setSelectedEvents,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
}

export default EventsContext;
