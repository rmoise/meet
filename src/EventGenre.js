import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {
  const [data, setData] = useState([]);
  useEffect(() => { setData(() => getData()); }, [events]);
  const colors = ["#5581FE", "#FECD6E", "#1EC9B0", "#6A5BD3", "#FEAC9F"];

  const getData = ()=>{
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const summaries=events.map(event=> event.summary);
    const rawResluts= genres.map((genre)=>{
        const value=summaries.filter((summary)=>summary.includes(genre)).length;
        return {
          name: genre,
          value
        }
      });
    const results=rawResluts.filter((element)=>element.value!==0);
    return results;
  }

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
      <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={89}
          label={({percent }) =>
            `${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={76}/>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;

