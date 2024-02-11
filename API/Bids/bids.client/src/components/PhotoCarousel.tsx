'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import { lotsdata } from '@/store/lotsData';

const lotData = lotsdata[0];

export function PhotoCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}>
      <CarouselContent className='p-0 h-full'>
        {lotData.images.map((image, index) => (
          <CarouselItem key={index} className='h-full'>
            <Card className='p-0 h-full'>
              <CardContent className='flex h-full items-center justify-center p-0'>
                <Image
                  height={620}
                  width={640}
                  src={image}
                  alt={`Image  ${index + 1}`}
                  className='h-full w-full object-cover rounded-lg'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
