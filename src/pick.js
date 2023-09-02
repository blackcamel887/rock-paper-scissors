import rock from './images/rock.png';
import scissors from './images/scissors.png';
import paper from './images/paper.png';
function Pick(props){
    let type = props.type;
    if(type==='scissors'){
        return <img src={scissors} alt='scissors'></img>
    }
    else if(type==='rock'){
        return <img src={rock} alt='rock'></img>
    }
    else if(type==='paper'){
        return <img src={paper} alt='paper'></img>
    }
}
export default Pick;