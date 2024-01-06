'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { ISpell } from '@/interfaces/ISpell';
import { useEffect, useState } from 'react';

export default function Spells() {
  const [spells, setSpells] = useState<ISpell[]>([]);
  const [spellsToFilter, setSpellsToFilter] = useState<string>('');
  const [spellsToLoadMore, setSpellsToLoadMore] = useState<number>(2);

  useEffect(() => {
    getSpellsFn();
    setSpellsToLoadMore(2);
  }, [spellsToFilter])

  async function getSpellsFn() {
    const requestSpells = await getValues<ISpell[]>('spells', '', '?filter[name_cont_any]', spellsToFilter, '&page[size]', 24);

    setSpells(requestSpells);
  }

  async function loadMore() {
    setSpellsToLoadMore(spellsToLoadMore + 1);

    const requestSpells = await getValues<ISpell[]>('spells', '', '?filter[name_cont_any]', spellsToFilter, '&page[size]=24&page[number]', spellsToLoadMore);

    setSpells([...spells, ...requestSpells]);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Feitiços</h1>

      <div className='w-full md:w-[90%]'>
        <input type="text" onChange={e => setSpellsToFilter(e.target.value)} placeholder='Procure por um feitiço' className='w-full p-3 rounded-md border border-slate-800 text-black' data-test='filterInput' />
        <span>{spells?.length} resultado(os)</span>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4' data-test='cardsContainer'>
        {!!spells?.length ? (
          spells?.map((spell, i) => (
            <Card id={spell.id} route='spells' title={spell.attributes.name} image={spell.attributes.image} firstInfoTitle='Categoria' firstInfo={spell.attributes.category} secondInfoTitle='Efeito' secondInfo={spell.attributes.effect} key={i} />
          ))
        ) : (
          <Loading />
        )}
      </div>

      <button
        onClick={loadMore}
        className='bg-[#B5D6B2] text-black px-5 py-3 rounded-md'
      >
        Load More
      </button>
    </div>
  )
}