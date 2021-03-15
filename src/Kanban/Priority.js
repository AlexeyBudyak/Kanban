import React from 'react';
import './styles.css';


function Priority(props) {
  const {data, setData, id, priority} = props;
  const ids = [1, 2, 3];

  function priorityHandler() {
    const newData = data.map(el=> el.id === id ?
                      {...el, priority: +document.getElementById(id).value} : el);
    setData([...newData]);
  }

  return (
    <span >

      <label htmlFor="Priority">Priority</label> {' '}
      <select  id={id} onChange={()=>priorityHandler()}>
        {ids.map(el =>
          el === priority ? <option value={el} selected key={id + el}>{el}</option>
            : <option value={el} key={id + el}>{el}</option>)}
      </select>
    </span>

  );
}

export default Priority;

    // <span className="form-group row">
    //
    //   <label htmlFor="Priority">Priority</label>
    //   <select className="form-control" id={id} onChange={()=>priorityHandler()}>
    //     {ids.map(el =>
    //       el === priority ? <option value={el} selected key={id + el}>{el}</option>
    //         : <option value={el} key={id + el}>{el}</option>)}
    //   </select>
    // </span>