'use client'

import { useRouter } from "next/navigation"

export const useDirectTo = (path:string) => {
    const router=useRouter();
    router.push(path)
}

export default useDirectTo