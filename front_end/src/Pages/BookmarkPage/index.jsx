import React from 'react'

const BookmarkPage = () => {
    return (
        <>

            <div _ngcontent-ebh-c253 className="layout">
                <div _ngcontent-ebh-c253 className="f justify-center margin-large-bottom">
                    <div _ngcontent-ebh-c253 className="ios-tab"><a _ngcontent-ebh-c253 routerlink="./" routerlinkactive="active" className="item active" href="/bookmark">Saved</a>
                    </div>
                </div>
                <router-outlet _ngcontent-ebh-c253 />
                <app-bookmark-layout _nghost-ebh-c255 className="ng-star-inserted">
                    <div _ngcontent-ebh-c255 className="container">
                        <div _ngcontent-ebh-c255 className="f margin-bottom h">
                            <div _ngcontent-ebh-c255 className="total">0 Publication</div>
                            <div _ngcontent-ebh-c255 className="sort">Urutan: Yang baru ditambahkan</div>
                        </div>
                        <div _ngcontent-ebh-c255 infinitescroll className="g">{/**/}</div>
                        <div _ngcontent-ebh-c255 className="empty-illustration ng-star-inserted">
                            <div _ngcontent-ebh-c255 className="image">
                                <img _ngcontent-ebh-c255 src="assets/illustration/bookmark.png" alt="" />
                            </div>
                            <div _ngcontent-ebh-c255 className="text">Kamu belum menyimpan apa-apa.</div>
                        </div>{/**/}</div>
                </app-bookmark-layout>
                {/**/}
            </div>
        </>
    )
}

export default BookmarkPage
