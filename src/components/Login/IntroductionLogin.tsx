import { LOGIN_DESCRIPTION, LOGIN_SUBTITLE } from "../../constants/constans"

export const IntroductionLogin = () => {
    return (
        <article className="content">
            <h2>{LOGIN_SUBTITLE}</h2>
            <p>{LOGIN_DESCRIPTION}</p>
            <button className="button-try">Pruébalo gratis</button>
        </article>
    )
}