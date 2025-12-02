import type { Todo } from '../features/todoSlice'
import { Trash } from 'lucide-react'
import { deleteTodo } from '../features/todoSlice'
import { useAppDispatch } from '../app/hooks'

type CardProps = {
  data: Todo
}

export default function Card({ data }: CardProps) {
  const dispatch = useAppDispatch()

  const HandleClick = () => {
    dispatch(deleteTodo(data.id))
  }
  return (
    <section className="rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-cyan-300 to-lime-300 p-2 text-white font-semibold text-lg flex justify-between items-center">
        {data.id}
        <Trash size={18} onClick={HandleClick} />
      </div>
      <div className="p-2 flex flex-col gap-y-4">
        <div></div>
        <p>title : {data.title}</p>
        <p>desc : {data.desc}</p>
      </div>
    </section>
  )
}
