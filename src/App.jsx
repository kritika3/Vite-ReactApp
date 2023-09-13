import React from 'react';
import { EventsContextProvider } from './context/EventsContext';
import EventPage from './components/EventPage/EventPage';
import { SnackbarbarContextProvider } from './context/SnackbarContext';
import { CustomSnackbar } from './views/CustomSnackbar/CustomSnackbar';

function App() {
  return (
    <SnackbarbarContextProvider>
      <CustomSnackbar />
      <EventsContextProvider>
        <EventPage />
      </EventsContextProvider>
    </SnackbarbarContextProvider>
  );
}

export default App;
