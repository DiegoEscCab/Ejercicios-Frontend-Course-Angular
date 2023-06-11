function greeting(){
    let username = 'Diego';

    function displayUserName(){
        return(`Hello ${username}`);
    }
    return displayUserName;
}

const g = greeting();
console.log(g);         // [Function: displayUserName]
console.log(g());       // Hello Diego