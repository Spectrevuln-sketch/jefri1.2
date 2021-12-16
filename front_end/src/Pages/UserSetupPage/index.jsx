import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import tw, { css } from "twin.macro";
import axios from 'axios'
import { LoginInput, SelectInput } from '../../Components';
import Card from '../../Components/Moleculs/Card';
import { IconContext } from "react-icons";
// icons
import { RiLayoutTopFill, RiLayoutGridFill } from "react-icons/ri"

const Container = tw.div`
 flex
 justify-between
 flex-col
`;

const FormContainer = tw.div`
flex-row
items-center
`;

const Form = tw.form`
flex-col
justify-between
items-center
my-3
`;

const Wraper = tw.div`
flex-row
items-center
justify-around
my-3
`;

const ChildWrapper = tw.div`
flex
flex-row
justify-evenly
items-center
`;

const UserSetupPage = () => {
    const navigate = useNavigate()
    const [penikmat_karya, setPenikmatKarya] = useState(true)
    const [kreator, setKreator] = useState(true)
    const [classCard, setClass] = useState(false)
    const [classCard1, setClass1] = useState(false)
    const location = useLocation()
    // get data
    const [categories, setCategories] = useState([])
    const [roles, setRole] = useState([])

    // Update state
    const [layout, setLayout] = useState()
    const [user_cat, setUserCat] = useState('')
    const [kategori_user, setKategoriUser] = useState('')
    /* ----------------------------- axios instance ----------------------------- */
    var api = axios.create({
        baseURL: process.env.REACT_APP_USER_API,
        withCredentials: true
    })
    /* -------------------------------- end axios ------------------------------- */

    const onCheckedPenikmat = async () => {
        setPenikmatKarya(!penikmat_karya)
        setKreator(true)
        setUserCat("Penikmat Karya")
    }
    const onCheckedKreator = async () => {
        setKreator(!kreator)
        setPenikmatKarya(true)
        setUserCat("Creator")
    }

    const ChangeClass = ({ layout }) => {
        setClass(true)
        setClass1(false)
        setLayout(layout)
    }
    const ChangeClass1 = ({ layout }) => {
        setClass1(true)
        setClass(false)
        setLayout(layout)
    }

    useEffect(() => {
        GetKategori()
        GetRole()
    }, [])

    /** GET DATA */
    const GetKategori = async () => {
        await api.get('/kategori-kreator')
            .then(res => {
                if (res.status === 200) {
                    setCategories(res.data)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const GetRole = async () => {
        await api.get('/get-roles')
            .then(res => {
                if (res.status === 200) {
                    setRole(res.data)
                }
            }).catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }

    /** END GET DATA☻ */



    /* -------------------------------- send data ------------------------------- */
    const OnSubmitForm = async (e) => {
        e.preventDefault()
        await api.post(`/update-data-user/${location.state}`, {
            layout,
            user_cat,
            kategori_user
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    /* -------------------------------- End send data ------------------------------- */



    return (
        <div _ngcontent-ynj-c35 id="kreatorku-app-module">
            <router-outlet _ngcontent-ynj-c35 />
            <app-setup className="ng-star-inserted">
                <div className="lg:w-1/2 mx-auto">
                    <div className="text-center font-bold text-xl pt-6">Selamat datang di Arxist baru.</div>
                    <div className="text-center mb-8">Minta waktu kamu sebentar karena ada informasi akun yang kurang ya.</div>
                    <router-outlet />
                    <app-account-setup _nghost-ynj-c138 className="ng-star-inserted">
                        {/**/}
                        <form _ngcontent-ynj-c138 noValidate name="form" className="lg:w-9/12 mx-auto ng-untouched ng-pristine ng-invalid">
                            <div _ngcontent-ynj-c138 className="p-6 rounded-section">
                                <div _ngcontent-ynj-c138 className="mb-4 ng-star-inserted">
                                    <label _ngcontent-ynj-c138 htmlFor className="block font-bold mb-2">Pilih tipe akun kamu</label>
                                    {/* CheckBox */}
                                    <Container class="flex items-center gap-8">
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={onCheckedPenikmat} />
                                            <span class="ml-2 text-gray-700">
                                                Penikmat Karya
                                            </span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" onChange={onCheckedKreator} />
                                            <span class="ml-2 text-gray-700">
                                                Kreator
                                            </span>
                                        </label>
                                    </Container>
                                    {/* End CheckBox */}

                                </div>
                                {/* form penikmat*/}
                                <Form hidden={penikmat_karya}>
                                    <LoginInput className="w-full" placeholder="Password" />
                                </Form>
                                {/* End form  penikmat*/}
                                {/* form kreator*/}
                                <FormContainer hidden={kreator}>
                                    <Form>
                                        {/* Select Input */}
                                        <SelectInput label="Kategori Kreator Kamu" optionDefault="Pilih Kategori" className="w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-400 focus:text-gray-400" name="animals" onChange={(e) => setKategoriUser(e.target.value)}>

                                            {categories && (
                                                categories.map(cat => {
                                                    return (

                                                        <option option value={cat.id}>
                                                            {cat.name}
                                                        </option>
                                                    )

                                                })
                                            )}

                                        </SelectInput>
                                        {/* End Select Input */}
                                        <Wraper>
                                            <h6 className='text-gray-400'>Pilih Layout Publikasi untuk Profil kamu</h6>
                                            <Link to={''} className='text-blue-500 text-sm'>Lihat sampelnya di sini</Link>
                                            <ChildWrapper>
                                                <button type='button' onClick={() => ChangeClass1({ layout: 1 })}>
                                                    <Card className={classCard1 === true ? `shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-full m-auto relativ border-2 border-blue-500` : `shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-full m-auto relativ`}>
                                                        <p className={classCard1 === true ? "text-blue-500" : ""}>Grid Horizontal</p>
                                                        <IconContext.Provider value={{ className: classCard1 === true ? "text-blue-500 w-20 h-20" : "text-gray-500 w-20 h-20" }}>
                                                            <div>
                                                                <RiLayoutTopFill />
                                                            </div>
                                                        </IconContext.Provider>
                                                    </Card>
                                                </button>
                                                <button type='button' onClick={() => ChangeClass({ layout: 2 })}>
                                                    <Card className={classCard === true ? `shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-full m-auto relativ border-2 border-blue-500` : `shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-900 w-full m-auto relativ`}>
                                                        <p className={classCard === true ? "text-blue-500" : ""}>Grid Horizontal</p>
                                                        <IconContext.Provider value={{ className: classCard === true ? "text-blue-500 w-20 h-20" : "text-gray-500 w-20 h-20" }}>
                                                            <div>
                                                                <RiLayoutGridFill />
                                                            </div>
                                                        </IconContext.Provider>
                                                    </Card>
                                                </button>
                                            </ChildWrapper>
                                        </Wraper>

                                    </Form>
                                </FormContainer>
                                {/* End form  kreator*/}
                                {/**/}
                                <div _ngcontent-ynj-c138 className="flex justify-center ng-star-inserted">
                                    <button onClick={OnSubmitForm} type='submit' _ngcontent-ynj-c138 mat-flat-button color="primary" className="mat-focus-indicator mat-flat-button mat-button-base mat-primary mat-button-disabled" disabled="true">
                                        <span className="mat-button-wrapper" onClick={() => navigate('/setting-page')} >
                                            Simpan
                                        </span>
                                        <span matripple className="mat-ripple mat-button-ripple" /><span className="mat-button-focus-overlay" />
                                    </button>
                                </div>
                                {/**/}{/**/}
                            </div>
                        </form>
                    </app-account-setup>
                    {/**/}
                </div>
            </app-setup>
            {/**/}
        </div >
    )
}

export default UserSetupPage
