import "./AuthForm.css"

interface PropsAuthForm {
    text: string,
}

export default function AuthForm(props: PropsAuthForm) {
    return(
        <div className="conteinerAuthForm">
            <div className="nameAuthForm">{props.text}</div>
            <form className="AuthForm">
                <div className="boxAuthForm">
                    <label htmlFor="login" className="labelAuthForm">Логин</label>
                    <input className="inputAuthForm" id="login"></input>
                </div>
                <div className="boxAuthForm">
                    <label htmlFor="password" className="labelAuthForm">Пароль</label>
                    <input className="inputAuthForm" id="password"></input>
                </div>
                <button className="buttonAuthForm">{props.text}</button>
            </form>
        </div>
    )
}