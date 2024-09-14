
import { useRouter,usePathname,useSearchParams } from "next/navigation"


const LanguageSwitcher = () => {
    const router=useRouter();
    const pathname=usePathname();
    const searhParams=useSearchParams();

    const changeLanguage=(newLocale:string)=>{
        router.push(`/${newLocale}${pathname}`)
    }
    
    
    return (
        <button className="text-white" onClick={()=>changeLanguage(pathname.includes('/es')?'en':'es')}>
             {pathname.includes('/es') ? 'En' : 'Es'}
        </button>
    )
}

export default LanguageSwitcher 