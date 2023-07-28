import { useState } from "react";

function DataFromWeb(){

    let[records, setRecords]=useState([])                                   // Storing the data from the web in setRecords

    function getDataFromResponse(data){
        setRecords(data)
    }

function processResponse(response){
    let jsonPromise = response.json()                                  //converting the incoming data in json and sending it to get stored
    jsonPromise.then(getDataFromResponse)
}

let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')
responsePromise.then(processResponse)                                          // Storing data from web then sending it to get processed

return(
    <>
    <h1> DATA</h1>
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

export default DataFromWeb;