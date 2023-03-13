import Navbar from "../components/Navbar";

function Register() {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <Navbar />
      <main
        className="flex flex-1 items-center justify-center px-4 sm:px-12
         lg:col-span-8 lg:py-8 lg:px-16 xl:col-span-8"
      >
        <div class="md:min-w-[40rem] lg:w-[45%] sm:w-full border-solid py-8 px-6 bg-white min-w-[24rem]
         drop-shadow-xl rounded-xl mb-24">
          <form className="grid grid-cols-12 gap-2">
            <div class="col-span-12 sm:col-span-6">
              <label
                class="block text-sm font-medium text-black"
              >
                First Name
              </label>

              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm
                 text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label
                className="block text-sm font-medium text-black"
              >
                Last Name
              </label>

              <input
                type="text"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>

            <div className="col-span-12">
              <label
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>

            <div className="col-span-12">
              <label
                className="block text-sm font-medium text-black"
              >
                Password
              </label>

              <input
                type="password"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
              />
            </div>

            <div className="col-span-12">
              <label
                className="block text-sm font-medium text-black"
              >
                Confirm Password
              </label>

              <input
                type="password"
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

            <div
              className="col-span-12 min-w-full block text-left mt-4"
            >
              <input
                type="checkbox"
                className="h-5 w-5 mr-4 rounded-md border-gray-400 bg-white shadow-sm"
              />
              <span className="">
                By signing up, I agree to the <a className="underline text-blue-700" href="/policy">terms and conditions</a>
              </span>
            </div>

            <div className="col-span-12 mt-4 grid grid-cols-12">
              <span className="col-span-12 sm:col-span-6 text-left py-2">
                Already have an account? <a className="underline text-blue-700" href="/login">Sign in here.</a>
              </span>
              <a
                href="#"
                className="col-span-12 sm:col-span-6 whitespace-nowrap border-green-700 bg-white border-solid border-2
                 text-green-700 px-4 py-2 rounded ml-auto hover:bg-green-700
                  hover:text-white transform active:scale-90
                   transition-transform duration-300"
              >
                Create Account
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
