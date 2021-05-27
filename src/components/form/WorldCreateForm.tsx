import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

interface IWorldCreateFormProps {
    createWorld: any
}

interface IWorldBuilderOption {
    name: string,
    description: string,
    default: any
}

const options: IWorldBuilderOption[] = [
    {
        name: "Streams",
        description: "The amount of parallel ideas you would like your world to be able to sustain.",
        default: 3
    },
    {
        name: "Theme",
        description: "Pick a colour to begin generating a theme based on your configuration.",
        default: 0xffffff
    }
]

export default function WorldCreateForm({ createWorld }: IWorldCreateFormProps) {
    return (
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
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
        ${open ? '' : 'text-opacity-50'}
        text-indigo-700 group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span>World Builder</span>
                            <ChevronDownIcon
                                className={`${open ? '' : 'text-opacity-70'}
          ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                        {options.map((item,index) => (
                                            <div key = {index} className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {item.description}
                                                </p>
                                                <input
                                                    type="text"
                                                    name="world"
                                                    id="world"
                                                    className="mt-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder={item.default}
                                                />
                                            </div>

                                        ))}
                                    </div>
                                    <div className="p-4 bg-gray-50">
                                        <a
                                            href="##"
                                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <span className="flex items-center">
                                                <span className="text-sm font-medium text-gray-900">
                                                    Configuration Preview
                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </form>
    )
}