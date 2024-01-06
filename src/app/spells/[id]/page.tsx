'use client';

import Loading from '@/components/atoms/loading';
import SpecificCard from '@/components/molecules/specificCard';
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
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Filme</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!spell ? (
          <SpecificCard title={spell.attributes.name} image={spell.attributes.image} firstInfoTitle='Categoria' firstInfo={spell.attributes.category} secondInfoTitle='Efeito' secondInfo={spell.attributes.effect} thirdInfoTitle='Luz' thirdInfo={spell.attributes.light} fourthInfoTitle='Encantamento' fourthInfo={spell.attributes.incantation} />
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}