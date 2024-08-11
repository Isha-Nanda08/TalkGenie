import './signUp.css'
import { SignUp } from "@clerk/clerk-react"
const SignUpPage = () => {
  return (<div className="signUpPage"><SignUp path="/signup" signInurl="/signin"/></div>
  )
}

export default SignUpPage