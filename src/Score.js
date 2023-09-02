
function Score(props){
    let region = props.region;
    //there will only be a message when the user makes a choice
    //Changes each score to its appropriate message when choice is made
    //otherwise, show score
    
        if(props.message){
            return (
                <div className={"Score "+region}>
                    <h1>
                        {props.message}
                    </h1>
                </div>
            )
        }else{
            return (
                <div className={"Score "+region}>
                    <h1>
                        {props.name} wins: {props.score}
                    </h1>
                </div>
            );
        }
    
}

export default Score;