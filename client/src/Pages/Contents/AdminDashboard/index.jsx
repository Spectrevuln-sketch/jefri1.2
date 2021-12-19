import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import { DashboardCard, Chart, } from '../../../Components';

const ProfileContent = tw.div`
flex 
flex-col
justify-center
items-center
opacity-60
`;

const ButtonAnimate = tw.button`
transition
ease-in-out
delay-150
bg-blue-500
hover:-translate-y-1
hover:scale-110
hover:bg-indigo-500
text-white
w-full
rounded
duration-300
bg-opacity-75
my-3.5
`;
const TitleCard = tw.h6`
flex
flex-row
justify-between
items-start
pl-4
font-extrabold
text-gray-500
text-xl
`;


const ChildCard = tw.div`
flex
flex-col
items-start
bg-gray-100
hover:bg-gray-200
w-auto
transition
hover:scale-75
ease-in-out
delay-150
p-4
mx-5
my-2
rounded-md
cursor-pointer
`;




const AdminDashboard = () => {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                {/* Chart Card */}
                <DashboardCard className="lg:w-full md:w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <Chart />
                </DashboardCard>
                {/* End Chart Card */}

                <DashboardCard className="lg:w-full md:w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <TitleCard>
                        Siapkan Halaman
                    </TitleCard>
                    <ChildCard>
                        <span className='text-gray-400 text-sm font-sans'>Rekomendasi</span>
                        <span className='text-gray-700 text-md font-sans font-bold'>Bangun Profil</span>
                    </ChildCard>
                    <ChildCard>
                        <span className='text-gray-400 text-sm font-sans'>Rekomendasi</span>
                        <span className='text-gray-700 text-md font-sans font-bold'>Bagikan Halaman Kamu</span>
                    </ChildCard>
                </DashboardCard>

                {/* Revenue */}
            </div>
        </>
    )
}

export default AdminDashboard
