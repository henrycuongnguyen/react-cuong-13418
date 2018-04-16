import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApiFood(endpoint, method='GET', body){
    return axios({
                method: method,
                url: `${Config.API_URL_FOOD}/${endpoint}`,
                data: body //gia tri du lieu
            }).catch(err => {
                console.log(err);
            })
}