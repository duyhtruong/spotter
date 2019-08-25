import React from 'react';

import Nav from './Nav';
import Card from './Card';
import LineGraph from './LineGraph';
import BodyWeightGraph from './BodyWeightGraph';
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

                <Card styleName='card__body--size strength--width'>
                    <LineGraph />
                </Card>

                <Card styleName='card__body--size macro--width'>
                    <RadialGraph />
                </Card>

                <Card styleName='card__body--size'>
                    <BarGraph />
                </Card>

                <Card styleName='card__body--size'>
                    <BodyWeightGraph />
                </Card>
            </div>
        )
    }
}

export default Dashboard;