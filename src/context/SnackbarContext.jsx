import { createContext, useState } from 'react';

const initialState = {
  snackbarType: '',
  setSnackbarType: () => {},
  errorMsg: '',
  setErrorMsg: () => {},
  openSnackbar: false,
  setOpenSnackbar: () => {},
};

const SnackbarContext = createContext(initialState);

export function SnackbarbarContextProvider(props) {
  const [snackbarType, setSnackbarType] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <SnackbarContext.Provider value={{ snackbarType, setSnackbarType, errorMsg, setErrorMsg, openSnackbar, setOpenSnackbar }}>
      {props.children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarContext;
