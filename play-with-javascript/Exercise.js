

function hello(){
    console.log("Hello..");
    console.log("😀")
}

hello();

function hi(){
    console.log("Hi..");
    console.log("😀")
}

hi();

// 2 issues
// code tight-coupling ( greeting logic & emoji logic are tightly coupled )
// code duplication ( same emoji logic is duplicated in both functions )

// fix these 2 issues 