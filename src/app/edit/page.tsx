'use client'

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({ searchParams: { publicId } }: { searchParams: { publicId: string } }) {
  const [transformation, setTransformation] = useState<undefined | 'generative-fill'>();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1>Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>ClearAll</Button>

          <Button onClick={() => setTransformation('generative-fill')}>Generative Fill</Button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <CldImage
            src={publicId}
            width="300"
            height="200"
            alt="some image"

          />

          {transformation === 'generative-fill' &&
            <CldImage
              src={publicId}
              width="300"
              height="200"
              alt="some image"
              crop="pad"  // Returns the given size with padding
              fillBackground
            />
          }
        </div>
      </div>
    </section>
  )
}