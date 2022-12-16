let messageArray = [];

async function getMessage() {
    try {
        const response = await axios({
            method: "get",
            url: "/api/message",
            data: {},
            headers: {},
        });
        renderListMessage(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function postMessage() {
    const messageSend = document.getElementById("message-send-js").value;
    const response = await axios({
        method: "post",
        url: "/api/message",
        data: {
            user_id: "1",
            message: messageSend,
        },
        headers: {},
    });
    renderMessage(response.data);
    // document.getElementById("message-chat-js").innerHTML+=
}
