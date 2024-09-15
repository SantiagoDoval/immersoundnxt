import { getDictionary } from '@/lib/dictionary'

// const useLanguage = async ({lang}:{lang:any}) => {
  
//   return await getDictionary(lang)


// }

// export default useLanguage

export const useLanguage = async ({lang}:{lang:any}) => await getDictionary(lang)