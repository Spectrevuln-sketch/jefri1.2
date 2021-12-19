import React, { useState } from 'react'
import tw from 'twin.macro'
import { useNavigate, NavLink } from 'react-router-dom';
import { DashboardCard, InputData } from '../../../Components'
import axios from 'axios'
import Swal from 'sweetalert2'

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
hover:scale-y-110
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

const AdminKomisi = () => {
    const [access, setAccess] = useState()
    const [min_harga, setMin_harga] = useState('')
    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */
    const OnSubmit = async (e) => {
        e.preventDefault();
        await api.post('/create-komisi-akses', {
            access,
            min_harga
        })
            .then(res => {
                Swal.fire(
                    'Berhasil Tambah Data',
                    `${res.data.message}`,
                    'success'
                )
            }).catch(err => {
                if (err.response !== undefined) {
                    Swal.fire(
                        'Berhasil Tambah Datas',
                        `${err.response.data.message}`,
                        'success'
                    )
                }
            })
    }

    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className='flex flex-row mb-6 justify-around relative'>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="" >Manage Commission</NavLink>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="pendukung" >Commision Board</NavLink>
                </div>
                {/* Tab Component */}
                <DashboardCard className="md:w-max xl:w-full mb-12 xl:mb-5 px-4">
                    <TitleCard>
                        Atur Komisi
                    </TitleCard>
                    <ChildCard>
                        <Form onSubmit={OnSubmit}>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p className="text-sm">
                                        Status Komisi
                                    </p>
                                </span>
                                {/* CHECK BOX */}
                                <div class="flex items-center gap-8">
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={() => setAccess(true)} />
                                        <span class="ml-2 text-gray-700">
                                            Open
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={() => setAccess(false)} />
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
                                <InputData type="text" placeholder="Rp. 50.000" onChange={(e) => setMin_harga(e.target.value)} />
                            </FormChild>
                            <button type="submit" className="bg-blue-400 hover:bg-green-400 text-white py-2">Submit</button>
                        </Form>

                    </ChildCard>

                </DashboardCard>

                {/* Revenue */}
            </div>
        </>
    )
}

export default AdminKomisi
