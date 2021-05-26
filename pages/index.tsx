import Link from 'next/link'
import axios from 'axios'
import { Transition } from '@headlessui/react'
import { SortAscendingIcon, UsersIcon } from '@heroicons/react/solid'
import { IWorld } from '../src/models/World';
import { FormEvent, FormEventHandler, useState, Fragment } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'

const fetchWorlds = async () => axios.get('http://localhost:3000/api/world')
  .then(res => ({
    error: false,
    worlds: res.data,
  }))
  .catch(() => ({
      error: true,
      worlds: null,
    }),
  );

interface IHomeProps {
  worlds: {
    worlds: IWorld[],
    error: boolean
  }
  user: any
}

interface WorldFormEvent extends FormEvent {
  target: {
    name: {
      value: string
    }
  }
}

export default function Home(props: IHomeProps) {
  const [worlds, setWorlds] = useState(props.worlds.worlds)
  const [show, setShow] = useState(false)
  
  const createWorld = async (e:any) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/world', {
      title:e.target[0].value
    })
    if(res) {
      const newWorld: IWorld = res.data;
      setWorlds([...worlds, newWorld])
      setShow(true)
    }
  }
  const [error, setError] = useState(props.worlds.error)
  return (
      <div className="max-w-3xl mx-auto">
      <div className="bg-white my-7 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Create a world</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>The name of your world will project your entire vision to the wider community, think carefully!</p>
        </div>
        <form onSubmit={createWorld} className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="world" className="sr-only">
              World
            </label>
            <input
              type="text"
              name="world"
              id="world"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="My New World"
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Create
          </button>
        </form>
      </div>
      <ul>
          {worlds.map((world: IWorld, index) => (
            <li key={index}>
              <Link href="/b" as="/a">
                <a>{world.title}</a>
              </Link>
            </li>
          ))}
        </ul>
    </div>
          {/* Global notification live region, render this permanently at the end of the document */}
          <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Successfully created!</p>
                    <p className="mt-1 text-sm text-gray-500">Your world has been published.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ preview = null }) {
  const worlds = await fetchWorlds();
  return {
    props: { worlds, preview },
  }
}