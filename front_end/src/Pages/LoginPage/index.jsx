import React, { useState } from 'react'
import styled from "styled-components";
import tw, { css } from "twin.macro";
import { Link } from 'react-router-dom'
// components
import { ButtonBlock, LoginInput } from '../../Components'

const Background = tw.div`
bg-blue-400
`;

const TextHeader = tw.h1`
text-3xl
font-semibold
text-blue-400
`;

const LoginPage = () => {
    // state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <>
            <div _ngcontent-bis-c206 id="template" className="pb-12">
                <Background _ngcontent-bis-c206 className="bg-red-floating" style={{ zIndex: -2 }} />
                <div _ngcontent-bis-c206 className="flex justify-center mt-12">
                    <a _ngcontent-bis-c206 href="/"><img _ngcontent-bis-c206 src="assets/images/arxist_logo_horizontal_white.png" alt="" className="w-40" /></a>
                </div>
                {/* Form Login */}
                <form _ngcontent-bis-c206 noValidate name="form" className="form rounded-section mx-auto mt-4 bg-white lg:w-5/12 overflow-hidden ng-pristine ng-invalid ng-touched">
                    <img _ngcontent-bis-c206 src="assets/illustration/commission2.png" alt="" className="w-full" />
                    <div _ngcontent-bis-c206 className="p-4 md:p-8">
                        {/**/}
                        <TextHeader _ngcontent-bis-c206 className="text-primary margin-large-bottom margin-top text-center">
                            Sign In
                            {email}
                            <div _ngcontent-bis-c206 className="sub-text">Speed up your creativity</div>
                        </TextHeader>
                        <mat-form-field _ngcontent-bis-c206 appearance="fill" floatlabel="always" className="mat-form-field w-full ng-tns-c144-14 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-pristine ng-invalid ng-touched" style={{ fontSize: '18px' }}>
                            <div className="mat-form-field-wrapper ng-tns-c144-14">
                                <div className="mat-form-field-flex ng-tns-c144-14">
                                    {/**/}{/**/}
                                    <div className="mat-form-field-infix ng-tns-c144-14">
                                        <LoginInput placeholder="Username Or Email" _ngcontent-bis-c206 matinput type="text" formcontrolname="username" name="username" className="mat-input-element mat-form-field-autofill-control ng-tns-c144-14 ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched" id="mat-input-0" data-placeholder aria-invalid="false" aria-required="false" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    {/**/}
                                </div>
                            </div>
                        </mat-form-field>
                        <mat-form-field _ngcontent-bis-c206 appearance="fill" floatlabel="always" className="mat-form-field w-full ng-tns-c144-15 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label ng-untouched ng-pristine ng-invalid" style={{ fontSize: '18px' }}>
                            <div className="mat-form-field-wrapper ng-tns-c144-15">
                                <div className="mat-form-field-flex ng-tns-c144-15">
                                    <LoginInput placeholder="Password" _ngcontent-bis-c206 matinput type="text" formcontrolname="password" name="password" className="mat-input-element mat-form-field-autofill-control ng-tns-c144-14 ng-pristine ng-invalid cdk-text-field-autofill-monitored ng-touched" id="mat-input-0" data-placeholder aria-invalid="false" aria-required="false" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                        </mat-form-field>
                        <div _ngcontent-bis-c206 className="margin-bottom">
                            <Link to={""} _ngcontent-bis-c206 className="forgot-password text-red-600">Forgot Password?</Link>
                            <div _ngcontent-bis-c206 className="clearfix" />
                        </div>
                        <ButtonBlock label="Sign In Now!" className="mat-focus-indicator button-padding text-green-600 bg-green-100 w-full mat-flat-button mat-button-base" style={{ fontSize: '18px' }} />
                        {/* delete Ths after production */}
                        <Link to={'/setup-user'}> Next Page </Link>
                        {/* Enddelete Ths after production */}
                        <div _ngcontent-bis-c206 className="text-base mt-8 text-center">
                            <span _ngcontent-bis-c206>Don't have an account? </span>
                            <Link to={"/register-user"} _ngcontent-bis-c206 queryparamshandling="merge" className="text-primary">Sign Up Now!</Link>
                        </div>
                    </div>
                </form>
                {/* End Form Login */}
            </div>

        </>
    )
}

export default LoginPage
