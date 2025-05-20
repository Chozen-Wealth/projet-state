import "./thankyou.css"
import thanksLogo from "../../../public/img/thankyou.svg"

export default function Thankyou(){
    return(
        <div className="thankyou">
            <img className="thanksLogo" src={thanksLogo} alt="" />
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have
                <br /> fun using our platform. If you ever need support, please
                <br /> feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}