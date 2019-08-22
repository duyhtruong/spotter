import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {FlexibleXYPlot, LineSeries, XAxis, 
        YAxis} from 'react-vis';

class LineGraph extends React.Component{
    render(){
        const data = [
            {x: 'Jan', y: 120},
            {x: 'Feb', y: 130},
            {x: 'Mar', y: 130},
            {x: 'Apr', y: 140},
            {x: 'May', y: 145},
            {x: 'Jun', y: 150},
            {x: 'Jul', y: 150},
            {x: 'Aug', y: 155},
            {x: 'Sep', y: 160},
            {x: 'Oct', y: 165},
            {x: 'Nov', y:165},
            {x: 'Dec', y:170}
          ];

          const data2 = [
            {x: 'Jan', y: 150},
            {x: 'Feb', y: 150},
            {x: 'Mar', y: 150},
            {x: 'Apr', y: 160},
            {x: 'May', y: 165},
            {x: 'Jun', y: 170},
            {x: 'Jul', y: 170},
            {x: 'Aug', y: 175},
            {x: 'Sep', y: 180},
            {x: 'Oct', y: 185},
            {x: 'Nov', y:185},
            {x: 'Dec', y:190}
          ];

          const data3 = [
            {x: 'Jan', y: 120},
            {x: 'Feb', y: 125},
            {x: 'Mar', y: 125},
            {x: 'Apr', y: 130},
            {x: 'May', y: 135},
            {x: 'Jun', y: 135},
            {x: 'Jul', y: 140},
            {x: 'Aug', y: 140},
            {x: 'Sep', y: 145},
            {x: 'Oct', y: 150},
            {x: 'Nov', y:155},
            {x: 'Dec', y:160}
          ];
          
        return(
            <div className='plot'>
            <FlexibleXYPlot height={300} xType='ordinal'>
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <LineSeries data={data} />
            <LineSeries data={data2} />
            <LineSeries data={data3} />
            </FlexibleXYPlot>
          </div>
        )
    }
}

export default LineGraph;