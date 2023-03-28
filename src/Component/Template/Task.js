 //afficher les taches en cours et celles terminées
 export default function Task(props){
    return(
        <div>
            <div>
                <h4 style={{textAlign:"center"}}>Les taches en cours</h4>
                {
                    props.todos.map(todo=>todo.userId === parseInt(props.location.state.user) && !todo.completed ?(
                        <p key={todo.id}>tache{todo.id}: {todo.title}</p>
                    ) : "")
                }
            </div>
            <hr></hr>
            <div>
                <h4 style={{textAlign:"center"}}>Les taches terminées:</h4>
                {
                    props.todos.map(todo=>todo.userId === parseInt(props.location.state.user) && todo.completed ?(
                        <p key={todo.id}>Tache{todo.id}: {todo.title}</p>
                    ) : "")
                }
            </div>
        </div>
    );
 }