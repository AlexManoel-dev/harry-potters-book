import Content from '@/components/molecules/content'
import Presentation from '@/components/molecules/presentation'

export default function Home() {
  return (
    <div className='bg-[--sixty-color]'>
      <div className='h-[93vh] flex justify-center items-center gap-1 bg-[--sixty-color]'>
        <Presentation />
      </div>
      <div className='min-h-[92vh] py-4 flex justify-center items-center gap-5 bg-[--sixty-color]'>
        <Content />
      </div>
    </div>
  )
}
