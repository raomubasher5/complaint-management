import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, fireDB } from '../firebase/FirebaseConfig';


const Signup = () => {
    const [credential, setCredential] = useState({ name: "", email: "", username: "", password: "", role: 'user' });
    const [password, setPassword] = useState(true);
    const navigate = useNavigate();

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const userSignupFuntion = async(e)=> {
        e.preventDefault();
        if (credential.name === '' || credential.email === '' || credential.password === "") {
            toast.error("All fields are required");
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth , credential.email , credential.password);

            const user = {
                name: credential.name,
                email: credential.email,
                uid: users.user.uid,
                role: credential.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    'en-US',
                    {
                        month: 'short',
                        day: "2-digit",
                        year: "numeric" 
                    }
                )
            }

            //create user Reference
            const userReference = collection(fireDB , "user");

            //add user Detail
            addDoc(userReference , user);

            toast.success("User Login Successfully");

            navigate('/login')

        } catch (error) {
            toast.error('Something went wronge');
            console.log(error);
            
        }
      
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-background pt-20 ">
                <div className="bg-card dark:bg-card p-8 rounded-lg shadow-l bg-blue-gray-100 bg-slate-100 w-full max-w-md flex flex-col items-">
                    {/* <h1 className="text-2xl text-center font-bold mb-4"><img className='h-20 w-20' src="/logo.png" alt="" /></h1> */}
                    <div className='w-full flex  justify-center my-3'>
                        <img src="https://suparco.gov.pk/wp-content/uploads/2019/08/logo.png" className='Filter w-1/2 text-center' alt="" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Welcome to the <span className="text-blue-500 dark:text-blue-400">(SUPARCO)</span></h2>
                    <p className="text-2xl font-bold mb-6">create your account</p>
                    <form onSubmit={userSignupFuntion} className="w-full">
                        <div className="mb-4">
                            <input type="text" placeholder="Full Name" name='name' onChange={onChange} value={credential.name} className="w-full p-3    border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Email" name='email' onChange={onChange} value={credential.email} className="w-full p-3   border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400" />
                        </div>
                        <div className="mb-4 relative">
                            <input
                                onChange={onChange} value={credential.password} type={password ? 'password' : 'text'} name="password" placeholder="Password"
                                className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 pr-10"
                            />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400 dark:text-zinc-500" >
                                <span onClick={() => setPassword(!password)} className='pr-4 inline-block' >{password ? <FaRegEye /> : <FaRegEyeSlash />}  </span>
                            </button>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 dark:bg-blue-500 text-white dark:text-white p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600">Create Account</button>
                        <p className="text-center mt-4 text-sm text-blue-500 dark:text-blue-400 hover:underline">Forgot your password?</p>
                    </form>
                    <div className="text-center mt-4 text-sm text-primary dark:text-primary-foreground">
                        By continuing, you agree to Suparco's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
                        <hr className="my-4 border-t border-gray-400" />
                        <Link to="/login" className="text-blue-500 block">Already on Suparco? Login</Link>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Signup
