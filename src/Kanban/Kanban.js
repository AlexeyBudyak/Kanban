import React from 'react';
import ListStyle from "./ListStyle";
import BlocksStyle from "./BlocksStyle";


function Kanban(props) {
    const {data, list, setData} = props;
    const output = list ?
        <ListStyle data={data} setData={setData}/>
        : <BlocksStyle data={data} setData={setData}/>;
  return (
    <div>
        {output}
    </div>
  );
}

export default Kanban;