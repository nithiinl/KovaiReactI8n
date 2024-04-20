
import { useTranslation } from "react-i18next"
import './style1.css'

export function Translation(){
    const languages = [
        {
            code: "en",
            lang: "English"
        },
        {
            code: "fr",
            lang: "French"
        },
    ]

    const{i18n}= useTranslation();

    function changeLanguage(lng){
        i18n.changeLanguage(lng);
    }
    return(
        <div className=" btn-container">
            <span className=" bi bi-globe"> </span>
            {
                languages.map((lng)=>{
                return <button key={lng.code} onClick={()=>changeLanguage(lng.code)} style={{marginRight:'10px', marginTop:"15px"}} className={lng.code===i18n.language?"selected":""}>{lng.lang}</button>})
            }


        </div>
    )
}