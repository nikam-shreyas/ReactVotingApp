import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../store';
import { setCurrentUser } from '../store/actions/auth';
import { addError } from '../store/actions/error';
import decode from 'jwt-decode';
import {setToken} from '../store/actions';
import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage'
if(localStorage.jwtToken ){
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch (error) {
        store.dispatch(setCurrentUser());
        store.dispatch(addError(error));
    }
}


const App = () => (<Provider store = {store}>
    <Auth authType={'login'}/>
    <ErrorMessage />
</Provider>);


export default App;


