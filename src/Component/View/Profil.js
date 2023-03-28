import { useLocation } from "react-router-dom"
import { useState } from "react";
import { ApiCall } from "../Controller/ApiCall";
import { wordUseMore, sortObject } from "../Controller/Funtions";
import Task from "../Template/Task";
import Post from "../Template/Post";
import Word from "../Template/Word";
import Position from "../Template/position";

export default function Profil() {

    let location = useLocation();
    //recuperation des posts
    const [posts, setPosts] = useState([]);
    ApiCall('https://jsonplaceholder.typicode.com/posts', setPosts);

    //recuperation des commentaires
    const [comments, setComments] = useState([]);
    ApiCall('https://jsonplaceholder.typicode.com/comments', setComments);

    //recupereration des taches
    const [todos, setTodos] = useState([]);
    ApiCall('https://jsonplaceholder.typicode.com/todos', setTodos);

    //recupereration des utilisateurs et position
    const [users, setUsers] = useState([]);
    ApiCall('https://jsonplaceholder.typicode.com/users', setUsers);


    //total commentaires
    const totalComment = comments.reduce((acc, comment) => acc + 1, 0);

    //tous les mots de l'ensemble des posts
    const setWord = posts.map(post => (post.userId === parseInt(location.state.user) ? post.title : '')).join("");
    const word = setWord.split(' ');
    
    //recuperer le nom du user
    const userName = users.map(user => user.id === parseInt(location.state.user) ? user.name : "" )

    //nombre d'occurence par mot
    const obj = word.reduce(function (occur, i) {
        return occur[i] ? ++occur[i] : occur[i] = 1, occur
    }, {});

    //
    const sortedObject = sortObject(obj);

    //transformer objet en tableau
    const tabobj = Object.entries(sortedObject)

    //mot les plus utilisés
    const words = wordUseMore(tabobj);

    //rendu profil de l'utilisateurs
    return (
        <div >
            <h1 style={{textAlign:"center"}}>{userName}</h1>
            <hr></hr>
            <Post posts={posts} location={location} comments={comments} totalComment={totalComment} />
            <Word words={words} />
            <hr></hr>
            <Task todos={todos} location={location} />
            <hr></hr>
            <Position users={users} location={location}/>
        </div>

    )
}