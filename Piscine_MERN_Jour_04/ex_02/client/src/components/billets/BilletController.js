import axios from 'axios'

class BilletController {


    send(title,content,owner){
        console.log(title,content);
            
        return axios.post('http://localhost:5000/login',{
            owner,
            title,
            content

        }).then((res)=>{
            console.log(res);
            if (res.data === "Failed to save the collection") {
                return res.data
            }else{
                
                // localStorage.setItem('loginUser',JSON.stringify({
                //     token: res.data,
                //     userLogin : true
                // }))
                
                window.location.reload(false);
                return res.data
            }
        
        }).catch((err)=>{
            console.log(err);
            
        })
      
    }
}


export default BilletController