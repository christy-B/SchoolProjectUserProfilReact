import { useRef } from "react";
//les posts et les commentatires
export default function Post(props){
    const divRef = useRef(null);
    const handleClick = () => {
      const text = divRef.current.textContent;
      console.log(text);
    }
    return(
        <div>
        {
            props.posts.map(post=>post.userId === parseInt(props.location.state.user) ?(
                <div key={post.id}>
                    <p >Post: <span style={{background:"#c5f1f8", padding:"0px 5px"}}>{post.title}</span></p>
                    <p>Nombre de commentaires: 
                        <span style={{marginLeft:"4px", background:"#F7BF10", padding:"0px 5px"}}> 
                            {
                                props.comments.reduce((acc, comment)=> comment.postId === post.id ? acc + 1 : acc, 0)
                            }
                        </span>
                    </p>
                    <p>Moyenne de commentaires: 
                        <span style={{marginLeft:"4px", background:"#EC3F1A", padding:"0px 5px"}}> 
                            {
                                props.comments.reduce((acc, comment)=> comment.postId === post.id ? acc + 1 : acc, 0)/props.totalComment
                            }
                        </span>
                    </p>
                    <hr></hr>
                </div>
    
            ) : "")
        }
    </div>
    );
 }