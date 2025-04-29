import{sql} from 'drizzle-orm'

import {db} from '@/db'

import { createAction } from "@/app/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";



export default async function Home() {

 
    const results = await db.execute(sql`SELECT current_database()`)
    console.log("results", results)
  return (
   <main className="flex flex-col item-center justify-center max-w-5xl mx-auto my-12">
    <div className="flex justify-between">
    <h1 className="text-3xl font-bold mb-6">
        Create A New Invoice
        </h1>
        
    </div>
    
    {/* {JSON.stringify(results)} */}
    
  <form action={createAction} className="grid gap-4 max-w-xs">
    <div>
        <Label htmlFor="name" className="block font-semibold text-sm mb-2">Billing Name</Label>
        <Input id="name" name="name" type="text"/>
    </div>
    <div>
        <Label htmlFor="email" className="block font-semibold text-sm mb-2">Email</Label>
        <Input id="email" name="email" type="email"/>
    </div>
    <div>
        <Label htmlFor="value" className="block font-semibold text-sm mb-2">Value</Label>
        <Input id="value" name="value" type="text"/>
    </div>
    <div>
        <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
        <Textarea id="description" name="description"></Textarea>
    </div>
    <div>
        <Button className="w-full font-semibold">Submit</Button>
    </div>
  </form>

   </main>
  );
}
