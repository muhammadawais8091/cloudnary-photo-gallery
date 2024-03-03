import { SearchResult } from '@/app/gallery/page';
import { ForceRefresh } from '@/components/force-refresh';
import cloudinary from 'cloudinary';
import AlbumGrid from './album-grid';


export default async function GalleryPage({ params: { albumName } }: { params: { albumName: string } }) {
  const results = await (cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] }

  console.log("gallery results>>>>>>", results)

  function getColumns(colIndex: number) {
    return results.resources.filter((resource, idx) => idx % 4 === colIndex)
  }

  return (
    <section>
      <ForceRefresh />

      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">{albumName}</h1>
      </div>

      <AlbumGrid images={results.resources} />
    </section >
  )
}