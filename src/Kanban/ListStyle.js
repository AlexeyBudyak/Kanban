import React from 'react';
import Priority from "./Priority";
import Status from "./Status";


function ListStyle(props) {
    const {data, setData} = props;
    return (
        <ul className="list-group">
            {data.map(el =>
                <li className="list-group-item" key={el.id}>
                    <h5>{el.title}</h5>

                    <p>
                        <Status data={data} setData={setData} id={el.id} status={el.status} /> {' '}
                        <Priority data={data} setData={setData} id={el.id} priority={el.priority} />
                    </p>
                </li>
            )}
        </ul>
    );
}

export default ListStyle;