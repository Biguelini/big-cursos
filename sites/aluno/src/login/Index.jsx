import PrimaryButton from '../components/buttons/PrimaryButton'
import './Login.css'
export default function Index() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="">
                <input type="text" />
                <input type="text" />
                <PrimaryButton text="Login"/>
            </form>
        </div>
    )
}



