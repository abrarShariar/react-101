var http = require('axios');

class HttpService{
    static getRepoByUsername(username){
        return http.get('https://api.github.com/users/' + username + '/repos');
    }
}

export default HttpService;


