import React, { useEffect, useState } from 'react'



function Todos() {

    const [task, setTask] = useState([]);


    const handleAdd = () => {
        const input = document.getElementById("value").value
        var userinput = {
            id: Math.random(),
            input: input
        }

     setTask(task.concat(userinput))
       
    }


    const handleDelete = (id) => {
        const updatelist = task.filter((item)=>item.id !== id)
        setTask(updatelist)
        
    }

    const handleDone = (id) => {
            const list = document.getElementById(id);
            list.classList.toggle("done");
            
    }

    useEffect(()=>{
        handleAdd()
    },[])

  

    return (
        <div className='container' style={{ width: "500px" }}>
            <h1 className='my-3' style={{ textAlign: "center" }}>TODO LIST</h1>
            <hr />

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="add item..." id="value" onChange={(e) => (e.target.value)} />
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleAdd}>Add</button>
            </div>

            {task.map((list) =>(
            <div  className="list-item my-2" key={list.id}>
                <ul className="list-group" >
                        <li className="list-group-item list-group-item-info" id={list.id}>{list.input}
                        <i className="fa-solid fa-square-check" style={{ position: "absolute", right: "30px" ,cursor:"pointer"}} onClick={()=>handleDone(list.id)}></i>
                        <i className="fa-solid fa-trash" style={{ position: "absolute", right: "0px",cursor:"pointer" }} onClick={()=>handleDelete(list.id)}></i>
                        </li>
                    </ul>
                </div>
            )) }
        </div>
    )
}

export default Todos
