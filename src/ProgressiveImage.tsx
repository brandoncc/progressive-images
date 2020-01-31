import React, { useCallback, useState } from 'react';

type TProps = {
  images: Array<string>;
};

export default function ProgressiveImage ({ images }: TProps) {
  const [src, setSrc] = useState(images[0]);
  const handleLoad = useCallback(
    () => {
      const currentIndex = images.indexOf(src);

      if (currentIndex < images.length - 1) {
        setSrc(images[currentIndex + 1]);
      }
    },
    [images, setSrc, src]
  );

  return (
    <img src={src} style={{ width: 400, height: 400 }} onLoad={handleLoad} />
  );
}
