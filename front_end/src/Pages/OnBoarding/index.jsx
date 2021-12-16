import React from 'react'
import { Link } from 'react-router-dom';
import { Chart, ProfileCard, DashboardCard } from '../../Components'
import tw from 'twin.macro'


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


const OnBoarding = () => {






    return (
        <>
            <div className="flex flex-wrap mt-4">
                {/* Chart Card */}
                <DashboardCard className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <Chart />
                </DashboardCard>
                {/* End Chart Card */}
                <ProfileCard className="justify-center items-center relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white pb-5">
                    <ProfileContent>
                        <div className='bg-gradient-to-tr from-indigo-600 via-pink-400 to-green-500 h-32 w-32 rounded-full flex justify-center items-center'>
                            {/* Profile */}
                            <img src="https://images.unsplash.com/photo-1639410476622-1a91d655f052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="ring-gray-50 ring-4 w-28 h-28 rounded-full" alt='Image' />
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <p className='text-sm'>Gerry Raditya Kusmana Yahya</p>
                            <Link className='text-sm hover:text-blue-800' to="">arxist.com/GerryRadityaKusmanaYahya</Link>
                            <ButtonAnimate>
                                Share
                            </ButtonAnimate>
                        </div>
                    </ProfileContent>
                </ProfileCard>
                <DashboardCard className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
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

export default OnBoarding
