import { ReactComponent as LibLogo } from "../../assets/img/main-lib-logo.svg";
import { ReactComponent as StudentAvatar } from "../../assets/img/home/student-portal.svg";
import { ReactComponent as FeePayment } from "../../assets/img/home/fee-payment.svg";
import { ReactComponent as UcbsLogo } from "../../assets/img/home/ucbs-logo.svg";
import { ReactComponent as HpuLogo } from "../../assets/img/home/hpu-logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <>

      <div className="font-outfit">

        {/* <!-- section 1 --> */}
        <section>
          
          <div className="w-full h-fit bg-home-bg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-auto bg-gradient-to-b from-[#0A433D] to-[#0a433d00]">
              <nav className="bg-transparent bg-opacity-20 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <LibLogo className="h-11 w-11" alt="UCBS Library Management System Logo"/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">UCBS Library</span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                  <Link to="/login" className="hidden md:block text-white bg-[#C21717] hover:bg-[#c21717e5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center">Log In</Link>
                  <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden bg-[#C21717] hover:bg-[#c21717e5] focus:outline-none focus:ring-2 focus:ring-[#C21717] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                </button>
                </div>
                <div className="hidden">
                  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:bg-opacity-20 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                      <div className="block py-2 px-3 text-white bg-[#0A433D] rounded md:bg-transparent md:text-[#C21717] md:p-0 md:dark:text-blue-500" aria-current="page">Home</div>
                      </li>
                      <li>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-[#C21717] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Book Inventory</div>
                      </li>
                      <li>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-[#C21717] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Defaulter List</div>
                      </li>
                      <li>
                      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-[#C21717] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</div>
                      </li>
                      <li className="mt-4">
                      <Link to="/login" className="block md:hidden text-white w-full bg-[#C21717] hover:bg-[#c21717e5] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#C21717] dark:bg-[#c21717e5] dark:focus:ring-[#C21717]">Log In</Link>
                    </li>
                    </ul>
                  </div>
                </div>
                </div>
              </nav>

              {/* <!-- headings and sub-headings --> */}
              <div className="py-[6rem]">
                <div className="w-full flex flex-col justify-center items-center gap-7 text-white px-[1.5rem]">
                  <div>University College of Business Studies</div>
                  <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <div className="border-t border-b py-2 text-[28px] font-semibold">हिमाचल प्रदेश विश्वविद्यालय</div>
                    <div>
                      <img className="w-[6rem] h-[6rem]" src="https://www.hpuniv.ac.in/images/hpu_logo.svg" alt="University College Of Business Studies"/>
                    </div>
                    <div className="border-t border-b py-2 text-[24px] font-medium">Himachal Pradesh University</div>
                  </div>
                  <div className="text-center">
                    <p>(A State Government University Accredited with 'A' grade by NAAC)</p>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                  <div className="font-medium text-white">A <span className="text-[#06FFFF]"><a href="https://digitcrib.com/" rel="noreferrer" target="_blank">DigitCrib</a></span> Solution.</div>
                  <div>
                    <h1 className="text-3xl font-bold text-white">The UCBS library is now available online.</h1>
                  </div>
                  <div>
                    <p className="text-[#dddddd] md:w-[384px]">The UCBS digital library provides students and faculty with an advanced method of managing book inventory online, allowing students to select from a wide range of books.</p>
                  </div>
                  
                </div>
                </div>
              </div>

            </div>
                
          </div>
        </section>
        

        {/* <!-- book search & filter --> */}
        <section>
        <div className="py-[64px]">
          <div className="px-[64px]">
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <div>
                <h3 className="text-2xl font-medium">Search Books</h3>
              </div>
              <div className="mt-4">							
                <form className="w-full mx-auto">
                  <div className="flex">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Course 
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BCA</button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BBA</button>
                      </li>
                      </ul>
                    </div>
                    <div className="relative w-full">
                      <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search For..." required />
                      <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>	
              </div>
            </div>
          </div>
        </div>

        </section>

        {/* <!-- academic block --> */}
        <section className="bg-gradient-to-t from-[#D78615] to-[#FBE194] ">
          <div className="py-[64px]">
            <div className="px-[48px]">
              <div className="flex flex-col justify-center items-center gap-14 bg-inherit">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="text-3xl font-semibold">ACADEMIC UNITS</div>
                  <hr className="bg-black text-black w-14 text-center h-1"/>
                </div>
                <div className="grid grid-cols-1 justify-items-center content-center gap-8 w-full">
                  <div className="w-full border-2 border-black rounded-lg p-8">
                    <a href="https://nstudentportal.hpushimla.in/" className="flex flex-col justify-center items-center gap-4">
                      <div ><StudentAvatar className="h-20 w-20"/></div>
                      <div className="text-center text-xl">Student Portal</div>	
                    </a>
                  </div>
                  <div className="w-full border-2 border-black rounded-lg p-8">
                    <a href="https://admissions.hpushimla.in/SemesterPaymentLoginOnline.aspx" className="flex flex-col justify-center items-center gap-4">
                      <div><FeePayment className="h-20 w-20"/></div>
                      <div className="text-center text-xl">Fee Payment</div>	
                    </a>
                  </div>	
                  <div className="w-full border-2 border-black rounded-lg p-8">
                    <a href="https://hpuniv.ac.in/university-detail/home.php?college-of-business-studies" className="flex flex-col justify-center items-center gap-4"> 
                      <div><UcbsLogo className="h-20 w-20"/></div>
                      <div className="text-center text-xl">UCBS Website</div>	
                    </a>
                  </div>												
                  <div className="w-full border-2 border-black rounded-lg p-8">
                    <a href="https://www.hpuniv.ac.in/" className="flex flex-col justify-center items-center gap-4">
                      <div><HpuLogo className="h-20 w-20"/></div>
                      <div className="text-center text-xl">HPU Website</div>	
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- social media --> */}
        <section>

        </section>

        {/* <!-- gov links carousel --> */}
        <section>
          <div className="py-[4rem]">
            <div>
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_8rem,_black_calc(100%-12.5rem),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/g20.png" alt="Facebook" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/gov.jpg" alt="Disney" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/hpgovernment.jpg" alt="Airbnb" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/indiagov.jpg" alt="Apple" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/mhrd.jpg" alt="Samsung" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/miety.jpg" alt="Quora" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/mygov.jpg" alt="Sass" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/nats.jpg" alt="Sass" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/ugc.jpg" alt="Sass" />
                  </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/g20.png" alt="Facebook" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/gov.jpg" alt="Disney" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/hpgovernment.jpg" alt="Airbnb" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/indiagov.jpg" alt="Apple" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/mhrd.jpg" alt="Samsung" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/miety.jpg" alt="Quora" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/mygov.jpg" alt="Sass" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/nats.jpg" alt="Sass" />
                  </li>
                  <li>
                    <img className="w-[96px] md:w-[128px] h-auto" src="../../assets/img/home/gov-carousel/ugc.jpg" alt="Sass" />
                  </li>
                </ul>        
              </div>
            </div>
          </div>
        </section>
      

      </div>

      {/* <!-- footer --> */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl px-[1.5rem] py-[2rem]">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center ">
                <LibLogo className="h-14 w-14" alt="UCBS Library Management System Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UCBS Library</span>
              </a>
            </div>
            <div className="grid grid-cols-2 justify-items-center content-center gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex sitems-center justify-center">
            <span className="text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="https://digitcrib.com/" className="hover:underline">DigitCrib™</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

      <script src="./script.js"></script>
      <script src="/node_modules/flowbite/dist/flowbite.min.js"></script>

    </>
  )
}

export default Home;