import { useState } from "react";

function DataFromWeb2(){

    let[records, setRecords]=useState([])                                   // Storing the data from the web in setRecords

    function getDataFromResponse(data){
        setRecords(data)
    }

function processResponse(response){
    let jsonPromise = response.json()                                  //converting the incoming data in json and sending it to get stored
    jsonPromise.then(getDataFromResponse)
}

function clickingButton(){

    let pid = document.getElementById("t1").value
    let url = "https://jsonplaceholder.typicode.com/posts/"+pid+"/comments"

    let responsePromise = fetch(url)
    responsePromise.then(processResponse)           
}

                               // Storing data from web then sending it to get processed

return(
    <>

    <h1> DATA</h1>
    <input type="text" id="t1"></input>
    <input type="Button" id="btn1" onClick={clickingButton}></input>
    <table>
        {
            records.map((rec) =>
            <tr>
                <td>{rec.name}</td>
                <td>{rec.email}</td>
                <td>{rec.body}</td>

            </tr>
            )
        }
    </table>
    </>
)
}

export default DataFromWeb2;