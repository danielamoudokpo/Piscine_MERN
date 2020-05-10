import decode from 'jwt-decode';
import axios from 'axios'


class AuthService {

    login(email, password) {
        
            console.log("good");
            
            return axios.post('http://localhost:5000/user/login',{
                
                email,
                password

            }).then((res)=>{
                console.log(res);
                if (res.data === "wrong email or password") {
                    return res.data
                }else{
                    
                    localStorage.setItem('loginUser',JSON.stringify({
                        token: res.data,
                        userLogin : true
                    }))
                    
                    window.location.reload(false);
                    return res.data
                }
            
            }).catch((err)=>{
                console.log(err);
                
            })
          
        // Get a token from api server using the fetch api
    }    


    loggedIn() {
        // Checks if there is a saved token and it's still valid

        const token = localStorage.getItem('loginUser')

        if (token) {
            // console.log("oui");   
            return "oui"    
        }else{
            // console.log("non");
            return "non" 
        }

        // const token = localStorage.getItem('loginUser') // GEtting token from localstorage

        // console.log(token);

        // handwaiving here

        // return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('loginUser', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('loginUser')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('loginUser');
        window.location.reload(false);

    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


}

export default AuthService ;