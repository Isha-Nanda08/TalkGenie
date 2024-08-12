import './signInpage.css'
import { SignIn } from "@clerk/clerk-react"

export default function SignInpage() {
  return (
  <div className="signInPage"><SignIn path="/signin" signUpUrl="/signup" forceRedirectUrl="/dashboard"/></div>
  
);
}