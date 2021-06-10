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
import Toast from '../src/components/toast/Toast'

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
  const [toastAction, setToastAction] = useState('')

  const createWorld = async (e: any) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/world', {
      title: e.target[0].value
    })
    if (res) {
      const newWorld: IWorld = res.data;
      setWorlds([...worlds, newWorld])
      setToastAction('createWorld')
      setShow(true)
    }
  }

  const deleteWorld = async (id: string, index: number) => {
    const res = await axios.delete(`http://localhost:3000/api/world/${id}`)
    if (res) {
      setWorlds(worlds.splice(index, 1))
      setToastAction('deleteWorld')
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
        <Toast action={toastAction} show={show} onClose={() => setShow(false)}/>
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