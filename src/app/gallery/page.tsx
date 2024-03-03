import cloudinary from 'cloudinary';
import { CloudinaryImage } from "./cloudinary-image";
import UploadButton from "./upload-button";
import { ForceRefresh } from '@/components/force-refresh';
import { resourceLimits } from 'worker_threads';
import { ImageGrid } from '@/components/image-grid';
import GalleryGrid from './gallery-grid';
import { SearchForm } from './search-form';

export type SearchResult = {
  public_id: string,
  tags: string[]
}

export default async function GalleryPage({ searchParams: { search } }: { searchParams: { search: string } }) {
  const results = await (cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags:${search}` : ''}`)
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
        <h1 className="text-4xl font-bold">Gallery</h1>

        <UploadButton />
      </div>

      <SearchForm />

      <GalleryGrid images={results.resources} />
    </section >
  )
}