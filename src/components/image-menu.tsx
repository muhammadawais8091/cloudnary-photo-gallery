import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { FolderPlus, Pencil } from "lucide-react"
import Menu from "./icons/menu"
import AddToALbumDialog from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import Link from "next/link"

export function ImageMenu({image}:{image:SearchResult}) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
             <AddToALbumDialog image={image} />
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
             <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
               <Pencil className="w-4 -h-4 mr-2" />

               Edit
             </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
