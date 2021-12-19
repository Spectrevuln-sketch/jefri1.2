import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components'

const HomePage = () => {
    return (
        <>
            {/* Navigation Component */}
            <Navbar />

            <div _ngcontent-qub-c91>
                <div _ngcontent-qub-c91 style={{ minHeight: '90vh' }}>
                    <router-outlet _ngcontent-qub-c91 />
                    <app-landing _nghost-qub-c105 className="ng-star-inserted">
                        <div _ngcontent-qub-c105 id="hero" className="medium container flex flex-col-reverse md:flex-row items-center pt-16">
                            <div _ngcontent-qub-c105 className="w-full md:w-7/12 lg:w-7/12 xl:w-5/12 pt-4 md:pt-0">
                                <div _ngcontent-qub-c105 className="font-black gradient-text text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"> Berkarya &amp; Dapatkan Penghasilan. </div>
                                <div _ngcontent-qub-c105 className="mt-4 opacity-60 leading-relaxed text-sm lg:text-base">
                                    <p _ngcontent-qub-c105> Tanpa menggabungkan banyak aplikasi seperti Patreon untuk donasi, Fiverr untuk komisi, Deviantart untuk portofolio. Langsung kumpulkan pemujamu dalam satu halaman di Flex </p>
                                    <p _ngcontent-qub-c105 className="mt-4"> Ayo bergabung bersama komunitas kreator Flex untuk dapatkan lebih banyak penggemar dan penghasilan. </p>
                                </div>
                            </div>
                            <div _ngcontent-qub-c105 className="ml-auto">
                                <img _ngcontent-qub-c105 src="https://images.unsplash.com/photo-1639429193032-e012eda23c8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-full md:w-64 xl:w-96" />
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 className="text container">
                            <div _ngcontent-qub-c105 className="w-full lg:w-10/12 mx-auto my-8 lg:my-16">
                                <div _ngcontent-qub-c105 className="flex">
                                    <div _ngcontent-qub-c105 className="flex items-center w-full px-4 text-base rounded-md bg-gray-100 mr-4 h-11 lg:h-14">
                                        <div _ngcontent-qub-c105 className="text-sm lg:text-base font-bold">Flexcom/</div>
                                        <input _ngcontent-qub-c105 type="text" autoComplete="off" placeholder="coolcreatorname" className="placeholder-gray-400 text-sm lg:text-base py-4 outline-none h-full border-none w-full ng-untouched ng-pristine ng-valid" style={{ background: 'transparent' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 className="text container">
                            <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/creator_profile.png" alt="" className="w-full" />
                        </div>
                        <div _ngcontent-qub-c105 id="community" className="w-full bg-red-50 pt-20 pb-8 md:pb-16">
                            <div _ngcontent-qub-c105 className="text container">
                                <div _ngcontent-qub-c105 className="w-full lg:w-10/12">
                                    <div _ngcontent-qub-c105 className="gradient-text font-black text-2xl md:text-3xl">Bangun Komunitas Pemuja Kamu.</div>
                                    <div _ngcontent-qub-c105 className="leading-relaxed mt-4 text-sm md:text-base"> Ubah para <b _ngcontent-qub-c105>Penggemarmu</b> menjadi <b _ngcontent-qub-c105>Pemuja</b> dengan mengajak mereka memberikan tip / donasi kepadamu agar kamu terus semangat berkarya. </div>
                                </div>
                                <img _ngcontent-qub-c105 src="#" alt="" className="w-full mt-8" />
                                <div _ngcontent-qub-c105 className="mt-4">
                                    <Link _ngcontent-qub-c105 mat-flat-button color="accent" routerlink="/tip-feature" className="mat-focus-indicator mat-flat-button mat-button-base mat-accent" tabIndex={0} aria-disabled="false" to="#">
                                        <span className="mat-button-wrapper">Selengkapnya tentang Tip / Donasi</span>
                                        <span matripple className="mat-ripple mat-button-ripple" />
                                        <span className="mat-button-focus-overlay" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 id="commission" className="w-full bg-white py-12">
                            <div _ngcontent-qub-c105 className="text container">
                                <div _ngcontent-qub-c105 className="w-full lg:w-10/12">
                                    <div _ngcontent-qub-c105 className="gradient-text font-black text-2xl md:text-3xl">Tawarkan Komisi Kreatif.</div>
                                    <div _ngcontent-qub-c105 className="leading-relaxed mt-4 text-sm md:text-base"> Kreator terutama para seniman masih mengandalkan komisi / jasa untuk mendapatkan penghasilan. Di Flex kamu bisa menjamin pelangganmu bahwa komisimu aman dari penipuan dengan <b _ngcontent-qub-c105>Escrow System</b> Flex </div>
                                </div>
                                <div _ngcontent-qub-c105 className="lg:w-9/12 mx-auto">
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/commission.png" alt="" className="w-full mt-8" />
                                </div>
                                <div _ngcontent-qub-c105 className="mt-8">
                                    <div _ngcontent-qub-c105 className="w-full lg:w-10/12">
                                        <div _ngcontent-qub-c105 className="gradient-text font-bold text-xl md:text-2xl">Tambahan, Dukungan Internasional.</div>
                                        <div _ngcontent-qub-c105 className="leading-relaxed mt-4 text-sm md:text-base"> Pakai Flex untuk keperluan lokal maupun internasional tanpa perlu pindah platform. Bahkan mayoritas transaksi komisi di Flex datang dari Internasional. </div>
                                    </div>
                                    <div _ngcontent-qub-c105 className="mt-4">
                                        <div _ngcontent-qub-c105 className="flex mb-2">
                                            <div _ngcontent-qub-c105 className="w-6 flex-shrink-0">
                                                <img _ngcontent-qub-c105 src="" alt="" className="w-full" />
                                            </div>
                                            <div _ngcontent-qub-c105 className="ml-4 font-bold"> Pilihan Bahasa </div>
                                        </div>
                                        <div _ngcontent-qub-c105 className="flex">
                                            <div _ngcontent-qub-c105 className="w-6 flex-shrink-0">
                                                <img _ngcontent-qub-c105 src="" alt="" className="w-full" />
                                            </div>
                                            <div _ngcontent-qub-c105 className="ml-4 font-bold"> Pemisah Harga Lokal &amp; Internasional </div>
                                        </div>
                                    </div>
                                </div>
                                <div _ngcontent-qub-c105 className="mt-4">
                                    <a _ngcontent-qub-c105 mat-flat-button color="accent" routerlink="/commission-feature" className="mat-focus-indicator mat-flat-button mat-button-base mat-accent" tabIndex={0} aria-disabled="false" href="https://Flexcom/commission-feature">
                                        <span className="mat-button-wrapper">Selengkapnya tentang Komisi</span>
                                        <span matripple className="mat-ripple mat-button-ripple" />
                                        <span className="mat-button-focus-overlay" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 id="publication" className="w-full bg-white py-12">
                            <div _ngcontent-qub-c105 className="text container">
                                <div _ngcontent-qub-c105 className="w-full lg:w-10/12">
                                    <div _ngcontent-qub-c105 className="gradient-text font-black text-2xl md:text-3xl">Publikasi Karya &amp; Konten Eksklusif.</div>
                                    <div _ngcontent-qub-c105 className="leading-relaxed mt-4 text-sm md:text-base"> Berikan Konten-konten gratis ataupun berbayar dalam satu platform. Seluruh konten yang terpublikasi secara publik akan tersambung dengan seluruh sub-produk Flex untuk dijelajahi oleh lebih banyak orang. </div>
                                </div>
                                <div _ngcontent-qub-c105 className="relative py-4">
                                    <div _ngcontent-qub-c105 id="floating-image">
                                        <img _ngcontent-qub-c105 src="" alt="" className="absolute z-10 w-8 img-books" />
                                        <img _ngcontent-qub-c105 src="" alt="" className="absolute z-10 w-8 img-coffee" />
                                        <img _ngcontent-qub-c105 src="" alt="" className="absolute z-10 w-8 img-console" />
                                        <img _ngcontent-qub-c105 src="" alt="" className="absolute z-10 w-8 img-camera" />
                                        <img _ngcontent-qub-c105 src="" alt="" className="absolute z-10 w-8 img-guitar" />
                                    </div>
                                    <div _ngcontent-qub-c105 className="lg:w-9/12 mx-auto">
                                        <img _ngcontent-qub-c105 src="" alt="" className="w-full mt-8" />
                                    </div>
                                </div>
                                <div _ngcontent-qub-c105 className="mt-4">
                                    <Link to="/tip" _ngcontent-qub-c105 mat-flat-button color="accent" className="mat-focus-indicator mat-flat-button mat-button-base mat-accent" tabIndex={0} aria-disabled="false" href="https://Flexcom/tip">
                                        <span className="mat-button-wrapper">Selengkapnya tentang Publikasi</span>
                                        <span matripple className="mat-ripple mat-button-ripple" />
                                        <span className="mat-button-focus-overlay" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 id="works" className="py-12">
                            <div _ngcontent-qub-c105 className="text container flex flex-col items-center">
                                <div _ngcontent-qub-c105 className="gradient-text font-black text-2xl md:text-3xl">Cara Kerja</div>
                                <nav _ngcontent-qub-c105 aria-label="Progress" className="mx-auto mt-8">
                                    <ol _ngcontent-qub-c105 className="overflow-hidden">
                                        <li _ngcontent-qub-c105 className="relative pb-10">
                                            <div _ngcontent-qub-c105 aria-hidden="true" className="-ml-px absolute mt-0.5 z-0 top-4 left-4 w-0.5 h-full bg-red-600" />
                                            <div _ngcontent-qub-c105 href="#" className="relative flex items-start group">
                                                <span _ngcontent-qub-c105 className="h-9 flex items-center">
                                                    <span _ngcontent-qub-c105 className="relative z-10 w-10 h-10 bg-white flex items-center justify-center border-solid border-1 border-red-500 rounded-full">
                                                        <svg _ngcontent-qub-c105 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-red-600">
                                                            <path _ngcontent-qub-c105 d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span _ngcontent-qub-c105 className="ml-4 min-w-0 flex flex-col">
                                                    <span _ngcontent-qub-c105 className="text-lg font-bold tracking-wide">Buat Akun</span>
                                                    <span _ngcontent-qub-c105 className="text-sm text-gray-500">Pilih username halaman kamu.</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li _ngcontent-qub-c105 className="relative pb-10">
                                            <div _ngcontent-qub-c105 aria-hidden="true" className="-ml-px absolute mt-0.5 z-0 top-4 left-4 w-0.5 h-full bg-red-600" />
                                            <div _ngcontent-qub-c105 href="#" className="relative flex items-start group">
                                                <span _ngcontent-qub-c105 className="h-9 flex items-center">
                                                    <span _ngcontent-qub-c105 className="relative z-10 w-10 h-10 bg-white flex items-center justify-center border-solid border-1 border-red-500 rounded-full">
                                                        <svg _ngcontent-qub-c105 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-red-600">
                                                            <path _ngcontent-qub-c105 d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 464H48V48h288v416zM192 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6h-5c-12.3 5.1-25.7 8-39.8 8s-27.6-2.9-39.8-8h-5c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span _ngcontent-qub-c105 className="ml-4 min-w-0 flex flex-col">
                                                    <span _ngcontent-qub-c105 className="text-lg font-bold tracking-wide">Atur Halaman</span>
                                                    <span _ngcontent-qub-c105 className="text-sm text-gray-500">Buat nama halaman, foto profil, sampul, deskripsi, pengaturan tip / komisi</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li _ngcontent-qub-c105 className="relative pb-10">
                                            <div _ngcontent-qub-c105 aria-hidden="true" className="-ml-px absolute mt-0.5 z-0 top-4 left-4 w-0.5 h-full bg-red-600" />
                                            <div _ngcontent-qub-c105 href="#" className="relative flex items-start group">
                                                <span _ngcontent-qub-c105 className="h-9 flex items-center">
                                                    <span _ngcontent-qub-c105 className="relative z-10 w-10 h-10 bg-white flex items-center justify-center border-solid border-1 border-red-500 rounded-full">
                                                        <svg _ngcontent-qub-c105 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-red-600">
                                                            <path _ngcontent-qub-c105 d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span _ngcontent-qub-c105 className="ml-4 min-w-0 flex flex-col">
                                                    <span _ngcontent-qub-c105 className="text-lg font-bold tracking-wide">Bagikan Halaman</span>
                                                    <span _ngcontent-qub-c105 className="text-sm text-gray-500">Link unik milik kamu sudah siap untuk dibagikan</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li _ngcontent-qub-c105 className="relative pb-10">
                                            <div _ngcontent-qub-c105 aria-hidden="true" className="-ml-px absolute mt-0.5 z-0 top-4 left-4 w-0.5 h-full bg-red-600" />
                                            <div _ngcontent-qub-c105 href="#" className="relative flex items-start group">
                                                <span _ngcontent-qub-c105 className="h-9 flex items-center">
                                                    <span _ngcontent-qub-c105 className="relative z-10 w-10 h-10 bg-white flex items-center justify-center border-solid border-1 border-red-500 rounded-full">
                                                        <i _ngcontent-qub-c105 className="arx-icon karya text-red-600 text-base" />
                                                    </span>
                                                </span>
                                                <span _ngcontent-qub-c105 className="ml-4 min-w-0 flex flex-col">
                                                    <span _ngcontent-qub-c105 className="text-lg font-bold tracking-wide">Publikasikan Konten</span>
                                                    <span _ngcontent-qub-c105 className="text-sm text-gray-500">Isi profil kamu dengan berbagai konten agar meningkatkan konversi ke penghasilan</span>
                                                </span>
                                            </div>
                                        </li>
                                        <li _ngcontent-qub-c105 className="relative">
                                            <div _ngcontent-qub-c105 href="#" className="relative flex items-start group">
                                                <span _ngcontent-qub-c105 aria-hidden="true" className="h-9 flex items-center">
                                                    <span _ngcontent-qub-c105 className="relative z-10 w-10 h-10 bg-white flex items-center justify-center border-solid border-1 border-red-500 rounded-full">
                                                        <svg _ngcontent-qub-c105 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-red-600">
                                                            <path _ngcontent-qub-c105 d="M367.96813,103.99609a39.999,39.999,0,1,0,40.00384,40A40.02908,40.02908,0,0,0,367.96813,103.99609ZM505.07337,19.3418c-1.21875-5.60742-6.75-11.13868-12.34373-12.3418-32.62885-7-58.162-7-83.57017-7C305.39988,0,242.95858,55.0918,196.236,127.99609H94.82015c-16.34567.01563-35.53314,11.875-42.87883,26.48243L2.53125,253.28906A28.12512,28.12512,0,0,0,0,263.99219a24.00617,24.00617,0,0,0,24.00191,23.998h92.63266l-10.59373,21.42188c-9.33592,18.91016,4.27733,34.77344,6.15624,36.62305l53.75381,53.71875c15.56443,15.54492,33.81635,7.52929,36.6601,6.13867l21.34567-10.57617V488a24.00659,24.00659,0,0,0,24.00191,24,28.618,28.618,0,0,0,10.71873-2.51562l98.6971-49.4043c14.625-7.29688,26.50191-26.5,26.50191-42.85938V315.69336c72.72449-46.76367,128.10525-109.44922,128.10525-212.69727C512.07531,77.4668,512.07531,51.99805,505.07337,19.3418ZM358.53065,274.99023c-36.94135,18.48438-121.10527,60.14063-166.7966,82.73243l-37.50189-37.49805c22.59567-45.6875,64.25575-129.99609,82.72447-166.88672C284.33741,79.5293,335.96623,47.99805,409.15947,47.99805c18.00192,0,34.2851,0,52.56632,2.34375,2.375,18.71875,2.31249,35.27929,2.25,52.63867C463.97578,175.75977,432.41138,227.30469,358.53065,274.99023Z" />
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span _ngcontent-qub-c105 className="ml-4 min-w-0 flex flex-col">
                                                    <span _ngcontent-qub-c105 className="text-lg font-bold tracking-wide text-gray-500">Cuan &amp; Terbang ke Bulan</span>
                                                    <span _ngcontent-qub-c105 className="text-sm text-gray-500">Dapatkan penghasilan dari seluruh pemujamu</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div _ngcontent-qub-c105 id="payment" className="py-12">
                            <div _ngcontent-qub-c105 className="text container flex flex-col items-center">
                                <div _ngcontent-qub-c105 className="gradient-text font-black text-2xl md:text-3xl">Metode Bayar di Flex</div>
                                <div _ngcontent-qub-c105 className="payment-list flex flex-wrap items-center justify-center">
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/bni-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/bri-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/permata-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/mandiri-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/ovo-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/dana-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/gopay-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/linkaja-logo-200.png" alt="" className="lj" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/alfamart-logo-200.png" alt="" />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/shopeepay-logo-200.png" alt="" />
                                </div>
                                <h3 _ngcontent-qub-c105 className="mt-8 text-center">International</h3>
                                <div _ngcontent-qub-c105 className="payment-list flex flex-wrap items-center justify-center">
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/mastercard-logo.svg" alt="" style={{ width: '50px' }} />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/jcb-logo.svg" alt="" style={{ width: '50px' }} />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/visa-logo.svg" alt="" style={{ width: '50px' }} />
                                    <img _ngcontent-qub-c105 src="./Dapatkan Penghasilan melalui Flex _ Bisa Komisi, Terima Donasi _ Tip melalui Flex_files/amex-logo.png" alt="" style={{ width: '50px' }} />
                                </div>
                            </div>
                        </div>

                    </app-landing>
                    {/**/}
                </div>

                {/**/}
            </div>
        </>
    )
}

export default HomePage
