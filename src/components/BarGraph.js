import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {FlexibleXYPlot, VerticalBarSeries, XAxis, YAxis} from 'react-vis';

class BarGraph extends React.Component{
    render(){
        const data = [
            {x: 'Mon', y: 6},
            {x: 'Tue', y: 6},
            {x: 'Wed', y: 7},
            {x: 'Thur', y: 6},
            {x: 'Fri', y: 7},
            {x: 'Sat', y: 8},
            {x: 'Sun', y: 8}
          ];

        return(
            <div className='plot plot--align'>
            <FlexibleXYPlot height={300} xType='ordinal'>
            <XAxis  />
            <YAxis />
            <VerticalBarSeries data={data} />
            </FlexibleXYPlot>
            </div>
        )
    }
}

export default BarGraph;