'use client'

import { getDictionary } from '@/lib/dictionary';
import { useEffect, useState } from 'react'
import { i18n, Locale } from '../../i18n.config';
import { useLanguage } from '@/context/LanguageContext';

const isValidLocale = (locale: any): locale is Locale => {
    return i18n.locales.includes(locale as Locale);
};

const useGetText = (type:string,page:string) => {

    const { lang:{lang} } = useLanguage();        
    
    const [t, setT] = useState<any>(null);

    useEffect(()=>{
        const getLenguaje=async()=>{            
            try {
                if (isValidLocale(lang)) {
                    const result:any = await getDictionary(lang);   
                    const firtsLevel=result[type];
                    const secondLevel=firtsLevel[page]
                    setT(secondLevel);                 
                }
            } catch (error) {
                console.error('Error fetching data:', error);                
            }
        }        
        getLenguaje() 
    },[lang,page,type])    
    
    return {t,lang}
}

export default useGetText