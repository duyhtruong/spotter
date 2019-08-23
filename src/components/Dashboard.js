import React from 'react';

import Nav from './Nav';
import Card from './Card';
import LineGraph from './LineGraph';
import RadialGraph from './RadialGraph';
import BarGraph from './BarGraph';
import UserInfo from './UserInfo';


class Dashboard extends React.Component{
    render(){
        return(
            <div className='dashboard dashboard__body--color'>
                <Nav />
                <Card styleName='card__intro--size'>
                    <UserInfo />
                </Card>
                <Card styleName='card__body--size'>
                    <LineGraph />
                </Card>
                <Card styleName='card__body--size'>
                    <RadialGraph />
                </Card>
                <Card styleName='card__body--size'>
                    <BarGraph />
                </Card>
                <Card styleName='card__body--size' />
            </div>
        )
    }
}

export default Dashboard;