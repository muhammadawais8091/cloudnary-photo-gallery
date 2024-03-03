'use State';

import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import { useState } from "react";
import { addImageToAlbum } from "./action";

export default function AddToALbumDialog({ image }: { image: SearchResult }) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={()=>setOpen(false)}>
          <FolderPlus className="mr-2 h-4 w-4" />

          Add to Album
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>

          <DialogDescription>
            TYpe an album you want to move this image into.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="album-name"
             className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit"
            onClick={async() => {
              await addImageToAlbum(image, albumName);
              setOpen(false)
            }}
          >Add to ALbum</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
