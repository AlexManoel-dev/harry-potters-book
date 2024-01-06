'use client';

import Link from 'next/link';
import '../../styles/content-card-style.css';
import { IContentCard } from '@/interfaces/IContentCard';

export default function Content() {

  const cards: IContentCard[] = [
    {
      title: 'Livros',
      qtd: 7,
      route: 'books'
    },
    {
      title: 'Personagens',
      qtd: 4592,
      route: 'characters'
    },
    {
      title: 'Filmes',
      qtd: 11,
      route: 'movies'
    },
    {
      title: 'Poções',
      qtd: 156,
      route: 'potions'
    },
    {
      title: 'Feitiços',
      qtd: 312,
      route: 'spells'
    },
  ];

  return (
    <div className='flex justify-center items-center flex-wrap gap-4'>
      {cards.map((card, i) => (
        <Link href={`/${card.route}`} className='card flex justify-center items-center' key={i}>
          <span className='text-xl'>{card.qtd} {card.title}</span>
        </Link>
      ))}
    </div>
  )
}