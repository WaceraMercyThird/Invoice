import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <main className="flex flex-col item-center justify-center min-h-screen text-center max-w-5xl mx-auto">
    <h1 className="text-5xl font-bold mb-6">Invoice</h1>
    <p>
     
      <Button asChild>
         <Link href="/dashboard">
         Sign In
      </Link>
      </Button>     
    </p>
   </main>
  );
}
