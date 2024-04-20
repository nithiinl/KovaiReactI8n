import './styles.css';
import { useTranslation } from 'react-i18next';
export function Body(){
    const {t}=useTranslation();
    return(

        // Body section started

        <div>
             <div className='text'>
                <span className='t1'>{t("body.maintext1")}</span> <br />
                <span className='t2'>{t("body.maintext2")}</span> <br />
                <span className='t3'>{t("body.maintext3")}</span> <br />
            </div>
            <div className='stext'>
                <span className='stxt'>{t("body.subtext1")} <br />
                {t("body.subtext2")}</span>
            </div>
            <h3 style={{marginTop:'120px', textAlign:'center'}}>{t("body1")}</h3>
            <img src="/fr.png" alt="brands" height={100} style={{marginTop:'45px'}} />
        </div>

         // Body section ended
    )
}