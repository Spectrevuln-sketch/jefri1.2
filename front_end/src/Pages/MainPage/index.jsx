import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import {
    Link,
    useLocation,
    Outlet,
    useRoutes,
    matchRoutes,
    useResolvedLocation,
    useParams,
    Navigate
} from "react-router-dom";
// Pages
import { HomePage, LoginPage, AboutPage, RegisterPage, UserSetupPage, SettingsPage, GeneralPage, ChangePasswordPage, BankSettingPage, OnBoarding, TipTab, MutationPage, WithdrawPage, MutationContent, LandingPage, CommisionsPage, CreatorPage } from '../../Pages'
import MainDashboard from '../MainDashboard';
import KomisiPage from '../KomisiPage';


const MainPage = () => {
    const routes = [
        {
            path: '/',
            element: <HomePage />,
            // children: [
            //     {
            //         path: '/about',
            //         element: <AboutPage />
            //     }
            // ]
        },
        { path: '/login-user', element: <LoginPage /> },
        { path: '/register-user', element: <RegisterPage /> },
        { path: '/setup-user', element: <UserSetupPage /> },
        {
            path: '/belance',
            element: <MutationPage />,
            children: [
                {
                    path: 'withdraw',
                    element: <WithdrawPage />
                },
                {
                    path: 'mutation',
                    element: <MutationContent />
                }
            ]
        },

        {
            path: '/dashboard',
            element: <MainDashboard />,
            children: [
                {
                    path: 'onboard',
                    element: <OnBoarding />
                },
                {
                    path: 'tip',
                    element: <TipTab />
                },
                {
                    path: 'komisi',
                    element: <KomisiPage />
                },
            ]
        },
        {
            path: '/setting-page',
            element: <SettingsPage />,
            children: [
                {
                    path: 'general',
                    element: <GeneralPage />
                },
                {
                    path: 'password',
                    element: <ChangePasswordPage />
                },
                {
                    path: 'bank-setting',
                    element: <BankSettingPage />
                },
            ]
        },
        {
            path: "/landing",
            element: <LandingPage />
        },
        {
            path: "/commisions",
            element: <CommisionsPage />
        },
        {
            path: "/creators",
            element: <CreatorPage />
        },
    ]
    let element = useRoutes(routes);
    return (
        <div>
            {/* Loader Page */}
            <app-root _nghost-qub-c35 ng-version="11.0.0">
                <div _ngcontent-qub-c35 id="kreatorku-app-module">
                    <router-outlet _ngcontent-qub-c35 />
                    <div _ngcontent-qub-c91 className="cdk-overlay-backdrop overlay-sidenav" style={{ opacity: '0 !important' }} />

                    <div _ngcontent-qub-c91 id="content" className>
                        {/* Content */}
                        {element}
                        {/* End Contet */}
                    </div>
                </div>
            </app-root>
            <noscript>Please enable JavaScript to continue using Arxist.</noscript>

            <div className="cdk-live-announcer-element cdk-visually-hidden" aria-atomic="true" aria-live="polite" />
        </div>
    )
}

export default MainPage
