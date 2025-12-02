import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todoSlice'

export default function Form() {
  const dispatch = useAppDispatch()

  function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const title = (form.elements.namedItem('title') as HTMLInputElement).value
    const description = (
      form.elements.namedItem('description') as HTMLInputElement
    ).value
    if (title.length === 0 || description.length === 0) {
      console.log('failed to add data')
      return
    }
    dispatch(
      addTodo({
        title,
        desc: description,
      })
    )
  }

  return (
    <div className="z-40 absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="p-4 bg-linear-to-r from-cyan-400 to-lime-400 text-white rounded-sm">
        <form
          onSubmit={HandleSubmit}
          className="grid grid-cols-1 gap-4 max-w-[400px]"
        >
          <div>
            <label>Title: </label>
            <input
              className="w-full border border-neutral-100/30 p-2 focus:outline-none focus:ring-0"
              type="text"
              placeholder="example : designing website"
              id="title"
              name="title"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              className="w-full border border-neutral-100/30 p-2 focus:outline-none focus:ring-0"
              type="text"
              placeholder="example : creating design with figma"
              id="description"
              name="description"
            />
          </div>

          <button className="mt-4 bg-white p-2 text-neutral-400 rounded-3xl text-sm">
            Submit Todo
          </button>
        </form>
      </div>
    </div>
  )
}
