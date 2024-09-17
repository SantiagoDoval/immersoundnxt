export const runtime = 'edge';

import { RedirectTo } from "@/utils/redirectTo";
import { redirect } from "next/navigation";

export default function Home() {  
  return redirect('/es/login')
}
