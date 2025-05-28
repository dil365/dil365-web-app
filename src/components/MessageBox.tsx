import type { MessageBoxPropsType } from "../types/messagebox.types";
import IconComponent from "./Icon";
import '../styles/components/MessageBox.css';

function MessageBox(props: MessageBoxPropsType){
    const getColorByMessageType = () => {
        switch (props.type) {
            case 'error':
                return 'red'
            case 'success':
                return 'green'
            case 'warning':
                return 'orange'    
            default:
                return 'black'
        }
    }


    return (
        <div className="mbx__container">
            <div className="mbx__header">
                <div className="mbx__icon-area">
                    <IconComponent 
                        fill={props.type !== "error"}
                        icon={props.type} 
                        color={getColorByMessageType()}
                        size="2.2rem"/>
                </div>
            </div>
            <div className="mbx__body">
                {props.label ? <h3>{props.label}</h3> : ''}
                {props.message ? <p className="mbx__main-content">{props.message}</p> : ''}
            </div>
        </div>
    )
}

export default MessageBox;