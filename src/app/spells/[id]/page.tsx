'use client';

import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { ISpell } from '@/interfaces/ISpell';
import { useEffect, useState } from 'react';

export default function Spell() {
  const [spell, setSpell] = useState<ISpell>();
  
  useEffect(() => {
    getSpellFn();
  }, [])
  
  async function getSpellFn() {
    const id = getUrlId();

    const response = await getValues<ISpell>('spells', id, '', '');
    
    setSpell(response);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Filme</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        Card
      </div>
    </div>
  )
}