import React from "react";
const Event = () =>{
    const handleChange = () => {
     console.log("Changed");    
    
    }
    const handleClick = () => {
        alert("Submitted")
    }
    return (
        <div>
            <h1>Event</h1>
            <form>
                <input onChange={handleChange} type="text" name='username' />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}
export default Event