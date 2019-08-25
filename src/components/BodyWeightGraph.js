import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {FlexibleXYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

class BodyWeightGraph extends React.Component{
    render(){
        const data = [
            {x: 'Jan', y: 120},
            {x: 'Feb', y: 125},
            {x: 'Mar', y: 125},
            {x: 'Apr', y: 125},
            {x: 'May', y: 130},
            {x: 'Jun', y: 130},
            {x: 'Jul', y: 130},
            {x: 'Aug', y: 128},
            {x: 'Sep', y: 128},
            {x: 'Oct', y: 125},
            {x: 'Nov', y:125},
            {x: 'Dec', y:125}
          ];
          
        return(
            <div className='plot plot--align'>
            <FlexibleXYPlot height={300} xType='ordinal'>
            <XAxis tickLabelAngle={-45} />
            <YAxis />
            <LineSeries data={data} />

            </FlexibleXYPlot>
            </div>
        )
    }
}

export default BodyWeightGraph;