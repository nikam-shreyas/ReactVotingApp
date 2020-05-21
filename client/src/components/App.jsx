import React from 'react';
import api from '../services/api';


class App extends React.Component {
    async componentDidMount(){
        const result = await api.call('post','auth/login',{
            username: 'zeronp',
            password: 'password'
        });
        console.log(result);
    }
    render(){
        return <div>App works</div>
    }
}


export default App;