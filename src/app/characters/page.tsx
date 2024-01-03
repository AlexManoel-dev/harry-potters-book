'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { ICharacter } from '@/interfaces/ICharacter';
import { useEffect, useState } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [characterToFilter, setCharacterToFilter] = useState<string>('');

  useEffect(() => {
    getCharactersFn();
  }, [characterToFilter])

  async function getCharactersFn() {
    const requestCharacters = await getValues<ICharacter[]>('characters', '', '?filter[name_cont]', characterToFilter);

    setCharacters(requestCharacters);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10'>
      <h1 className='text-[40px]'>Personagens</h1>

      <div className='w-full md:w-[90%]'>
        <input type="text" onChange={e => setCharacterToFilter(e.target.value)} placeholder='Procure por um feitiço' className='w-full p-3 rounded-md border border-slate-800' data-test='filterInput' />
        <span>{characters?.length} resultado(os)</span>
      </div>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4' data-test='cardsContainer'>
        {!!characters?.length ? (
          characters?.map((character, i) => (
            <Card id={character.id} route='characters' title={character.attributes.name} image={character.attributes.image} firstInfoTitle='Espécie' firstInfo={character.attributes.species} secondInfoTitle='Gênero' secondInfo={character.attributes.gender} key={i} />
          ))
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}