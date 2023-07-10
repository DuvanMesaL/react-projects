import FacebookLogo from '../assets/s1.svg'
import TwitterLogo from '../assets/s2.svg'
import InstagramLogo from '../assets/s3.svg'
export function Infologos(){
    const Facebook = FacebookLogo;
    const Twitter = TwitterLogo;
    const Instagram = InstagramLogo;
    return(
        <div className="social-logos">
            <a href="#"><img src={Facebook} alt="Facebook image"/></a>
            <a href="#"><img src={Twitter} alt="Twitter image"/></a>
            <a href="#"><img src={Instagram} alt="Instagram image"/></a>
        </div>
    )
}
