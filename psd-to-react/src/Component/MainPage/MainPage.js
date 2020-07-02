import React from 'react'
import '../MainPage/MainPage.css'
// import OutlinedCard from '../cards/card'
import RecipeReviewCard from '../cards/card'
// import Banner from '../../../public/banner.jpeg'
// import Banner from './banner.jpg'
// import img from '../../../public/img'
// let img = require('./img1.jpg')
// import img from './img1.jpg'
import imgcard from './download.jpg'
class MainPage extends React.Component {

    data = [

        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        }, {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },
        {
            title: 'card1',
            imgsrc: [imgcard]
        },


    ]

    render() {
        return <div>

            <div className="header container-fluid">
                <div className='row ml-0 mr-0'  >

                    <div className="col-sm-1  ml-0 mr-0 hamburger">
                        <i class="fa fa-bars hamBur" aria-hidden="true"></i>
                    </div>

                    <div className="col-sm-6 heading">

                        <h1 className="G-Gate">hjfk.kjfjgakjsdj</h1>

                    </div>

                    <div className="col-sm-5 ">

                        <div class="row">
                            <div className="col-sm-6 G-Gate">

                                <ul>
                                    <li>
                                        <i class="fa fa-toggle-off" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-bell-o" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-sm-6 UserFace ">
                                <span class="">UserFace</span>
                                <i class="fa fa-user-circle face" aria-hidden="true"></i>
                            </div>

                        </div>
                    </div>

                </div>

            </div>






            <div class="container-fluid display ">
                <div class="row">

                    <div className="col-sm-1 col-md-1 sideBar">
                        <div class="bg-light " id="sidebar-wrapper">

                            <div class="list-group list-group-flush">


                                <a href="#" class="list-group-item list-group-item-action bg-light Active Home btn-primary"> <i style={{ marginLeft: '20%' }, { marginTop: '-20px' }} class="fa fa-home" aria-hidden="true"></i>Home</a>


                                <a href="#" class="list-group-item list-group-item-action bg-light"> <i style={{ marginLeft: '20%' }} class="fa fa-search" aria-hidden="true"></i>Search</a>


                                <a href="#" class="list-group-item list-group-item-action bg-light" > <i style={{ marginLeft: '20%' }} class="fa fa-gavel" aria-hidden="true"></i> Action</a>


                                <a href="#" class="list-group-item list-group-item-action bg-light"> <i style={{ marginLeft: '30%' }} class="fa fa-server" aria-hidden="true"></i>Services</a>



                                <a href="#" class="list-group-item list-group-item-action bg-light"> <i style={{ marginLeft: '40%' }} class="fa fa-phone" aria-hidden="true"></i>Support</a>


                            </div>
                        </div>

                    </div>


                    <div className="col-sm-11 col-md-11">
                        {/* works normal */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="first"> <input className="what-are" placeholder="what are you looking for?" /></div>
                            </div>

                            <div className="col-md-6"> <div className="first">
                                <input className="what-YOU" placeholder="what are you looking for?" />
                                <button className="btn btn-primary search">Search</button>
                            </div>
                            </div>


                            <div className="col-md-12 img" > <img src={require('./helpbox-contact.jpg')} className="adjImg" />  </div>

                            <div class='col-md-12 imgcard'>

                                <div class='display'>
                                <div className=" color1">
                                <i  class="fa fa-info-circle iconsize" aria-hidden="true"></i>
                                        <h6 >Miscellaneous</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                    <div className=" color1">
                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                    <h6 >Plates</h6>
                                        <h6 class="Miscellaneous" >25</h6>
                                    </div>
                                    <div className="color1">
                                    <i class="fa fa-building-o" aria-hidden="true"></i>
                                    <h6 >Realestate</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                    <div className="color1">
                                    <i class="fa fa-bus" aria-hidden="true"></i>
                                    <h6 >Vahicles</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                    <div className=" color1" >
                                    <i class="fa fa-paw" aria-hidden="true"></i>
                                        <h6 >Animals</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                    <div className=" color1">
                                    <i class="fa fa-plug" aria-hidden="true"></i>
                                    <h6 >Devices</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                    <div className="color1">
                                    <i class="fa fa-diamond" aria-hidden="true"></i>
                                    <h6 >Jewllery</h6>
                                        <h6 class="Miscellaneous" >25</h6>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12 partner">
                                <h3 >Our Partner</h3>
                            </div>

                            <div className="col-md-12 col-sm-12 logo">

                                <div className="row">
                                    <div className="col-md-1 color">
                                        <img src="" />
                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color" >
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>
                                    <div className="col-md-1 color">
                                        <img src="" />

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-12 col-sm-12 Listing">
                                <h3 >New Listings</h3>
                            </div>

                            <div className="col-md-12 col-sm-12 Listing">
                                <div className=" action">

                                    <div className="timeaction"><a href="#" >Time Action</a></div>

                                    <a href="#" style={{ marginLeft: "10px" }} >Time Action</a>

                                </div>

                            </div>
                            <div className="col-md-12 col-sm-12 icons">

                                <div className="row">
                                    <div className="col-md-6" >
                                        <span className="distance"><i class="fa fa-bars " aria-hidden="true"></i></span>
                                        <span className="distance">  <i class="fa fa-sliders" aria-hidden="true"></i></span>
                                        <span className="distance"><i class="fa fa-th-large" aria-hidden="true"></i></span>

                                        <select className="distance">
                                            <option>Order By</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 righty" >
                                        <span> Displaying -9 of 350 item</span>
                                        <select className="distance">
                                            <option>Order</option>
                                        </select>
                                    </div>
                                </div>

                            </div>


                            <div className="col-md-12 col-sm-12 card">


                                <div className="cardss">
                                    {this.data.map((n) => {

                                        return (
                                            <RecipeReviewCard class="adjcard" title={n.title} addvideo={n.imgsrc} />


                                        );
                                    })}


                                </div>


                            </div>


                            <div className="col-md-12 col-sm-12 end">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link number endbtn" href="#">
                                            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                        </a></li>
                                        <li class="page-item"><a class="page-link endbtn" href="#">
                                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                        </a></li>
                                        <li class="page-item"><a class="page-link number" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link number" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link number" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link number endbtn" href="#">
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a></li>
                                        <li class="page-item"><a class="page-link number endbtn" href="#">
                                            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col-md-12 col-sm-12 Done">

                                <div class="row">
                                    <div className="col md 4">
                                        <ul>
                                            <li><i class="fa fa-youtube-play" aria-hidden="true"></i></li>
                                            <li> <i class="fa fa-twitter" aria-hidden="true"></i></li>
                                            <li> <i class="fa fa-instagram" aria-hidden="true"></i></li>

                                        </ul>
                                    </div>
                                    <div className="col md 4">
                                        <ul>

                                            <li className="aaa"> <a href="#">Privacy Police |</a> </li>
                                            <li className="aaa" > <a href="#">Usage Police |</a></li>
                                            <li className="aaa"> <a href="#">Site Map  |</a></li>
                                            <li className="aaa"> <a href="#">Contact Us</a></li>

                                        </ul>
                                    </div>
                                    <div className="col md 4 copy">
                                        auctionsgate @ 2020 ALL Rights Reserved
                            </div>
                                </div>

                            </div>


                        </div>

                    </div>


                </div>
            </div>

        </div>
    }

}

export default MainPage