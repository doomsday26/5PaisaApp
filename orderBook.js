function orderBook(request,res,data){

    data.head.requestCode = "5POrdBkV2";
    data.body={"ClientCode": "55155874"};

    request.post({
        headers: {'Content-Type': 'application/json'},
        url: "https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V2/OrderBook",
        body: JSON.stringify(data)
    }, (error, response, body) => {
        res.send(JSON.parse(body));
    });
}
module.exports = orderBook;