import React from 'react';
import Priority from "./Priority";

// setTasks(tasks.map(el => el.id === taskId ?
//     {...el, status: statuses[statuses.indexOf(el.status) + step]} : el));

function Card(props) {
    const {data, task, setData} = props;
    const stats = ['todo', 'progress', 'review', 'done'];

    const move = (taskId, step) => {
        setData(data.map(el => el.id === taskId ?
            {...el, status: stats[stats.indexOf(el.status) + step]} : el));
    }

    return (

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <Priority data={data} setData={setData} id={task.id} priority={task.priority} />
                {
                    task.status !== 'todo' &&
                    <button type="button" className="btn btn-link" onClick={() => move(task.id, -1)}>Left</button>
                }
                {
                    task.status !== 'done' &&
                    <button type="button" className="btn btn-link" onClick={() => move(task.id, 1)}>Right</button>
                }
            </div>
        </div>

    );
}

export default Card;
                //
                // {
                //     task.status !== 'todo' &
                //     <button type="button" className="btn btn-link" onClick={() => move(task.id, -1)}>Left</button>
                // }