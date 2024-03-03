'use client';

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "./page";
import { FullHeart } from "@/components/icons/fulHeart";
import { ImageMenu } from "@/components/image-menu";

interface CloudinaryImageProps {
  imagedata: SearchResult;
  onUnheart?: (unheartResource: SearchResult) => void;
  [key: string]: any
}

export function CloudinaryImage(props: CloudinaryImageProps & Omit<CldImageProps, "src">) {
  const [transition, setTransition] = useTransition();
  const { imagedata, onUnheart } = props
  const [isFavorited, setIsFavorited] = useState(imagedata.tags.includes('fvaorite'))

  return (
    <div className="relative">
      <CldImage
        {...props}
        src={imagedata.public_id}
      />

      {isFavorited ? <FullHeart
        onClick={() => {
          setIsFavorited(false)
          setTransition(() => {
            setAsFavoriteAction(imagedata.public_id, true)
          })
        }}

        className="absolute top-2 left-2 hover:text-white text-red-600 hover:cursor-pointer"

      /> :
        <Heart
          onClick={() => {
            onUnheart?.(imagedata)
            setIsFavorited(true)
            setTransition(() => {
              setAsFavoriteAction(imagedata.public_id, false)
            })
          }}
          className="absolute top-2 left-2 hover:text-red-600 hover:cursor-pointer"
        />
      }

      <ImageMenu image={imagedata} />
    </div>
  )
}