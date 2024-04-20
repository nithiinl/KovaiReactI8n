
import './styles.css'
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();

    return (
        <div>

            <div className=" footer row d-flex align-baseline">
                <hr />

                <div className=" foot col-3">

                    <img src="/logo3.png" alt="logo1" height={40} style={{ cursor: 'pointer', marginLeft: '70px' }} />
                    <img src="/ms.png" alt="logo2" height={110} style={{ cursor: 'pointer', marginTop: '20px', marginLeft: '70px', }} />

                    <div className=" ficons d-flex align-content-center gap-2">
                        <button><span className=" bi bi-facebook"></span></button>
                        <button><span className=" bi bi-twitter"></span></button>
                        <button><span className=" bi bi-instagram"></span></button>
                        <button><span className=" bi bi-youtube"></span></button>
                    </div>
                </div>
                <div className="col-2">
                    <h4>{t("header.products")}</h4>
                    <ul className=" list-unstyled" style={{ cursor: 'pointer' }}>
                        <li>{t("submenu1.biz")}</li>
                        <li>{t("submenu1.turbo")}</li>
                        <li>{t("submenu1.doc")}</li>
                        <li>{t("submenu1.chu")}</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h4>{t("header.company")}</h4>
                    <ul className=" list-unstyled" style={{ cursor: 'pointer' }}>
                        <li>{t("submenu.about")}</li>
                        <li>{t("submenu.career")}</li>
                        <li>{t("submenu.events")}</li>
                        <li>{t("submenu.cust")}</li>
                        <li>{t("submenu.contact")}</li>
                    </ul>
                </div>
                <div className=" col-2" style={{ marginTop: '30px' }}>
                    <ul className=" list-unstyled" style={{ cursor: 'pointer' }}>
                        <li>{t("foot1.blog")}</li>
                        <li>{t("foot1.part")}</li>
                        <li>{t("foot1.news")}</li>
                        <li>{t("foot1.sup")}</li>

                    </ul>
                </div>
                <div className=" col-2">
                    <h4>{t("foot2.connect")}</h4>
                    <span className=" bi bi-envelope"> {t("foot2.em1")}</span>
                    <br />
                    <br />
                    <h4>{t("foot2.car")}</h4>
                    <span className=" bi bi-envelope"> {t("foot2.em2")}</span><br />
                    <img src="/limg.png" alt="limg" height={70} style={{ borderRadius: '60px', marginTop: '20px' }} />
                </div>
            </div>
            <div className="  main3 d-flex">
                <hr />
                <div>
                    <span style={{ marginLeft: "60px", marginTop: '20px' }}>{t("foot3.copy1")} &copy; {t("foot3.copy2")}</span>
                </div>
                <div style={{ marginLeft: '600px' }} className=" d-flex align-content-center justify-content-between gap-4">

                    <button className="btn" formAction="">{t("foot3.terms")}</button>
                    <button className="btn" formAction="">{t("foot3.pri")}</button>
                    <button className="btn" formAction="">{t("foot3.cook")}</button>
                </div>

            </div>

        </div>

    )
}