import React,{Component} from 'react';
import "./Dashboard.css";
import Sidebar from '../Sidebar/Sidebar';


class Dashboard extends Component{
  render(){
  return (


<div id="page-top">

    <div id="wrapper">

        <Sidebar/>



        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">


                <div className="container-fluid">

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generar reporte</a>
                    </div>


                    <div id="demo" className="carousel slide" data-ride="carousel">

                        <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                    <div height="200px" width="200px">
                        <div className="carousel-inner">
                        <div className="carousel-item active" height="20px" width="20px">
                            <img src="img/casa.jpg"  height="200px" width="200px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="img/casa2.jpg"  height="200px" width="200px"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/casa3.jpg" height="200px" width="200px"/>
                        </div>
                        </div>

                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        </a>

                    </div>
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
}

export default Dashboard;