import React from 'react';
import Block from "./Block";

function BlockStyle(props) {
    const {data, setData} = props;
    const stats = ['todo', 'progress', 'review', 'done'];
    return (
        <div className="row">
            {stats.map(status => <Block data={data} stats={status} id={status} setData={setData}/>)}
        </div>
    );
}

export default BlockStyle;
