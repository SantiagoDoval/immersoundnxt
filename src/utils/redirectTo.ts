import { useLanguage } from '@/context/LanguageContext';


export const RedirectTo = (link:string) =>{
    const { lang:{lang} } = useLanguage();   
    return `/${lang}/${link}`;
};

