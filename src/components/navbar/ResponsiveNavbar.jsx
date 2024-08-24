import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const ResponsiveNavbar = ({setNavbar}) => {
    const categoryRef = useRef(null);
    const accountRef = useRef(null);
    const headerRef = useRef(null);


    const [isCategoriesDropdownVisible, setCategoriesDropdownVisible] = useState(false);
    const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
    const [userMenu, setUserMenu] = useState(false);


    const handleOnLogout = () => {
        setAuth({ ...auth, user: null, token: '' })
        localStorage.removeItem('auth')
    }

    const toggleCategoriesDropdown = () => {
        setCategoriesDropdownVisible(!isCategoriesDropdownVisible);
    };

    const toggleAccountDropdown = () => {
        setAccountDropdownVisible(!isAccountDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (categoryRef.current && !categoryRef.current.contains(event.target)) {
            setCategoriesDropdownVisible(false);
        }
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setAccountDropdownVisible(false);
        }
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setNavbar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <div ref={headerRef} >
                <nav className="fixed  border-b border-border  bg-white w-[40%] right-0 top-24 min-h-screen z-10">

                    {/* <div className="flex items-center justify-center flex-col space-x-4"> */}

                    <div className=" flex flex-col items-center font-semibold space-y-12">
                        <div>
                            <Link to="/complaint-registration" className="hover:text-primary">Complaint registration</Link>
                        </div>
                     
                        <div>
                                <Link to="/suppression-registration" className="block py-2 px-4 hover:bg-gray-200 text-[17px]">Suppression registration</Link>
                        </div>

                       
                        <div>
                                <Link to="/veiw-complain-log" className="block py-2 px-4 hover:bg-gray-200 text-[17px]">View complain log</Link>
                        </div>

                       
                        <div>
                                <Link to="/suppression-log" className="block py-2 px-4 hover:bg-gray-200 text-[17px]">Suppression log</Link>
                        </div>

                       
                        <div>
                                <Link to="/pending-complaints" className="block py-2 px-4 hover:bg-gray-200 text-[17px]">Pending complain</Link>
                        </div>

                       
                        <div>
                                <Link to="/resolved-complaints" className="block py-2 px-4 hover:bg-gray-200 text-[17px]">Resolved complaints</Link>
                        </div>

                       

                    </div>
                    {/* </div> */}
                </nav>
            </div>
        </>
    )
}

export default ResponsiveNavbar
