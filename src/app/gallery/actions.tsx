"use server"
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function setAsFavoriteAction(publicId: string, isFavorited: boolean) {
  if (isFavorited) {
    await cloudinary.v2.uploader.remove_tag("fvaorite", [publicId])
  } else {
    await cloudinary.v2.uploader.add_tag("fvaorite", [publicId])
  }
}
