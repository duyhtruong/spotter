import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {RadialChart} from 'react-vis';

class RadialGraph extends React.Component{
    render(){
        
        const data = [{angle:3, label: 'Carbohydrates'},
                    {angle:3, label:'Fat'},
                    {angle:3, label:'Protein'}]

        return(
            <div className='plot plot--align'>
            
            <RadialChart 
                data={data} 
                width={300} 
                height={300}
                showLabels={true} 
                />
            
          </div>
        )
    }
}

export default RadialGraph;       