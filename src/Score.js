
function Score(props){
    let region = props.region;
    return (
        <div className={"Score "+region}>
            <h1>
                {props.name} wins: {props.score}
            </h1>
        </div>
    );
}

export default Score;