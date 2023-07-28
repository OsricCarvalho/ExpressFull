import { useState } from "react";

function Comment(){

    let[records, setRecords]=useState([])                                   // Storing the data from the web in setRecords

    function getDataFromResponse(data){
        setRecords(data)
    }

    function processResponse(response){
        let jsonPromise = response.json()                                  //converting the incoming data in json and sending it to get stored
        jsonPromise.then(getDataFromResponse)
    }
    
    let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')
    responsePromise.then(processResponse) 


    function clickingButton(){

        alert("button clicked")        
    }
    
    
    
                               // Storing data from web then sending it to get processed

return(
    <>

    <h1> DATA</h1>
    {/* <input type="text" id="t1"></input> */}
    {/* <input type="Button" id="btn1" onClick={clickingButton}></input> */}
    <table>
        {
            records.map((rec) =>
            <tr>
                <td>Name:{rec.name}</td>
                <td><input type="Button" id="btn1" onClick={clickingButton} ></input></td>
                {/* <td>{rec.email}</td>
                <td>{rec.body}</td> */}

            </tr>
            )
        }
    </table>
    </>
)
}

export default Comment;