import './Profile.css'
import pp from '../assets/pp2.jpg'

const Profile = () => {
    return ( <>
<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
<div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img src={pp} class="img-radius rounded-circle" width="80%" alt="User-Profile"/>
                                                                </div>
                                                                <h6 class="f-w-600">M Farhan Zachary</h6>
                                                                <p>Web Designer</p>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Email</p>
                                                                        <h6 class="text-muted f-w-400">farhan.2523@gmail.com</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Student ID</p>
                                                                        <h6 class="text-muted f-w-400">320200401011</h6>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Faculty</p>
                                                                        <h6 class="text-muted f-w-400">Military Engineering</h6>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <p class="m-b-10 f-w-600">Major</p>
                                                                        <h6 class="text-muted f-w-400">Informatics</h6>
                                                                    </div>
                                                                </div>
                                                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Motto</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-9">
                                                                        <p class="m-b-10 f-w-600">Do Your Best, Let God Do The Rest</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>
    </> );
}
 
export default Profile;