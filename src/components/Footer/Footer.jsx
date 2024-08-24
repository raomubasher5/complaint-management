import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
         <div className="bg-background text-foreground py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-start">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <img src="https://suparco.gov.pk/wp-content/uploads/2019/08/logo.png" alt="Electro Logo" className="mb-4 Filter" />
                            <div className="flex space-x-4">
                                {/* <Link to={`#`} className="text-foreground hover:text-primary bg-blue-100 p-2 rounded-md text-blue-800"><FaFacebookF /></Link>
                                <Link to={`#`} className="text-foreground hover:text-primary bg-blue-100 p-2 rounded-md text-blue-800"><FaInstagram /></Link>
                                <Link to={`#`} className="text-foreground hover:text-primary bg-blue-100 p-2 rounded-md text-blue-800"><FaXTwitter /></Link>
                                <Link to={`#`} className="text-foreground hover:text-primary bg-blue-100 p-2 rounded-md text-blue-800"><FaPinterest /></Link> */}
                            </div>
                            <p className="mt-4 text-muted-foreground">© 2023 Electro. All Rights Reserved.</p>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="font-semibold mb-4">Get to Know Us</h3>
                            <ul className='text-gray-500 my-2' >
                                <li><Link  to={'/about'} className="text-foreground hover:text-primary ">About Us</Link></li>
                                <li><Link  to={'#'} className="text-foreground hover:text-primary ">News &amp; Blog</Link></li>
                                <li><Link  to={'#'} className="text-foreground hover:text-primary ">Careers</Link></li>
                                <li><Link  to={'/contact'} className="text-foreground hover:text-primary ">Contact Us</Link></li>
                                <li><Link  to={'#'} className="text-foreground hover:text-primary ">How To Shop</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="font-semibold mb-4">Orders &amp; Returns</h3>
                            <ul className='text-gray-500 my-2' >
                                <li><Link to={'#'} className="text-foreground hover:text-primary">Shipping &amp; Delivery</Link></li>
                                <li><Link to={'#'} className="text-foreground hover:text-primary">Return &amp; Exchange</Link></li>
                                <li><Link to={'#'} className="text-foreground hover:text-primary">Track Order</Link></li>
                                <li><Link to={'#'} className="text-foreground hover:text-primary">Selling Tips</Link></li>
                                <li><Link to={'#'} className="text-foreground hover:text-primary">Payment</Link></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="font-semibold mb-4">Contact</h3>
                            <ul className='text-gray-500 my-2' >
                                <Link to={'#'} className="flex items-center mb-2 gap-2">
                                    {/* <FaPhoneAlt /> */}
                                    <span>(702) 555-0122</span>
                                </Link>
                                <Link  to={'#'} className="flex items-center mb-2 gap-2">
                                    {/* <MdOutlineMailOutline /> */}
                                    <span>electro@example.com</span>
                                </Link>
                                <Link to={'#'} className="flex items-center gap-2">
                                    {/* <FaLocationDot /> */}
                                    <span>4517 Washington Ave. Manchester, Kentucky 495</span>
                                </Link >
                            </ul>
                        </div> to
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-8 border-t border-border pt-4">
                        <div className="flex space-x-4">
                            {/* <FaCcMastercard  className='text-3xl ' />
                            <SiPaypal className='text-3xl text-blue-800' />
                            <FaCcVisa className='text-3xl' />
                            <FaGooglePay className='text-3xl' /> */}
                        </div>
                        <div className="flex space-x-4 text-gray-500">
                            <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
                            <a href="#" className="text-muted-foreground hover:text-primary">Terms of Use</a>
                            <a href="#" className="text-muted-foreground hover:text-primary">Shipping Policy</a>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer
