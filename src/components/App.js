import React from 'react';

import Nav from './Nav';
import Dashboard from './Dashboard';

class App extends React.Component{
    render(){
        return(
            <div>
                <Nav />
                <Dashboard />
            </div>
        )
    }
}

export default App;