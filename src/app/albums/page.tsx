import UploadIMage from "@/components/cloudnairy/UploadIMage";
import cloudinary from 'cloudinary'
import { AlbumCard } from "./album-card";

export type Folder = {
  name: string
  path: string
}

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[]
  }

  console.log(folders)

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Albums</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {
            folders.map((folder, index) => {
              return <AlbumCard folder={folder} key={index} />
            })
          }
        </div>
      </div>
    </section>
  );
}
