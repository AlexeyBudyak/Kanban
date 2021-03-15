import faker from "faker";
import {v4 as uuidv4} from "uuid";

const capitalForm = text => text[0].toUpperCase() + text.slice(1);

const randomTodo = () => capitalForm(faker.hacker.verb()) + ' '
    + faker.hacker.adjective() + ' '
    + faker.hacker.noun();

const addTodo = () => {
    const stats = ['todo', 'progress', 'review', 'done'];
    const newItem = {
        id: uuidv4(),
        title: randomTodo(),
        priority: 1 + ~~(Math.random()*3),
        status: stats[~~(Math.random()*4)]
    };
    return newItem;
}

const initialData = n => {
    const objData = [];
    for(let i = 0; i < n; i++)
        objData.push(addTodo());
    return objData;
}
export default initialData;