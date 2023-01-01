
const BASE_URL = "https://mood-up-server.onrender.com"


export const signIn = async(user)=>{
    // console.log(JSON.stringify(user));
    // console.log(user.email);
    try{
        const result = await fetch(`${BASE_URL}/api/users/signIn`,{
            method:"post",
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body:JSON.stringify({data:{email:user.email,password:user.password}})
        })
        .then(res=>res.json())
        return result
        // .then(res=>console.log(res))
    }
        catch(err){`Error is :${err}`};

}
