'use client';

import Loading from '@/components/atoms/loading';
import SpecificCard from '@/components/molecules/specificCard';
import { getUrlId } from '@/functions/getUrlId';
import getValues from '@/functions/getValues';
import { ICharacter } from '@/interfaces/ICharacter';
import { useEffect, useState } from 'react';

export default function Character() {
  const [character, setCharacter] = useState<ICharacter>();
  
  useEffect(() => {
    getCharacterFn();
  }, [])
  
  async function getCharacterFn() {
    const id = getUrlId();

    const response = await getValues<ICharacter>('characters', id, '', '');
    
    setCharacter(response);
  }

  return (
    <div className='flex flex-col items-center p-10 gap-10 bg-[--sixty-color] text-[--font-color]'>
      <h1 className='text-[40px]'>Personagem</h1>

      <div className='flex justify-center items-center flex-wrap gap-4 p-4'>
        {!!character ? (
          <SpecificCard title={character.attributes.name} image={character.attributes.image} firstInfoTitle='Espécie' firstInfo={character.attributes.species} secondInfoTitle='Gênero' secondInfo={character.attributes.gender} thirdInfoTitle='Nascimento' thirdInfo={character.attributes.born} fourthInfoTitle='Morte' fourthInfo={character.attributes.died} />
        ): (
          <Loading />
        )}
      </div>
    </div>
  )
}