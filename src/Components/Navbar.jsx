import { useTranslation } from 'react-i18next';
import './styles.css';
import { Body } from './Body';
import { Footer } from './Footer';
import { Translation } from './Translation';



export function Navbar() {
   const {t}=useTranslation();
   

    return (

         // Navigation section started
        <div className="main container-fluid">
        
            <div>
                <header className="nav1 p-3  d-flex justify-content-between align-items-center">
                    <div className=" mx-5"><img src="/logo3.png" alt="logo" height={50} style={{ cursor: 'pointer' }} /></div>
                    <div className='main1 d-flex justify-content-center'>
                        <Translation/>
                        <div class="dropdown">
                            <button className=" btn dropbtn mt-2">{t("header.company")} <span className=' bi bi-chevron-down mx-1'></span></button>
                        
                            {/* Submenu of company */}

                            <div class="dropdown-content">
                                <a href="#">{t("submenu.about")}</a>
                                <a href="#">{t("submenu.leadership")}</a>
                                <a href="#">{t("submenu.culture")}</a>
                                <a href="#">{t("submenu.career")}</a>
                                <a href="#">{t("submenu.blog")}</a>
                            </div>
                        </div>

                         {/* Submenu of product */}

                        <div class="dropdown1">
                            <button className=" btn dropbtn1 mt-2">{t("header.products")}<span className=' bi bi-chevron-down mx-1'></span></button>
                            <div class="dropdown-content1">
                                <a href="#">{t("submenu1.biz")}</a>
                                <a href="#">{t("submenu1.turbo")}</a>
                                <a href="#">{t("submenu1.doc")}</a>
                                <a href="">{t("submenu1.chu")}</a>
                            </div>
                        </div>
                        <div>
                            <button className=" btn">{t("header.customers")}</button>
                            <button className=" btn">{t("header.support")}</button>
                            <button className=" btn1 rounded-5">{t("header.joinus")}</button>
                        </div>
                    </div>
                </header>
            </div>
            
            <Body />
            <Footer />
            
        </div>
    )
}