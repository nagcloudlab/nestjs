


//--------------------------------------
// Promises
//--------------------------------------

// A Promise is a JavaScript object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.


//--------------------------------------
// Module-1 : Trainer modules
//--------------------------------------


const trainer={
    askQuestion:function(question){
        const promise=new Promise((resolve,reject)=>{
            //... simulate an asynchronous operation using setTimeout
            setTimeout(()=>{
                console.log(`Trainer is thinking about the question: ${question}`);
                // Simulate a successful answer
                // const answer=`This is the answer to "${question}"`;
                // resolve(answer);
                // To simulate an error, you can uncomment the following line:
                reject("Unable to answer the question at this time.");
            },2000);
        });
        return promise;
    }
}


//--------------------------------------
// Module-2 : Student modules
//--------------------------------------

const student={
    learn:function(topic){
        console.log(`Student has started learning ${topic}`);
        const promise=trainer.askQuestion(`What is ${topic}?`)
        promise.then(result=>{
            console.log(`Student received answer: ${result}`);
        })
        .catch(error=>{
            console.log(`Student encountered an error: ${error}`);
        });
        // student continues other work while waiting for the answer
        console.log("Student is doing other work while waiting for the answer...");
    }
}

//--------------------------------------
// Main Program
//--------------------------------------

student.learn("JavaScript Promises");


//-----------------------------------------


// api-server = https://jsonplaceholder.typicode.com/todos?_limit=5

// Non Blocking..
const promise=fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // HTTP GET request`
.then(response=>response.json()) // Parse the JSON from the response
.then(todos=>{
    console.log("Fetched Todos:",todos);
})
.catch(error=>{
    console.log("Error fetching todos:",error);
});
console.log("This log appears before the fetch completes, demonstrating non-blocking behavior.");