import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    resources:{
        en:{
            translation:{
                "header":{
                    "company":"Company",
                    "products":"Products",
                    "customers":"Customers",
                    "support":"Support",
                    "joinus":"Join Us"
                },
                "body":{
                    "subtext1":"Best-in-class Azure Management, Documentation,",
                    "subtext2":"and Customer Success software. Now Amped up with AI.",
                    "maintext1":"Exceptional Software",
                    "maintext2":"charged with",
                    "maintext3":"AI Superpowers"
            
                },
                "submenu":{
                    "about":"About us",
                    "leadership":"Leadership",
                    "culture":"Our culture",
                    "career":"Career",
                    "blog":"Our Blog",
                    "events":"Events",
                    "cust":"Customers",
                    "contact":"Contact Us"
                },
                "body1":"Fueling 2500+ global businesses",
                "submenu1":{
                    "biz":"BizTalk360",
                    "turbo":"Turbo360",
                    "doc":"Document360",
                    "chu":"Churn360",
                },
                "foot1":{
                    "blog":"Blog",
                    "part":"Partners",
                    "news":"Newsroom",
                    "sup":"Support",
                },
                "foot2":{
                    "connect":"Connect Us",
                    "em1":"contact@kovai.co",
                    "car":"Careers",
                    "em2":"careers@kovai.co",
                },
                "foot3":{
                    "copy1":"Copyright",
                    "copy2":"Kovai Limited",
                    "terms":"Terms of Use",
                    "pri":"Privacy Policy",
                    "cook":"Cookie Policy"
                }


            }
        },
        fr:{
            translation:{
                "header":{
                    "company":"Entreprise",
                    "products":"Des produits",
                    "customers":"Clientes",
                    "support":"Soutien",
                    "joinus":"Rejoignez-nous"
                },
                "body":{
                    "subtext1":"Le meilleur logiciel Azure de gestion, de documentation",
                    "subtext2":"et de réussite client. Maintenant amélioré avec l'IA.",
                    "maintext1":"Logiciel exceptionnel",
                    "maintext2":"accusé de",
                    "maintext3":"Superpuissances de l'IA"
            
                },
                "submenu":{
                    "about":"À propos de nous",
                    "leadership":"Direction",
                    "culture":"Notre culture",
                    "career":"Carrière",
                    "blog":"Notre blog",
                    "events":"Événements",
                    "cust":"Clientes",
                    "contact":"Contactez-nous"
                    
                },
                "body1":"Alimenter plus de 2500+ entreprises mondiales",
                "submenu1":{
                    "biz":"BizTalk360",
                    "turbo":"Turbo360",
                    "doc":"Document360",
                    "chu":"Churn360",
                },
                "foot1":{
                    "blog":"Blog",
                    "part":"Les partenaires",
                    "news":"Rédaction",
                    "sup":"Soutien",
                },
                "foot2":{
                    "connect":"Connectez-nous",
                    "em1":"contact@kovai.co",
                    "car":"Carrières",
                    "em2":"careers@kovai.co",
                },
                "foot3":{
                    "copy1":"droits d'auteur",
                    "copy2":"Kovai Limitée",
                    "terms":"Conditions d'utilisation",
                    "pri":"politique de confidentialité",
                    "cook":"Politique en matière de cookies"
                }

        }
    }
}
});