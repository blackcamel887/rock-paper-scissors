import Pick from "./pick.js";

function Choices(props){
    if(props.state === 'default'){//the default state will show all 3 choices for both user and bot
        return <div className="choices">
            <Pick type='scissors'>

            </Pick>
            <Pick type='rock'>

            </Pick>
            <Pick type='paper'>

            </Pick>
        </div>
    }
    else if(props.state === 'winner'){//the winner state will show the choices that each user chose
        return <div className="choices">

        </div>
    }
    
}
export default Choices;