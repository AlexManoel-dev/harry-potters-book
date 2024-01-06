'use client';

import Loading from '@/components/atoms/loading';
import Card from '@/components/molecules/card';
import getValues from '@/functions/getValues';
import { ICharacter } from '@/interfaces/ICharacter';
import { useEffect, useState } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [characterToFilter, setCharacterToFilter] = useState<string>('');
  const [charactersToLoadMore, setCharactersToLoadMore] = useState<number>(2);

  useEffect(() => {
    getCharactersFn();
    setCharactersToLoadMore(2);
  }, [characterToFilter])

  async function getCharactersFn() {
    const requestCharacters = await getValues<ICharacter[]>('characters', '', '?filter[name_cont]', characterToFilter, '&page[size]', 24);

    setCharacters(requestCharacters);
  }

  async function loadMore() {
    setCharactersToLoadMore(charactersToLoadMore + 1);

    const requestCharacters = await getValues<ICharacter[]>('characters', '', '?filter[name_cont]', characterToFilter, '&page[size]=24&page[number]', charactersToLoadMore);

    setCharacters([...characters, ...requestCharacters]);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Personagens</h1>

      <div className='w-full md:w-[90%]'>
        <input type="text" onChange={e => setCharacterToFilter(e.target.value)} placeholder='Procure por um feitiço' className='w-full p-3 rounded-md border border-slate-800 text-black' data-test='filterInput' />
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

      <button
        onClick={loadMore}
        className='bg-[#B5D6B2] text-black px-5 py-3 rounded-md'
      >
        Load More
      </button>
    </div>
  )
}