import Content from '@/components/molecules/content'
import Presentation from '@/components/molecules/presentation'

export default function Home() {
  return (
    <div className='bg-[--first-color]'>
      <div className='h-[93vh] flex justify-center items-center gap-1'>
        <Presentation />
      </div>
      <div className='min-h-[92vh] py-4 bg-slate-200 flex justify-center items-center gap-5'>
        <Content />
      </div>
    </div>
  )
}
