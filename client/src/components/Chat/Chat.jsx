import {
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from '../CustomHeader/CustomHeader';
import StandardMessageForm from '../customMessageForm/StandardMessageForm/StandardMessageForm'
import "./Chat.scss"

// const projectId = import.meta.env.VITE_PROJECT_ID;
const projectIdGinger = "7ad349b8-945b-4ed8-be7e-89b0a90704dc";


const Chat = () => {
    const chatProps = useMultiChatLogic(
        projectIdGinger,
        "John",
        "123"
    )
    return <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
            style={{ height: "100vh" }}
            {...chatProps}
            renderChatHeader={(chat) => <CustomHeader chat={chat} />}
            renderMessageForm={(props) => {
                return (
                    <StandardMessageForm props={props} activeChat={chatProps.chat} />
                )
            }}
        />
    </div>;
};

export default Chat;
