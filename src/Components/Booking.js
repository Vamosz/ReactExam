import React from 'react';
import AppointmentStore from "../Stores/AppointmentStore";
import Navbar from "./Navbar";


class Booking extends React.Component {

    constructor() {
        super();
        if (AppointmentStore._items.length <= 0) {
            window.location.href = '/';
        }
        this.state = {
            items: AppointmentStore._items
        }
    }

    formValidation(){
        let firstName = document.getElementById('validationServer01').value;
        let lastName = document.getElementById('validationServer02').value;
        let email = document.getElementById('validationServer03').value;
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
        var emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!format.test(firstName) && !format.test(lastName) && emailformat.test(email.toLowerCase())){
            document.getElementById('alert').style.display = 'block';
            setTimeout(
                function() {
                    window.location.href = '/';
                }
                    .bind(this),
                3000
            );
       }
    }

    render() {
        return (
            <div>
                <Navbar name={"Debrecen"}/>
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-success font-weight-bold" style={{display:'none'}} id="alert" role="alert">
                            Successfully booking! Redirecting to the homepage.
                        </div>
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col-12">
                        <h2>Before you book the appointment</h2>
                    </div>
                </div>
                <div className="row mx-4">
                    <div className="col-6">
                        <h3>Fill this form</h3>
                    </div>
                    <div className="col-6">
                        <h3>You want to book: </h3>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-1"/>
                    <div className="col-6">
                        <form>
                            <div className="form-row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationServer01">First name</label>
                                    <input type="text" className="form-control" id="validationServer01"
                                           required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationServer02">Last name</label>
                                    <input type="text" className="form-control" id="validationServer02"
                                           required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="validationServer03">Email</label>
                                    <input type="email" className="form-control" id="validationServer03"
                                           required/>
                                </div>
                            </div>
                        </form>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <button onClick={()=>this.formValidation()} className="btn btn-outline-primary">Book</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="card" >
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item p-3 font-italic text-center" style={{fontSize: 17 + 'px'}}><strong>The issues below was selected</strong></li>
                                        {this.state.items.map((item)=> {
                                            return(
                                                <li className="list-group-item"><strong>{item.Name}</strong> takes <strong>{item.Time}</strong> minutes.</li>
                                            );
                                        })}
                                        <li className="list-group-item p-3 font-italic text-center font-weight-bold" style={{fontSize: 17 + 'px'}}>This all takes {this.state.items.reduce((start,next)=>{
                                            return start+next.Time;
                                        },0)} minutes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Booking;
