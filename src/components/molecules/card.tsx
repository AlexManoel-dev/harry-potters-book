'use client';

import { ImageOff } from 'lucide-react';
import Image from 'next/image';

export default function Card({ firstInfoTitle, firstInfo, secondInfoTitle, secondInfo, title, image }: any) {
  return (
  <div className='w-[350px] min-h-[450px] relative md:w-[400px] flex justify-center items-center flex-col gap-4 p-4 bg-white rounded-md border-r border-b border-l border-t border-gray-400 cursor-pointer hover:-translate-y-2 transition'>
    {image ? (
      <div className='w-full flex justify-center items-center'>
        <div className='w-[150px] h-[150px]'>
          {/* <Image src={image} alt="Personagens" width={150} height={150} /> */}
          <img src={image} alt="Imagem do card" className='w-full h-full rounded-md' />
        </div>
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
    </div>

    <button className='w-[85%] py-2 mt-2 bg-slate-500 rounded-md text-white absolute bottom-5'>Ver mais</button>
  </div>
  )
}