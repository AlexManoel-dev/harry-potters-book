'use client';

import { useEffect } from 'react';
import '../../styles/content-card-style.css';

export default function Content() {
  

  useEffect(() => {

  }, [])
  
  const cards = [
    {
      title: 'Livros',
      qtd: 7
    },
    {
      title: 'Personagens',
      qtd: 4592
    },
    {
      title: 'Filmes',
      qtd: 11
    },
    {
      title: 'Poções',
      qtd: 156
    },
    {
      title: 'Feitiços',
      qtd: 312
    },
  ];

  return (
    <div className='flex justify-center items-center flex-wrap gap-4'>
      {cards.map((card, i) => (
        <div className='card flex justify-center items-center' key={i}>
          {/* <Image src="/harry-potter.jpeg" alt="Personagens" fill /> */}

          <span className='text-xl'>{card.qtd} {card.title}</span>
        </div>
      ))}
    </div>
  )
}