import { useState, useEffect } from 'react';

interface CloudinaryResource {
  public_id: string;
  version: number;
  format: string;
  width: number;
  height: number;
  type: string;
  created_at: string;
}

interface CloudinaryListResponse {
  resources: CloudinaryResource[];
  updated_at: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  aspect: string;
}

export const useCloudinaryGallery = (cloudName: string, tag: string) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.statusText}`);
        }

        const data: CloudinaryListResponse = await response.json();
        
        // Transform the Cloudinary response into our GalleryImage format
        const formattedImages: GalleryImage[] = data.resources.map((res, index) => {
          // Construct the full image URL
          const src = `https://res.cloudinary.com/${cloudName}/image/upload/v${res.version}/${res.public_id}.${res.format}`;
          
          // Cycle through aspect ratios to maintain the masonry layout feel
          const aspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]"];
          const aspect = aspects[index % aspects.length];
          
          // Use public_id as a fallback alt text, formatted slightly better
          const altText = res.public_id.split('/').pop()?.replace(/-/g, ' ') || 'Portfolio image';

          return {
            src,
            alt: altText,
            aspect,
          };
        });

        setImages(formattedImages);
      } catch (err) {
        console.error("Error fetching Cloudinary images:", err);
        setError("Could not load images. Please ensure the Cloudinary tag is correct and 'Resource list' is enabled in Cloudinary Security settings.");
      } finally {
        setLoading(false);
      }
    };

    if (cloudName && tag) {
      fetchImages();
    }
  }, [cloudName, tag]);

  return { images, loading, error };
};
