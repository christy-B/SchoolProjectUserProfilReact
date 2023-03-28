import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { ApiCall } from "../Controller/ApiCall";

export default function User() {
    let navigate = useNavigate();

    //selected value
    const [selectValue, setSelectValue] = useState("");
    //appel api, recuperation de donnée et mise a jours de posts
    const [users, setUsers] = useState([]);
    ApiCall('https://jsonplaceholder.typicode.com/users', setUsers);

    //on change select function
    const handleChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    const isEmpty = () => selectValue === "Selectionner un Utilisateur" || selectValue === "" ? true : false;
    const handleClick = () => {
        if (isEmpty()) {
            alert("Veuillez selectionner un utilisateur")
        } else {
            navigate("/profil", { state: { user: selectValue } })
        }
    }
    //selectionner un utilisateur pour visualiser son profil
    return (
        <form style={{width:"400px", margin:"auto", marginTop:"100px"}}>
            <label htmlFor="users">Utilisateur: </label>
            <select onChange={handleChange}>
                <option defaultValue >Selectionner un Utilisateur</option>
                {
                    users.map(user =>
                        <option key={user.id} value={user.id}>{user.name}</option>
                    )
                }
            </select>
            <input type="submit" value="Choisir" onClick={handleClick} style={{marginLeft:"10px"}} />
        </form>
    )
}