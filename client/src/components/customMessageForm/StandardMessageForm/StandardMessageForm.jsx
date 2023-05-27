
import "./StandardMessageForm.scss";
import { useState } from "react";
import MessageFormUI from "../MessageFormUI/MessageFormUI";

const StandardMessageForm = ({ props, activeChat }) => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");

    const handleChange = (e) => setMessage(e.target.value);

    const handleSubmit = async () => {
        const userTimezoneOffset = new Date().getTimezoneOffset() * 60000; // Получаем смещение времени пользователя в миллисекундах
        const userDate = new Date(Date.now() - userTimezoneOffset); // Создаем новый объект Date с учетом смещения времени пользователя

        const date = userDate
            .toISOString()
            .replace("T", " ")
            .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
        const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
        const form = {
            attachments: at,
            created: date,
            sender_username: props.username,
            text: message,
            activeChatId: activeChat.id,
        };

        props.onSubmit(form);
        setMessage("");
        setAttachment("");
    };

    return (
        <MessageFormUI
            setAttachment={setAttachment}
            message={message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default StandardMessageForm;
