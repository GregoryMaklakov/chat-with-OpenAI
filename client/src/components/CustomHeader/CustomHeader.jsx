import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "./CustomHeader.scss"

const CustomHeader = ({ chat }) => {
    console.log("chat:", chat.description);
    return (
        <div className="chat-header">
            <div className="flex-between">
                <ChatBubbleLeftRightIcon className="icon-chat" />
                <h3 className="header-text">{chat.title}</h3>
            </div>
            <div className="flex-between">
                <PhoneIcon className="icon-phone" />

                {chat.description === "Loading..." ? (
                    <p className="header-description">{chat.description}</p>
                ) : (
                    <p className="header-description">No chat</p>
                )}
            </div>
        </div>
    );
};

export default CustomHeader;
