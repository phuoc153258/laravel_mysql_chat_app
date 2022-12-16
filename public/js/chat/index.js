const messages = document.getElementById("message-chat-js");

function renderListMessage(data) {
    let str = "";
    for (const x of data) {
        str += `<li class="chat-right">
                <div class="chat-hour">08:56 <span class="fa fa-check-circle"></span>
                </div><div class="chat-text">${x.message}
                </div><div class="chat-avatar">
                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                alt="Retail Admin"><div class="chat-name">${x.user_id}</div></div></li>`;
    }
    messages.innerHTML = str;
    scrollBottomChat();

    //     <li class="chat-left">
    // <div class="chat-avatar">
    //     <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
    //         alt="Retail Admin">
    //     <div class="chat-name">Russell</div>
    // </div>
    // <div class="chat-text">Are we meeting today?
    //     <br>Project has been already finished and I have results to show you.
    // </div>
    // <div class="chat-hour">08:57 <span class="fa fa-check-circle"></span>
    // </div>
    // </li>
}

function renderMessage(data) {
    let str = `<li class="chat-right">
    <div class="chat-hour">08:56 <span class="fa fa-check-circle"></span>
    </div><div class="chat-text">${data.message}
    </div><div class="chat-avatar">
    <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
    alt="Retail Admin"><div class="chat-name">${data.user_id}</div></div></li>`;

    messages.innerHTML += str;
    scrollBottomChat();
}

function scrollBottomChat() {
    messages.scrollTop = messages.scrollHeight;
}
