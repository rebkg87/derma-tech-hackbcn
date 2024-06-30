
const Login = () => {
    return (
        <div className="pt-14 bg-gradient-to-t from-rose-200 to-pink min-h-screen w-screen flex flex-col justify-center items-center">
            <div className="bg-white shadow-lg px-12 w-2/6 h-screen sm:h-auto py-8 rounded-xl">
                <div className="text-center w-full font-bold text-3xl text-pink p-4">
                    LOGIN
                </div>
                <div
                    className="w-full bg-gray-200 my-3 h-1"
                ></div>
                <form>
                    <div className="flex flex-col gap-4 px-0 py-4">
                        <div>
                            <label className="text-pink">Email address</label>
                            <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-ligth-gray absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input
                                className="py-2 pl-10 border border-gray-200 w-full"
                                placeholder="Email address"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="text-pink">Password</label>
                            <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-ligth-gray absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <input
                                className="py-2 pl-10 border border-gray-200 w-full"
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <button
                                className="border border-pink hover:bg-pink hover:text-white duration-100 ease-in-out w-6/12 text-pink p-0 flex flex-row justify-center items-center gap-1"
                                type="submit"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg> Login
                            </button>
                            <button className="border border-pink hover:bg-pink hover:text-white duration-100 ease-in-out w-6/12 text-pink p-2 flex flex-row justify-center items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg> Sign-up
                            </button>
                        </div>
                        <div className="my-2 flex flex-row justify-center">
                            <span className="absolute bg-white px-4 text-pink">or</span>
                            <div
                                className="w-full bg-gray-200 mt-3 h-1"
                            ></div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <button onClick={() => {window.open = ('https://accounts.google.com/', '_blank'); }}   className="bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                                <svg aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                                Sign-in with Google
                            </button>
                            <button onClick={() => { window.open('https://www.facebook.com/', '_blank'); }} className="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out">
                                <svg aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" fill="currentColor" /></svg>
                                Sign-in with Facebook
                            </button>
                        </div>
                        <div className="w-full flex flex-row justify-end text-pink">
                            <a href="#">Forgot password</a>
                        </div>
                    </div>
                </form>
            </div>
            <div className="p-4 text-[0.7em] text-pink">© DERMATECH 2024</div>
        </div>
    )
}

export default Login