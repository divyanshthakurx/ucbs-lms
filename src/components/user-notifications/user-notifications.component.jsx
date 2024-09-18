const UserNotifications = () => {

    return(
        <>
            <main className="pb-4 px-4 md:ml-64 h-full pt-20">

                <div className="mb-4 h-full">

                    <div>
                        <div className="py-[2rem]">
                            <div className="px-[2rem]">
                                <div>
                                    <h1 className="text-4xl font-bold">Book Issued & Returned History.</h1>
                                </div>                  
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-[2rem] md:px-0 lg:px-[2rem]">   
                        <div className="relative overflow-x-auto overflow-y-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="text-center">                                      
                                        <th scope="col" className="px-6 py-3">
                                            Book Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Issued Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Return Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                        
                                        <td className="px-6 py-4">
                                            How to Build
                                        </td>
                                        <td className="px-6 py-4">
                                            21/04/2024
                                        </td>
                                        <td className="px-6 py-4">
                                            28/04/2024
                                        </td>
                                    </tr>                                               
                                </tbody>                               
                            </table>
                        </div>
                    </div> 
                </div>

            </main>
        </>
    )
}

export default UserNotifications;