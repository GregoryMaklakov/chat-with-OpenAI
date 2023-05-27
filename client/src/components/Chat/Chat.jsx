import {
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from '../CustomHeader/CustomHeader';
import StandardMessageForm from '../customMessageForm/StandardMessageForm/StandardMessageForm'
import "./Chat.scss"
import Ai from "../customMessageForm/Ai/Ai";

const projectIdGinger = "7ad349b8-945b-4ed8-be7e-89b0a90704dc"

// console.log("🚀 ~ file: Chat.jsx:13 ~ projectIdGinger:", projectIdGinger)

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

                if (chatProps.chat?.title.startsWith("AiChat_")) {
                    return (<Ai props={props} activeChat={chatProps.chat} />)
                }

                return (
                    <StandardMessageForm props={props} activeChat={chatProps.chat} />
                )
            }}
        />
    </div>;
};

export default Chat;
