
function setup() {

    let content = "";

    let wsUrl = 'wss://echo.websocket.org';

    let outPut = $("#output");

    let input = $("#input");

    let btn = $("#btn");

    let connetionBtn = $("#conntionBtn");

    let closeBtn = $("#closeBtn")

    let claenBtn = $("#claenBtn");

    let status = $("#status");

    //連線
    connetionBtn.on('click', () => {

        console.log("CONNECT:" + wsUrl);

        webSocket = new WebSocket(wsUrl);

        webSocket.onopen = function (evt) {
            status.text("已建立連線!");
            // console.log("已建立連線!");
        }

        webSocket.onclose = function (evt) {
            status.text("連線結束!");
            // console.log("連線結束!")
        }

        webSocket.onerror = function (evt) {
            console.error("evt")
        };

        webSocket.onmessage = function (evt) {
            outPut.empty();
            content += "<p>發言:" + evt.data + "</p>";
            outPut.append(content)
        }
    })

    //發送
    btn.on('click', () => {
        webSocket.send(input.val());
    })

    //清除
    claenBtn.on('click', () => {
        content = "";
        outPut.empty();
    })

    closeBtn.on('click',()=>{
        webSocket.close();
    })


}

$(()=>{
    setup()
});




















