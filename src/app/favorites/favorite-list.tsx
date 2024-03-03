'use client'

import { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import { CloudinaryImage } from "../gallery/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";

export default function FavoriteList({ initialResources }: { initialResources: SearchResult[] }) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources)
  }, [initialResources])

  return (
    <>
      <ImageGrid
        images={resources}
        getImage={(imageData: SearchResult) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              width="400"
              height="300"
              sizes="100vw"
              alt="Description of my image"

              imagedata={imageData}
              onUnheart={(unheartResource) => {
                setResources((currentResources) => {
                  return currentResources.filter(resource => {
                    return resource.public_id !== unheartResource.public_id
                  })
                })
              }}
            />
          )
        }}
      />
    </>
  )
}