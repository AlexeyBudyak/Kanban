import React from 'react';
import Card from "./Card";

const capitalForm = text => text[0].toUpperCase() + text.slice(1);

function Block(props) {
    const {data, stats, setData} = props;
    const colorMap = {
        todo: 'border-secondary',
        progress: 'border-primary',
        review: 'border-warning',
        done: 'border-success',
    }
    return (
        <div className="col">
            <h3 className={`border-bottom border-4 ${colorMap[stats]} pb-2`}>{capitalForm(stats)}</h3>
            {
                data.filter(el => el.status === stats)
                    .map(task => (<Card data={data} task={task} setData={setData}/>))
            }
        </div>
    );
}
export default Block;