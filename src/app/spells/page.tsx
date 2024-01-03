'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { useEffect, useState } from 'react';

export default function Spells() {
  const [spells, setSpells] = useState<any[]>();
  const [spellsToFilter, setSpellsToFilter] = useState<string>('');

  useEffect(() => {
    getSpellsFn();
  }, [spellsToFilter])

  async function getSpellsFn() {
    const requestSpells = await getValues<any>('spells', '?filter[name_cont_any]', spellsToFilter);

    setSpells(requestSpells);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Feitiços</h1>

      <div className='w-full md:w-[90%]'>
        <input type="text" onChange={e => setSpellsToFilter(e.target.value)} placeholder='Procure por um feitiço' className='w-full p-3 rounded-md border border-slate-800' data-test='filterInput' />
        <span>{spells?.length} resultado(os)</span>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4' data-test='cardsContainer'>
        {!!spells?.length ? (
          spells?.map((spell, i) => (
            <Card title={spell.attributes.name} image={spell.attributes.image} firstInfoTitle='Categoria' firstInfo={spell.attributes.category} secondInfoTitle='Efeito' secondInfo={spell.attributes.effect} key={i} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}