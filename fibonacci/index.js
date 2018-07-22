module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        var places = req.query['places'];
        var chain = fibonacci(places);
        context.res = {
            status: 400,
            body: chain
        };
    }
    context.done();
};

function fibonacci(choise){ 
    
    if (choise<=2){
        result ="The sequence number must be higher than 2 numbers";
    }
    else{
        var n;
        var sequence_array = [];
        var result;
        sequence_array[0]=0;
        sequence_array[1]=1;
        result = "The Fibonacci's sequence for "+ choise + " numbers is = 0,1";
        for (n = 2; n < choise; n++) { 
            sequence_array[n]= (sequence_array[n-1] + sequence_array[n-2]);
            result=result + ","+sequence_array[n];
        }
    }
       return result;
}    