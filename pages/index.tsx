import Link from 'next/link'
import axios from 'axios'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon, SortAscendingIcon, UsersIcon } from '@heroicons/react/solid'
import { IWorld } from '../src/models/World';
import { FormEvent, FormEventHandler, useState, Fragment } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import WorldTable from '../src/components/table/WorldTable'
import WorldCreateForm from '../src/components/form/WorldCreateForm';

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

const deleteWorld = async (id: string) => axios.post(`http://localhost:3000/api/world/delete/${id}`)
  .then(res => ({
    error: false,
  }))
  .catch(() => ({
    error: true,
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

  const createWorld = async (e: any) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/world', {
      title: e.target[0].value
    })
    if (res) {
      const newWorld: IWorld = res.data;
      setWorlds([...worlds, newWorld])
      setShow(true)
    }
  }

  const deleteWorld = async (id: string, index: number) => {
    const res = await axios.delete(`http://localhost:3000/api/world/${id}`)
    if (res) {
      setWorlds(worlds.splice(index, 1))
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
          <WorldCreateForm createWorld={createWorld}></WorldCreateForm>
          <div className="mt-10 max-w-xl text-sm text-gray-500">
          </div>
          <WorldTable action={deleteWorld} worlds={worlds}></WorldTable>
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
    </div>
  )
}

export async function getServerSideProps({ preview = null}) {
  const worlds = await fetchWorlds();
  return {
        props: { worlds, preview},
  }
}