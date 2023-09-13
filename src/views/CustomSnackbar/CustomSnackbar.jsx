import React, { useState, useEffect, useContext } from 'react';
import './CustomSnackbar.css';
import SnackbarContext from '../../context/SnackbarContext';

export const CustomSnackbar = () => {
  const { openSnackbar, errorMsg, snackbarType, setOpenSnackbar } =
    useContext(SnackbarContext);

  useEffect(() => {
    if (errorMsg) {
      setOpenSnackbar(true);
      const timer = setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMsg]);

  return (
    <div className={`snackbar ${snackbarType} ${openSnackbar ? 'show' : ''}`}>
      <span className='snackbar-msg'>{errorMsg}</span>
    </div>
  );
};
