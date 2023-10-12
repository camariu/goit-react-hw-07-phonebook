import React, { useEffect } from 'react';
 
import { AddContacts } from './AddContacts/AddContacts';
 
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

import { fetchContacts } from './redux/operations';
import { getIsLoading, getError } from './redux/selectors';

import { useDispatch, useSelector } from 'react-redux';
import style from "App.module.css"

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);

  return (
    < div className={style.phoneBook}> 
      <AddContacts />
      <Filter />
      {isLoading && !errorMessage && <Loader />}
      <ContactList />
    </div>
  );
}