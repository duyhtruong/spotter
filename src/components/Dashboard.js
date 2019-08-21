import React from 'react';

import Nav from './Nav';
import Card from './Card';


class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard dashboard__body--color'>
                <Nav />
                <Card/>
                <Card />
                <Card />
            </div>
        )
    }
}

export default Dashboard;