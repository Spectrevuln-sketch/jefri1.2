import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { DashboardCard, InputData } from '../../../Components'
import tw from 'twin.macro'
import { MdSettingsApplications } from 'react-icons/md';
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

const TipTab = () => {
    const navigate = useNavigate()
    const [nilai, setNilai] = useState('')
    const [pesan, setPesan] = useState('')

    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */


    const onSubmit = async (e) => {
        e.preventDefault();
        await api.post('/create-new-tip', {
            harga_per_unit: nilai,
            pesan_halaman_tip: pesan,
        }).then(res => {
            if (res.status === 200) {
                Swal.fire(
                    'Berhasil Tambah Data',
                    `${res.data.message}`,
                    'success'
                )
            }
        }).catch(err => {
            if (err.response !== undefined) {
                Swal.fire(
                    'Gagal Tambah Komisi',
                    `${err.response.data.message}`,
                    'error'
                )
            }
        })
    }


    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className='flex flex-row mb-6 justify-around relative'>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="" >Atur Tip</NavLink>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="pendukung" >Para Pendukung</NavLink>
                </div>
                {/* Tab Component */}
                <DashboardCard className="md:w-max xl:w-full mb-12 xl:mb-5 px-4">
                    <TitleCard>
                        Atur Pendukung Tip
                    </TitleCard>
                    <ChildCard>
                        <Form onSubmit={onSubmit}>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'>Harga tip per unit</h6>
                                    <p>Rekomendasi: pasang nilai sekecil mungkin agar memberikan opsi yang fleksibel ke pendukung</p>
                                </span>
                                <InputData type="text" placeholder="Rp." onChange={(e) => setNilai(e.target.value)} />
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'>Pesan di halaman Tip</h6>
                                    <p className="text-sm">
                                        Akan muncul dekat dengan form tempat pendukungmu memberikan tip
                                    </p>
                                </span>
                                <InputData type="text" placeholder="Terima Kasih Sudah Memberikan Tip" onChange={(e) => setPesan(e.target.value)} />
                            </FormChild>
                            <button type="submit" className="bg-blue-400 hover:bg-green-500  text-white py-2 transition hover:scale-y-110 delay-150"> Submit</button>
                        </Form>

                    </ChildCard>

                </DashboardCard>

                {/* Revenue */}
            </div>
        </>
    )
}

export default TipTab
