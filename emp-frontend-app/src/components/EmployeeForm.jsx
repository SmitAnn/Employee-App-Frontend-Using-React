import React from 'react'
import image from '../Images/Registration.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';



const EmployeeForm = () => {
    return (
        <div>
            <section className="Background">

                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div classNames="col ">
                            <div className="card card-form" >
                                <div className="row g-0">
                                    <div class="col-xl-6 d-none d-xl-block">
                                        <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo" />
                                    </div>
                                    <div className="col-xl-6">
                                        <Form>
                                            <div className="card-body p-md-5 text-black">
                                                <div className="d-flex justify-content-center pt-3">
                                                    <h1 className="fw-Bolder mb-3 pb-3 headeing" >Employee Form</h1>
                                                </div>
                                                <br /><br />
                                                <div className="form-outline mb-2">

                                                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />

                                                </div>
                                                <br />
                                                <div className="form-outline mb-2">

                                                    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Designation" />
                                                </div>
                                                <br />
                                                <div cclassName="form-outline mb-2">

                                                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" />

                                                </div>
                                                <br />
                                                <div className="form-outline mb-2">

                                                    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Salary" />
                                                </div>
                                                <br />
                                                <div className="d-flex justify-content-center pt-3">
                                                    <Button variant="warning" size='lg' className="reset-button" value="submit" type="submit">Reset</Button>
                                                    <Button variant="success" size='lg' className="submit-button" value="submit" type="submit">submit</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div >
    )
}

export default EmployeeForm