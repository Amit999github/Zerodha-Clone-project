import React from 'react'

function Brokerage() {
    return ( 
        <div className="container pb-5 mb-5">
                        <div className="row px-5">
                <h2 className='pb-5'>Charges for account opening</h2>
                <table className='border fs-6'>
                    <thead className='border-bottom' style={{fontWeight:"500"}}>
                        <tr>
                            <th>Type of account</th>
                            <th className='text-center'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=''>Online account</td>
                            <td className='text-center'>
                                <span className='bg-success text-white'>Free</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Ofline account</td>
                            <td className='text-center'>
                                <span className='bg-success text-white'>Free</span>
                            </td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td className='text-center'>&#8377; 500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className='text-center' >&#8377;    500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Brokerage;