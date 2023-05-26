import {
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from '../CustomHeader/CustomHeader';
import StandardMessageForm from '../customMessageForm/StandardMessageForm/StandardMessageForm'
import "./Chat.scss"

const projectId = import.meta.env.VITE_PROJECT_ID;

const Chat = () => {
    const chatProps = useMultiChatLogic(
        projectId,
        "test-user",
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
