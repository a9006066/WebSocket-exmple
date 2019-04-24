
$(() => {
    let content;
    let message = $("#message");
    let wsUrl = 'ws://echo.websocket.org';

    websocket = new WebSocket(wsUrl);

    websocket.onmessage = function (e) {
        showMessage(e);
    }

    websocket.onerror = function (e) {
        showError(e);
    }

    function showMessage(message) {
        $("#message").empty();//清空留言
        content += message + '<br>';//聊天內容
        let p = document.createElement("P");
        p.innerHTML = content;
        $("#message").append(p);
    }

    function showError(message) {
        showMessage(message);
    }

})