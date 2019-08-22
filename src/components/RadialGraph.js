import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

class RadialGraph extends React.Component{
    render(){
        
        const data = [{angle1:5},{angle2:5},{angle:5}]

        return(
            <div className='plot'>
            
            <RadialChart data={data} width={300} height={300} />
            
          </div>
        )
    }
}

export default RadialGraph;       