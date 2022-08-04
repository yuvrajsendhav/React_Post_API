import React, { useState } from 'react';

const CreateAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    function SaveUser()
    {
    let data={name,email,mob};
       fetch("http://localhost:4000/User",{
         method:"POST",
         headers:{
            Accept:"application/json",
            "Content-type":"application/json",
         },
         body:JSON.stringify(data),
       }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
        });
       });
    }               
    return (
        <div>
            
                Name:-<input type="text" onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                Email:-<input type="text" onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
                Mobile:-<input type="text" onChange={(e)=>{setMob(e.target.value)}}/><br/><br/>
                <input type="button" value="Submit" onClick={SaveUser}/>
        </div>
    );
};

export default CreateAPI;