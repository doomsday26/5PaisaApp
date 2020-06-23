function login(request,res,data){

  data.head.requestCode = "5PLoginV2";
  data.body = {
    "Email_id": "7ntChiybFM1KOXFNnSirrbtwtnnMJNepgKQQPl7VxXQ=",
    "Password": "ayU9r8oa2keFJOXiLZ7txg==",
    "LocalIP": "192.168.29.254",
    "PublicIP": "192.168.29.254",
    "HDSerailNumber": "ST1000LM035-1RK172_ZDE9FTTG",
    "MACAddress": "54:bf:64:18:a5:95",
    "MachineID": "/6HSGFP2/CNCMC0085S001B/",
    "VersionNo": "1.7",
    "RequestNo": "1",
    "My2PIN": "ls/KaZiYlDe1biLkNTLJqA==",
    "ConnectionType": "1"
  }

  request.post({
      headers: {'Content-Type': 'application/json'},
      url: "https://Openapi.5paisa.com/VendorsAPI/Service1.svc/V2/LoginRequestMobileNewbyEmail",
      body: JSON.stringify(data)
  }, (error, response, body) => {
    res.send(JSON.parse(body));
  });
}
module.exports = login;