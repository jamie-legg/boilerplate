import Layout from "../src/components/layout/Layout";
import Sidebar from "../src/components/sidebar/Sidebar";

export default function Login() {
    return (
      <Layout>
        <Sidebar visible={true}>
      <div className="min-h-screen flex flex-col justify-center py-10 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-7 w-auto"
            src="https://cdn.discordapp.com/attachments/777348614778388483/847526493394829412/projectyblack3.png"
            alt="project y"
          />
          <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
  
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="/auth" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
  
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Discord</span>
                    <svg  fill="currentColor" className="w-6 h-6" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 386 203C 387 203 388 203 388 203C 388 203 395 212 395 212C 267 248 209 304 209 304C 209 304 224 296 250 284C 326 250 386 241 411 239C 415 238 419 238 423 238C 466 232 515 231 566 236C 633 244 705 264 779 304C 779 304 723 251 603 214C 603 214 612 203 612 203C 612 203 709 201 811 277C 811 277 913 462 913 689C 913 689 853 792 697 797C 697 797 671 767 650 740C 743 714 778 656 778 656C 749 675 721 688 697 697C 661 712 627 722 594 728C 526 740 464 737 411 727C 371 719 336 708 307 697C 291 690 273 682 255 673C 253 671 251 670 249 669C 248 668 247 668 246 667C 233 660 226 655 226 655C 226 655 260 711 350 738C 329 765 303 797 303 797C 146 792 87 689 87 689C 87 462 189 277 189 277C 284 206 375 203 386 203C 386 203 386 203 386 203M 368 467C 327 467 296 502 296 545C 296 588 328 624 368 624C 408 624 440 588 440 545C 441 502 408 467 368 467C 368 467 368 467 368 467M 626 467C 586 467 554 502 554 545C 554 588 586 624 626 624C 666 624 698 588 698 545C 698 502 666 467 626 467C 626 467 626 467 626 467"/></svg>
                  </a>
                </div>
  
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Spotify</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 50 50" fill="currentColor" className="w-6 h-6" aria-labelledby="title"
                    role="img">
                    <path data-name="layer1"
                    d="M32 0a32 32 0 1 0 32 32A31.966 31.966 0 0 0 32 0zm12.3 47.2a2.654 2.654 0 0 1-1.4-.5 32.041 32.041 0 0 0-16.6-4.3 48.082 48.082 0 0 0-10.1 1.1 11.045 11.045 0 0 1-1.6.3 2 2 0 0 1-2-2 2.11 2.11 0 0 1 1.7-2.2 53.9 53.9 0 0 1 12-1.4A35.787 35.787 0 0 1 44.9 43a2.131 2.131 0 0 1 1.3 2.1 1.846 1.846 0 0 1-1.9 2.1zm3.5-8.5a2.834 2.834 0 0 1-1.6-.6A41.422 41.422 0 0 0 25.9 33a43.3 43.3 0 0 0-10.4 1.3 4.707 4.707 0 0 1-1.6.4 2.476 2.476 0 0 1-2.5-2.5 2.6 2.6 0 0 1 2-2.7A43.762 43.762 0 0 1 26 27.7a44.707 44.707 0 0 1 22.8 5.9 2.583 2.583 0 0 1 1.5 2.5 2.5 2.5 0 0 1-2.5 2.6zm4-9.8a3.022 3.022 0 0 1-1.6-.5C44.3 24.9 35.3 23 26.7 23a49.826 49.826 0 0 0-12.8 1.5 9.005 9.005 0 0 1-1.6.3 3.031 3.031 0 0 1-3-3.1 3.213 3.213 0 0 1 2.2-3.1 55.906 55.906 0 0 1 15.2-2c9.4 0 19.3 1.9 26.5 6.2a3.025 3.025 0 0 1 1.6 2.9 3.058 3.058 0 0 1-3 3.2z"
                    ></path>
                    </svg>
                  </a>
                </div>
  
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Sidebar>
      </Layout>
    )
  }