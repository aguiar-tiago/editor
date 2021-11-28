import { signIn } from "next-auth/client";

const Login = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 max-w-3xl mx-auto font-mono">
                <div className="border-2 w-full rounded flex flex-col items-center p-20 shadow-lg bg-gray-100">
                    <div className="flex flex-col justify-center w-full items-center mb-20">
                        <img
                            src="https://tiago.proposify.com/files/cache/system/img/proposify-wordmark-with-cup.svg"
                            className="object-contain h-auto w-1/3"
                        />
                    </div>
                    <form action="" className="w-full">
                        <div className="my-5 text-sm">
                            <label for="username" className="block text-black">Username</label>
                            <input type="text" autoFocus id="username" className="bg-white rounded-sm px-4 py-3 mt-3 focus:outline-none  w-full" placeholder="Username" />
                        </div>
                        <div className="my-5 text-sm">
                            <label for="password" className="block text-black">Password</label>
                            <input type="password" id="password" className="bg-white rounded-sm px-4 py-3 mt-3 focus:outline-none  w-full" placeholder="Password" />
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                            <a href="#">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
                    </form>

                    <div class="flex md:justify-between justify-center items-center mt-10 w-full">
                        <div style={{"height": "1px;"}} class="bg-gray-300 md:block hidden w-4/12"></div>
                        <p class="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
                        <div style={{"height": "1px;"}} class="bg-gray-300 md:block hidden w-4/12"></div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-2 mt-7">
                        <div>
                            <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                        </div>
                        <div>
                            <button className="text-center w-full text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-500" onClick={signIn}>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;