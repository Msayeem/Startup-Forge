import { getUserSession } from "@/lib/session";
import Image from "next/image";

export default async function Home() {
  const user=await getUserSession();

  return (
 <div>
  
 </div>
  );
}
