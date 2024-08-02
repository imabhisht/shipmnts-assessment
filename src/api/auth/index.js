import axios from 'axios';
import {auth} from "../../init/firebase";
import { signInWithCustomToken } from "firebase/auth";

const requestLoginOTP = async (event) => {
    console.log(event)
    return axios.post('/user/login', {
        email_id: event.email,
        stage: "request-otp"
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    })
}

const verifyLoginOTP = async (event) => {
    return axios.post('/user/login', {
        email_id: event.email,
        code: (event.otp).toString(),
        stage: "verify-otp"
    }).then(async(response) => {
        console.log(response)
        const auth_data = await signInWithCustomToken(auth, response.data.token);
        console.log('User logged in:', auth_data.user);
        return response.data;
    }).catch((error) => {
        return error;
    })

}


const loginUsingFirebaseToken = async (event) => {
    try {
        console.log("At Login", event)
        const auth_data = await signInWithCustomToken(auth, event.token);
        console.log('User logged in:', auth_data.user);
    }
    catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in:', error);
        throw error;
    }   
}

export default {
    requestLoginOTP: requestLoginOTP,
    verifyLoginOTP: verifyLoginOTP,
    loginUsingFirebaseToken,
}


