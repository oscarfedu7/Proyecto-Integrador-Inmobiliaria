
import React,{Component} from 'react';
import "./Dashboard.css";
import Sidebar from '../Sidebar/Sidebar';


function Dashboard404(){
  return (


<div id="page-top">

    <div id="wrapper">

        <Sidebar/>


        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">


            <div class="container-fluid">

                <div class="text-center">
                    <div class="error mx-auto" data-text="404">404</div>
                    <p class="lead text-gray-800 mb-5">Page Not Found</p>
                    <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                    <a href="index.html">&larr; Back to Dashboard</a>
                </div>

                </div>


            </div>



            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Bits &copy; Inmobiliaria Website 2021</span>
                    </div>
                </div>
            </footer>


        </div>


    </div>



    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>


    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>


    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>


    <script src="js/sb-admin-2.min.js"></script>

    <script src="vendor/chart.js/Chart.min.js"></script>


</div>

);
}


export default Dashboard404;