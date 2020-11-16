
import AppConstant from '../utils/AppConstants';



//Sample API call..
export const getApiDetails = () => {

    return fetch(URL, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ apidata: JSON.stringify(responseJson) })
        })

        //If response is not in json then in error
        .catch((error) => {
            Toast.show(JSON.stringify(error), Toast.LONG);
        });


}


export const getUserInfo = (email, tpassword) => {
    // let username = name.toLowerCase().trim();
    // const URL = AppConstant.LOGIN_API;

    return fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password: tpassword,
            mobileNo: email
        }),

    })
        .then((res) => res.json());
}




