export default function FilterInput(valueToSet: any, placeholder: string) {
  return (
    <input type="text" onChange={e => valueToSet(e.target.value)} placeholder={placeholder} className='w-full md:w-[90%] p-3 rounded-md border border-slate-800' />
  )
}