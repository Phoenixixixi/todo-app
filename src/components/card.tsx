import type { Todo } from '../features/todoSlice'
type CardProps = {
  data: Todo
}

export default function Card({ data }: CardProps) {
  return (
    <section className="rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="bg-linear-to-r from-cyan-300 to-lime-300 p-2 text-white font-semibold text-lg">
        {data.id}
      </div>
      <div className="p-2 flex flex-col gap-y-4">
        <p>title : {data.title}</p>
        <p>desc : {data.desc}</p>
      </div>
    </section>
  )
}
