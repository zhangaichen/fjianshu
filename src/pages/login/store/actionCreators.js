import * as constants from './constants'
import axios from 'axios'

const changeLogin = (result) =>({
    type:constants.CHANGE_LOGIN,
    value:result
});

export const logout = () =>({
    type:constants.LOGOUT,
    value:false
});

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password)
            .then((res) => {
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin(result))
                }else {
                    alert('登录失败')
                }
             })
            .catch((error) => {

            })
    }
};