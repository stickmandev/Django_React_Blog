import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
    const [currentName, setCurrentrName] = useState('Ananymos');

    useEffect(
        () => {
            alert('you have added a new name ' + currentName)
        },
        [currentName]
    );

    useEffect(
        () => {

            return () => {
                alert('goodbye')
            }
        },
        []
    );

    return (   
        <div>
            <h3>welcome home</h3> 
            <Inputs setOldName = {(e) => setCurrentrName(e)} />
            
            <br />
            <br />
    
            <span> the name entered: {currentName} </span>

            <br />
            <Link to='/about'>Go to Test</Link>
        </div>
    );
    
};

const Inputs = (props) => {
    const [oldName, setOldName] = useState('');

    return (
        <div>
            <label>
                <p>Enter your user name</p>
                <input value={oldName} onChange={(e) => setOldName(e.target.value)} />
            </label>

            <button onClick={(_) => props.setOldName(oldName)}>
                set value
            </button>
        </div>
    );
    
};

export default Home;