

$(function () {
    let content = "";

    let wsUrl = 'ws://echo.websocket.org';

    let outPut = $("#output");

    let input = $("#input");

    let btn = $("#btn");

    let claenBtn = $("#claenBtn");

    init()

    function init() {
        webSocket = new WebSocket(wsUrl);
        btn.on('click', () => {
            webSocket.send(input.val());
        })

        claenBtn.on('click', () => {
            outPut.empty();
        })
    }

    webSocket.onopen = function (evt) {
        console.log("已建立連線!");
    }

    webSocket.onmessage = function (evt) {
        outPut.empty();
        content += "<p>發言:" + evt.data + "</p>";
        outPut.append(content)
    }












});

