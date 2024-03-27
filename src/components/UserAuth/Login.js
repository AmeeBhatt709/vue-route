

import axios from 'axios';

export const login = (authorizationCode) => {
   const url= "http://localhost:8085/oauth2/token?grant_type=authorization_code&client_id=R2dpxQ3vPrtfgF72&redirect_uri=http://localhost:8081/oauth2&code="+authorizationCode+"&code_verifier=qZUxvlPxmHJlY2ylHN9bORFJbrgI5FdHugG_OExL0T7LFwIIojstPQ1ZHuNFxRH9PvS3skKaGgplppCAhBhunoA0M1L73Q3mcRyQQncKBY3nfQ45hpDYhC8y6ndFkIj6";
    console.log(url);
    console.log(authorizationCode);
    console.log("hello");
    return  axios.post(url)
        .then(response=>
            {
                console.log("DHFGD",response)
                localStorage.setItem("access_token",response.data.access_token);
            }
        ).catch(
            error=>
            {
                console.log(error);
            }
    );

};

