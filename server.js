let express = require('express');
let app = express();
let port = process.env.port || 3000;



app.use(express.static(__dirname + '/'));
app.get('/', (req, res) =>{
    res.render('index.html');
})

// app.get('/addTwoNumbers', (req, res)=>{
//     //grab values from url parameter
//     //number1=1&number2=2
//     let num1 = req.query.number1;
//     let num2 = req.query.number2;

//     let sum = parseInt(num1) + parseInt(num2);

//     //construct response include statuscode, message and data
//     let obj = {statusCode:200, message: 'Successful execution.', data:sum}
//     res.json(obj);
// })
// //multiplying numbers
// app.get('/multiplyTwoNumbers', (req, res)=> {
//     let num1 = 2; //let this be 2
//     let num2 = 5; // let this be 5

//     let result = num1 * num2;
//     let obj = {statusCode: 200, message: `Multiplied ${num1} and ${num2}`, data: result};
//     res.json(obj);
// })

app.listen(port, ()=>{
    console.log('App listening to: ' + port);
}
); //will fire upon server start
