import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { DashboardCard, InputData, ButtonBlock } from '../../Components'
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
my-4
rounded-md
cursor-pointer
border-2
border-blue-200
`;

const Form = tw.form`
w-full
flex
flex-col
justify-between
`;


const FormChild = tw.div`
flex
flex-row
justify-between
w-full
my-4
`;

const SpanLink = `
text-white 
bg-opacity-50 
p-2 
rounded-full 
font-bold mx-2
cursor-pointer
hover:bg-gray-200
`;
const SpanLinkActive = `
text-white 
bg-white 
bg-opacity-50 
p-2 
rounded-full 
font-bold mx-2
cursor-pointer
hover:bg-gray-200
`;

const KomisiPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-wrap">
                <div className='flex flex-row mb-6 justify-around relative'>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="" >Manage Commision</NavLink>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="pendukung" >Commision Board</NavLink>
                </div>
                {/* Tab Component */}
                <DashboardCard className="md:w-max xl:w-full mb-12 xl:mb-5 px-4">
                    <TitleCard>
                        Komisi di akunmu
                    </TitleCard>
                    <ChildCard>
                        <Form>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'>Status Komisi</h6>
                                    <p>Berlaku untuk segala jenis komisi</p>
                                </span>
                                <div class="flex items-center gap-8">
                                    {/* Loop Data */}
                                    <label class="inline-flex items-center">
                                        <InputData type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                                        <span class="ml-2 text-gray-700">
                                            Open
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <InputData type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                                        <span class="ml-2 text-gray-700">
                                            Close
                                        </span>
                                    </label>

                                </div>
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'>Min. Harga Request Komisi</h6>
                                    <p className="text-sm">
                                        Pembeli hanya dapat merequest Komisi dengan minimum harga yang telah diatur
                                    </p>
                                </span>
                                <InputData type="text" placeholder="Rp." />
                            </FormChild>
                            <ButtonBlock label="Save" className="bg-green-500 p-2 rounded-md text-white float-right" />
                        </Form>

                    </ChildCard>

                </DashboardCard>

                {/* Revenue */}
            </div>
        </>
    )
}

export default KomisiPage
