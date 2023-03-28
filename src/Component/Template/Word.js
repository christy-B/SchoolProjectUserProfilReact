//les 10 mots les plus utilisés
export default function Word(props){
    return(
        <div>
            <h4 style={{textAlign:"center"}}>Les 10 mots les plus utilisés</h4>
            <p>
                {
                   props.words.map((words, key) => <span key={key} style={{marginRight: '30px'}}>{words}</span> )
                } 
            </p>
        </div>
    );
 }