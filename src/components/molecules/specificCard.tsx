'use client';

import { ImageOff } from 'lucide-react';
import Image from 'next/image';

export default function SpecificCard({ firstInfoTitle, firstInfo, secondInfoTitle, secondInfo, thirdInfoTitle, thirdInfo, fourthInfoTitle, fourthInfo, title, image }: any) {
  return (
  <div className='w-[90%] md:w-[650px] min-h-[450px] flex flex-col md:flex-row justify-center items-center gap-4 p-4 bg-[--thirty-color] text-[--font-color] rounded-md shadow-lg cursor-pointer hover:-translate-y-2 transition'>
    {image ? (
      <div className='w-full flex justify-center items-center'>
        <Image src={image} alt="Personagens" width={190} height={190}  className='rounded-md'/>
      </div>
    ): (
      <div className='w-full flex justify-center items-center'>
        <div className='w-[150px] h-[150px] flex justify-center items-center'>
          <ImageOff size={128} />
        </div>
      </div>
    )}

    <div className='w-[90%]'>
      <p className='font-bold text-lg'>{title}</p>
      <p className='mt-2'><b>{firstInfoTitle}:</b> {firstInfo ?? 'N/A'}</p>
      <p className='mt-1'><b>{secondInfoTitle}:</b> {secondInfo ?? 'N/A'}</p>
      <p className='mt-1'><b>{thirdInfoTitle}:</b> {thirdInfo ?? 'N/A'}</p>
      <p className='mt-1'><b>{fourthInfoTitle}:</b> {fourthInfo ?? 'N/A'}</p>
    </div>
  </div>
  )
}