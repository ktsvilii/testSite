import { FC, useContext, useRef } from 'react';
import { AuthContext } from '@context';
import { useQuery } from 'react-query';
import { useVirtualizer } from '@tanstack/react-virtual';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const Album: FC = () => {
  const parentRef = useRef(null);

  const { isAuthenticated } = useContext(AuthContext);

  const fetchAlbum = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos: Photo[] = await data.json();

    return photos;
  };

  const { data, isFetching, isError } = useQuery({
    queryKey: 'photos',
    queryFn: fetchAlbum,
    enabled: isAuthenticated,
  });

  const photos = useVirtualizer({
    count: data?.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 150,
    overscan: 15,
  });

  return (
    <div ref={parentRef} className='w-100 overflow-auto h-[32.4rem] p-4'>
      <div style={{ height: `${photos.getTotalSize()}px`, position: 'relative' }}>
        {photos.getVirtualItems().map(virtualPhoto => {
          const photo = data?.[virtualPhoto.index];
          return (
            <div
              key={photo?.id ?? virtualPhoto.index}
              className='absolute top-0 left-0 w-100'
              style={{
                height: `${virtualPhoto.size}px`,
                transform: `translateY(${virtualPhoto.start}px)`,
              }}
            >
              <span>{photo?.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
