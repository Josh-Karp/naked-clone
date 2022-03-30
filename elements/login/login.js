// import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
    return (
        <>
            <div className="bg-dark-purple min-h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto w-3/4"
                            src="hero.png"
                            alt="Hero"
                        />
                        <h2 className="mt-6 text-center text-3xl font-thin text-white"><span className="font-bold">Log in</span> to your <br /> Naked account.</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-light-purple mb-6 h-14 purple-400 rounded-2xl appearance-none relative block text-center w-full px-3 py-2 placeholder-light-grey text-white focus:border-highlight-turquoise"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="h-14 bg-light-purple rounded-2xl appearance-none relative block text-center w-full px-3 py-2 placeholder-light-grey text-white focus:border-highlight-turquoise"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="turquoise-400 h-16 relative w-3/4 flex items-center justify-center py-2 px-4 border border-transparent rounded-full text-light-grey bg-highlight-turquoise focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                                </span>
                                Log in
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <a href="#" className="font-bold text-highlight-turquoise hover:text-white">
                                Forgotten password?
                            </a>
                        </div>
                        <div className="flex items-end justify-center">
                            <a href="#" className="text-light-grey">
                                Don't have an account yet? <a className="font-bold text-highlight-turquoise hover:text-white">Sign up.</a>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}