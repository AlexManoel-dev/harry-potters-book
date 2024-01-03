'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { IPotion } from '@/interfaces/IPotion';
import { useEffect, useState } from 'react';

export default function Potions() {
  const [potions, setPotions] = useState<IPotion[]>();
  const [potionsToFilter, setPotionsToFilter] = useState<string>('');

  useEffect(() => {
    getPotionsFn();
  }, [potionsToFilter])

  async function getPotionsFn() {
    const requestPotions = await getValues<IPotion[]>('potions', '', '?filter[name_cont_any]', potionsToFilter);

    setPotions(requestPotions);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Poções</h1>

      <div className='w-full md:w-[90%]'>
        <input type="text" onChange={e => setPotionsToFilter(e.target.value)} placeholder='Procure por um feitiço' className='w-full p-3 rounded-md border border-slate-800' data-test='filterInput' />
        <span>{potions?.length} resultado(os)</span>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4' data-test='cardsContainer'>
        {!!potions?.length ? (
          potions?.map((potion, i) => (
            <Card id={potion.id} route='potions' title={potion.attributes.name} image={potion.attributes.image} firstInfoTitle='Efeito' firstInfo={potion.attributes.effect} secondInfoTitle='Dificuldade' secondInfo={potion.attributes.difficulty} key={i} />
          ))
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}