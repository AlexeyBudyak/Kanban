
import React from 'react';
import IconCardList from "./IconCardList";
import IconColumns from "./IconColumns";

function Title(props) {
    const {list, setList} = props;
    const checkedlist = list ? 'active' : '';
    const checkedBlocks = list ? '' : 'active';
    return (
        <div>
            <div className="App">
                <div className="alert alert-primary " role="alert">
                    <h3>Kanban v 1.0 <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={"btn btn-outline-primary " + checkedlist}>
                            <input type="radio" name="options" id="option1" onClick={()=>setList(true)}/>

                            List <IconCardList/>
                        </label>
                        <label className={"btn btn-outline-primary " + checkedBlocks}>
                            <input type="radio" name="options" id="option2" onClick={()=>setList(false)}/>

                            Blocks <IconColumns/>
                        </label>
                    </div>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Title;