'use client';


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { useState } from "react";

export function SearchForm() {
  const [tagName, setTagName] = useState('');
  const router = useRouter()

  return (
    <div className="pt-5">
      <form onSubmit={(e)=>{
        e.preventDefault()
        router.replace(`gallery?search=${encodeURIComponent(tagName)}`)
        router
      }}>
        <Label htmlFor="tag-name">Search By Tag</Label>

        <div className="flex gap-2">
          <Input
            onChange={(e) => setTagName(e.target.value)}
            id="tag-name"
            value={tagName}
          />

          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  )
}