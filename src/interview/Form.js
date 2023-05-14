import React,{useEffect, useState} from 'react';
import axios from 'axios';
function Form(){
    let[userInfo,setuserInfo]=useState({
        name:"",
        age:""
    });

    let[users,setUsers]=useState([]);
    const getData=()=>{
        axios.get('https://644e4fdf1b4567f4d5848492.mockapi.io/users').then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            console.log("error:",error);
        })
    }
    useEffect(()=>{
        getData()
    },[])
    const postData=()=>{
        axios.post('https://644e4fdf1b4567f4d5848492.mockapi.io/users',{
            name:userInfo?.name,
            age:userInfo?.age
        });
        getData();
    }

    let handleOnChange=(event)=>{
        setuserInfo({...userInfo,[event.target.name]:event.target.value});
    }
    const handleUpdate=(id)=>{
        axios.put(`https://644e4fdf1b4567f4d5848492.mockapi.io/users/${id}`,{
            name:"name is changed", age:"age is changed"
        })
        getData();
    }
    const handleDelete=(id)=>{
        axios.delete(`https://644e4fdf1b4567f4d5848492.mockapi.io/users/${id}`);
        getData();
    }
 return(<>
 <input type="text" placeholder="enter your name" name="name" onChange={handleOnChange}/>
 <input type="number" placeholder="enter your age" name="age" onChange={handleOnChange}/>
 <button onClick={postData}>Add</button>
 <div>
 {
    users.map((person)=>{
        return(<>
            <b>{`${person.id}.name:${person.name} age:${person.age}`}</b> 
            <span><button onClick={()=>handleUpdate(person.id)}>update</button></span>
            <span><button onClick={()=>handleDelete(person.id)}>delete</button></span>
            </>)
    })
 }</div>
 </> )  
}

export default Form;
