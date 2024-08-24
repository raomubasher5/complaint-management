import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            <div>
                <nav className="flex md:flex-row items-center justify-between py-4 px-12 border-b border-border fixed bg-white w-full z-10 top-0 ">
                    <div className="text-3xl font-bold mb-4 md:mb-0 md:mr-4"><img src="https://suparco.gov.pk/wp-content/uploads/2019/08/logo.png " className='Filter w-[80%]' alt="" /></div>

                    <div className="flex items-center space-x-4">
                        <div onClick={()=>setNavbar(true)} className="flex items-center md:hidden">
                            <button id="menu-toggle" className="block text-primary hover:text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/complaint-registration" className="hover:text-primary">Complaint registration</Link>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/suppression-registration" className="hover:text-primary">Suppression registration</Link>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/veiw-complain-log" className="hover:text-primary">View complain log</Link>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/suppression-log" className="hover:text-primary">Suppression log</Link>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/pending-complaints" className="hover:text-primary">Pending complain
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center font-semibold space-x-12 hover:bg-slate-200 hover:p-3 p-3 hover:rounded-lg">
                            <Link to="/resolved-complaints" className="hover:text-primary">Resolved complaints</Link>
                        </div>
                    </div>
                </nav>
                {navbar &&
                    <div className='md:hidden '>
                        <ResponsiveNavbar setNavbar={setNavbar}/>
                    </div>

                }
            </div>
        </>
    )
}

export default Navbar
