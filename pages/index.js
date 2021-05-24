import Link from 'next/link'
import axios from 'axios'
import { SortAscendingIcon, UsersIcon } from '@heroicons/react/solid'

const fetchWorlds = async () => axios.get('http://localhost:3000/api/cars')
  .then(res => ({
    error: false,
    cars: res.data,
  }))
  .catch(() => ({
      error: true,
      users: null,
    }),
  );

const createCar = async (car) => {
  const res = await axios.post('http://localhost:3000/api/cars', {
    title:"james"
  })
}

export default function Home(props) {
  console.log(props);
  return (
    <>
      <ul>
        
          {props.allWorlds.cars.map(car => (
            <li>
              <Link href="/b" as="/a">
                <a>{car.title}</a>
              </Link>
            </li>
          ))}

      </ul>
      <h1>
        Hello from next!
      </h1>
      <button onClick={() => createCar()}>Click me!</button>
      <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Search candidates
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="John Doe"
          />
        </div>
        <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Sort</span>
        </button>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps({ preview = null }) {
  const allWorlds = await fetchWorlds();
  return {
    props: { allWorlds, preview },
  }
}