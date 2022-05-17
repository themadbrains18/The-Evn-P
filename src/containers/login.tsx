import { useState } from "react"
import Login from "../components/loginForm/login"
import LoginWithToken from "../components/loginForm/loginWithToken"
import ForgetPassword from "../components/loginForm/forgetPassword"
import RecoverPassword from "../components/loginForm/recoverPassword"
import Loder from "../components/loginForm/loder"


const LoginForm = () => {

    // Submit State
    const [submitForm, SetsubmitForm] = useState(false);
    const submitFormFunc = (e: any) => {
        e.preventDefault();
        SetsubmitForm(!submitForm)
    }

    // Forgat Password State
    const [forgetPswrd, SetforgetPswrd] = useState(false);
    const fogetBtn = () => {
        SetforgetPswrd(!forgetPswrd)
    }

    // Back Login State
    const backLoginBtn = () => {
        SetforgetPswrd(!forgetPswrd)
    }
    // Update Password
    const [UpdatePswrd, SetUpdatePswrd] = useState(false);
    const UpdatePswd = () => {
        SetUpdatePswrd(!UpdatePswrd)
    }

    // Loder State
    const [RecoverPswrd, SetRecoverPswrd] = useState(false);
    const recoversubmitFormFunc = (e: any) => {
        e.preventDefault();
        SetRecoverPswrd(!RecoverPswrd);
    }

    return (
        <>
            {/* Login Account */}
            {!forgetPswrd && !submitForm && (
                <Login onSubmit={submitFormFunc} onClickfogetBtn={fogetBtn} />
            )}
            {/* Login Account With Token */}
            {submitForm && <LoginWithToken />}
            {/* Forget Password */}
            {!UpdatePswrd && forgetPswrd && (
                <ForgetPassword OnSubmitUpdatePwsd={UpdatePswd} backLogin={backLoginBtn} />
            )}
            {/* Recover Password */}
            {UpdatePswrd && !RecoverPswrd && (
                <RecoverPassword onSubmit={submitFormFunc} recoveronSubmit={recoversubmitFormFunc} />
            )}
            {/* Loader */}
            {RecoverPswrd && <Loder />}
        </>
    )
}
export default LoginForm;