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



const AturHalaman = () => {
    // state
    // state Upload
    const [upload_background, setImageFileBack] = useState('');
    const [image_name_back, setImageNameBack] = useState('');
    const [imageSrc_back, setImageSrcBack] = useState(undefined);
    const [upload_picture, setImageFilePro] = useState('');
    const [image_name_pro, setImageNamePro] = useState('');
    const [imageSrc_pro, setImageSrcPro] = useState(undefined);

    const [nama_akun, setNama_akun] = useState('')
    const [location, setLocation] = useState('')
    const [role, setRole] = useState('')
    /* ----------------------------- AXIOS INSTANCE ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true,
    })
    /* ----------------------------- End AXIOS INSTANCE ----------------------------- */
    const OnSubmit = async e => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('upload_background', upload_background);
            formData.append('upload_picture', upload_picture);
            formData.append('nama_akun', nama_akun);
            formData.append('location', location);
            formData.append('role', role);

            const CreateData = await api.post('/update-user', formData)
            if (CreateData.status === 200) {
                Swal.fire(
                    'Data Berhasil Di Simpan',
                    `${CreateData.data.message}`,
                    'success'
                )
            }

        } catch (err) {
            if (err.response === undefined) {

                Swal.fire(
                    'Data Tidak Berhasil Di Simpan',
                    `${err.response.data.message}`,
                    'error'
                )
            }
        }
    }



    const getImageBack = (e) => {
        if (e.target.files[0] === undefined) {
            throw console.error("No File")
        } else {
            setImageFileBack(e.target.files[0])
            setImageSrcBack(URL.createObjectURL(e.target.files[0]))
            setImageNameBack(e.target.files[0].name)
        }
    }
    const getImagePro = (e) => {
        if (e.target.files[0] === undefined) {
            throw console.error("No File")
        } else {
            setImageFilePro(e.target.files[0])
            setImageSrcPro(URL.createObjectURL(e.target.files[0]))
            setImageNamePro(e.target.files[0].name)
        }
    }
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className='flex flex-row mb-6 justify-around relative'>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="" >Atur Halaman </NavLink>
                    <NavLink className={({ isActive }) => isActive ? SpanLinkActive : SpanLink} to="pendukung" >Preview Halaman</NavLink>
                </div>
                {/* Tab Component */}
                <DashboardCard className="md:w-max xl:w-full mb-12 xl:mb-5 px-4">
                    <TitleCard>
                        Atur Halaman
                    </TitleCard>
                    <ChildCard>
                        <Form onSubmit={OnSubmit}>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p>Upload Background</p>
                                </span>
                                <InputData type="file" placeholder="Upload Background" onChange={getImageBack} />
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p className="text-sm">
                                        Upload Picture
                                    </p>
                                </span>
                                <InputData type="file" placeholder="Upload Picture" onChange={getImagePro} />
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p className="text-sm">
                                        Nama Akun
                                    </p>
                                </span>
                                <InputData type="text" placeholder="Nama Akun" onChange={e => setNama_akun(e.target.value)} />
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p className="text-sm">
                                        Location
                                    </p>
                                </span>
                                <InputData type="text" placeholder="Location" onChange={e => setLocation(e.target.value)} />
                            </FormChild>
                            <FormChild>
                                <span className='w-1/2 text-sm mr-2'>
                                    <h6 className='font-bold text-gray-400'></h6>
                                    <p className="text-sm">
                                        Akun Role
                                    </p>
                                </span>
                                {/* CHECK BOX */}
                                <div class="flex items-center gap-8">
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={e => setRole('Penikmat Karya')} />
                                        <span class="ml-2 text-gray-700">
                                            EXPLORER
                                        </span>
                                    </label>
                                    <label class="inline-flex items-center">
                                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={e => setRole('Creator')} />
                                        <span class="ml-2 text-gray-700">
                                            CREATOR
                                        </span>
                                    </label>
                                </div>
                            </FormChild>
                            <button type="submit" className="bg-blue-400 hover:bg-success-400 text-white py-2">Submit</button>
                        </Form>

                    </ChildCard>

                </DashboardCard>

                {/* Revenue */}
            </div>
        </>
    )
}

export default AturHalaman
