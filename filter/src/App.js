import React, { useState, Component  } from "react";
import './App.css';
import Data from "./Data";
import Button from "./Button"
 



const inscription = (event) =>
{
  event.inscrit = "oui";
}

function ListEvents({events})
{
    return(
        <div className="container">
            <h3 className="Text-center">Event list</h3>
            <table className="table table-stripped table-bordered">
                <thread>
                    <tr>
                        <th>title</th>
                        <th>location</th>
                        <th>inscrit</th>
                        
                    </tr>
                </thread>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.category}</td>
                            <td>{event.inscrit}</td>
                        </tr>)}

                </tbody>
            </table>
        </div>

    );
}

const App = () => {

  
  const handleclick = (event) => {
    event.inscrit = "oui";
  }
  const Items = [...new Set(Data.map((Val) => Val.category))];
  const [item, setItem] = useState(Data);
  return (
    <>
      <Button
      setItem = {setItem}
      Items = {Items}
      />  
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Évenement</h1>
          <ListEvents events={item} />
        </div>
      </div>
    </>
  );
};
 
export default App;
