import { useState } from "react";
const Home = () => {
    const [name, setName] =  useState('Gbolahan');
    // doing for Age
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('Emmanuel');
        setAge(55)
    }

    return (  
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>CLick Me</button>
        </div>
    );
}
 
export default Home;