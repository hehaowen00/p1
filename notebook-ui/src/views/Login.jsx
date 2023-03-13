import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <Navbar />
      <main
        className="flex flex-1 items-center justify-center px-4 sm:px-12
         lg:col-span-8 lg:py-8 lg:px-16 xl:col-span-8"
      >
        <div class="lg:w-[40%] md:min-w-[40rem] sm:w-full border-solid py-8 px-6 bg-white
         drop-shadow-xl rounded-xl mb-24">
          <form className="grid grid-cols-12 gap-2">
            <div class="col-span-12">
              <label for="Email" class="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>

            <div class="col-span-12">
              <label
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>

            <div className="col-span-12">
              <label className="float-right">
              <input
                type="checkbox"
                className="h-5 w-5 mr-2 rounded-md border-gray-400 bg-white shadow-sm"
              />
              <span className="py-4 text-sm">Show Password</span>
              </label>
            </div>

            <div className="col-span-12 mt-4 grid grid-cols-12">
              <span className="col-span-12 sm:col-span-7 text-left py-2">
                Don't have an account? <a className="underline text-blue-700" href="/register">Create one here.</a>
              </span>
              <a href="/app" className="col-span-12 sm:col-span-5
               border-blue-700 bg-white border-solid border-2 text-blue-700 px-4
                py-2 rounded ml-auto hover:bg-blue-700 hover:text-white
                transform active:scale-90 transition-transform duration-300">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
