'use client';

import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { IPotion } from '@/interfaces/IPotion';
import { useEffect, useState } from 'react';

export default function Potion() {
  const [potion, setPotion] = useState<IPotion>();
  
  useEffect(() => {
    getPotionFn();
  }, [])
  
  async function getPotionFn() {
    const id = getUrlId();

    const response = await getValues<IPotion>('potions', id, '', '');
    
    setPotion(response);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Poção</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        Card
      </div>
    </div>
  )
}