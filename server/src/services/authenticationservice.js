import Api from '@services/Api';

export default {
    register (credentials) {
        return Api().post('register', credentials);
    }
}

//AuthenticationService.register({
 //   email: 'aplater@myfizz.biz',
 //   password: '123456'
//});