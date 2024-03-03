'use client'

import { ImageGrid } from '@/components/image-grid';
import { CloudinaryImage } from "./cloudinary-image";
import { SearchResult } from './page';

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid images={images}
      getImage={(imageData) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            width="400"
            height="300"
            sizes="100vw"
            alt="Description of my image"
            imagedata={imageData}
          />
        )
      }}
    />
  )
}