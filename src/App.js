import React, {useState} from 'react';
import initialData from "./initialData/initialData";
import Title from "./Title/Title";
import Kanban from "./Kanban/Kanban";
// import {v4 as uuidv4} from 'uuid';
// import faker from 'faker';


function App() {
    const [viewStyle, setViewStyle] = useState(12);
    const [data, setData] = useState(initialData(10));

    return (<div>
        <Title list={viewStyle} setList={setViewStyle}/>
        <Kanban data={data} list={viewStyle} setData={setData}/>
    </div>);
}

export default App;

// <Title list={viewStyle} setList={setViewStyle}/>
// <Kanban data={data} list={viewStyle}/>