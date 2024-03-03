import cloudinary from 'cloudinary';
import { ForceRefresh } from '@/components/force-refresh';
import FavoriteList from './favorite-list';


export type SearchResult = {
  public_id: string,
  tags: string[]
}

export default async function FavoritePage() {
  const results = await (cloudinary.v2.search
    .expression('resource_type:image AND tags=fvaorite')
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] }
    
  return (
    <section>
      <ForceRefresh />

      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Favorite Images</h1>
      </div>

      <FavoriteList initialResources={results.resources}/>

      {/* <div className="grid grid-cols-4 gap-4 pt-12">
        {results.resources.map((result) => {
          return (
            <CloudinaryImage
              key={result.public_id}
              width="400"
              height="300"
              sizes="100vw"
              alt="Description of my image"
              imagedata={result}
              path={'/favorites'}
            />
          )
        })}
      </div> */}
    </section>
  )
}