function orderBook(request,res,data){

    data.head.requestCode = "5POrdBkV2";
    data.body={"ClientCode": "55155874"};

    request.post({
        headers: {'Content-Type': 'application/json'},
        url: "https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V2/OrderBook",
        body: JSON.stringify(data)
    }, (error, response, body) => {
        transactionHistory = filterData(JSON.parse(body));
        res.send(transactionHistory);
    });
}

var fs = require('fs');
fs.readFile('sample.json',function(err, data) { 
        var sampleData = JSON.parse(data);
        console.log(filterData(sampleData));
});

function filterData(orders){
    orders = orders.body.OrderBookDetail;
    transactionHistory = [];
    for(var i=0; i<orders.length; i++){
        if(orders[i].OrderStatus == 'Fully Executed') transactionHistory.push(orders[i]);
    }
    return transactionHistory;
}

module.exports = orderBook;