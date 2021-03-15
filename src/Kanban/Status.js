import React from "react";

const capitalForm = text => text[0].toUpperCase() + text.slice(1);

function Status(props) {
  const {data, setData, id, status} = props;
  const stats = ['todo', 'progress', 'review', 'done'];

  function statusHandler() {
    const newData = data.map(el=> el.id === id ?
                      {...el, status: document.getElementById(id).value} : el);
    setData([...newData]);
  }

  return (
    <span >

      <label htmlFor="Status">Status</label> {' '}
      <select  id={id} onChange={()=>statusHandler()}>
        {stats.map(el =>
          el === status ? <option value={el} selected key={id + el}>{capitalForm(el)}</option>
            : <option value={el} key={id + el}>{capitalForm(el)}</option>)}
      </select>
    </span>

  );
}

export default Status;