class UserStorage{
    loginUser(id, password){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                if(
                    (id==="ellie" && password === "dream") ||
                    (id === "coder" && password === "academy")
                ){
                    res(id);
                }else{
                    rej(new Error("not found"));
                }
            }, 2000);
        });
    }

    getRoles(user){
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                if(user==="ellie"){
                    res({name : "ellie", role : "admin"});
                } else{
                    rej(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
    .catch(console.log);