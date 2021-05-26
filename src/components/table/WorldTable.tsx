import { IWorld } from "../../models/World";

interface IWorldTable {
  worlds: IWorld[]
  action: any
}

export default function WorldTable({ worlds, action } : IWorldTable ) {
    return (
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      World
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Owner
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {worlds.map(({avatarUrl, tagline, title, owner, status, _id}, index) => {
                    const parsedWorld = {
                      id: _id || "",
                      title: title || "The New World",
                      avatarUrl: avatarUrl || "https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png",
                      tagline: tagline || "Say hello to the future.",
                      status: status || "DEAD",
                      owner: owner || {
                        name:"Jamie Legg",
                        status: "Just chilling honestly"
                      }
                    }
                    return(
                    <tr key={parsedWorld.id}>
                      <td className="pl-5 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10">
                            <img className="h-10 rounded-full" src={parsedWorld.avatarUrl} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{parsedWorld.title}</div>
                            <div className="text-sm text-gray-500">{parsedWorld.tagline}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{parsedWorld.owner.name}</div>
                        <div className="text-sm text-gray-500">{parsedWorld.owner.status}</div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {parsedWorld.status}
                        </span>
                      </td>
                      <td className="py-4 whitespace-nowrap text-sm text-gray-500">Member</td>
                      <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button onClick={() => action(parsedWorld.id, index)}>
                          <a href="#" className="text-red-600 hover:text-red-900">
                            Delete
                          </a>
                        </button>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }