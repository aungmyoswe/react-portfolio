import React from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.css';
import Popup from "../../components/popup";



class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        errors: {},
        name: "",
        email: "",
        subject: "",
        textarea: "",
        position: "",
        phone: "",
        isLoading: false,
        buttonPopup: false,
      };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.setButtonPopup = this.setButtonPopup.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeSubject = this.handleChangeSubject.bind(this);
      this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
      this.handleChangePosition = this.handleChangePosition.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // setLoading(e) {
    //     this.state.isLoading = e
    // }

    setButtonPopup() {
        if(this.state.buttonPopup === false){
            this.setState({buttonPopup: true});
        }else {
            this.setState({buttonPopup: false});
        }
        
       
    }
    

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeSubject(event) {
        this.setState({subject: event.target.value});
    }
    handleChangeTextarea(event) {
        this.setState({textarea: event.target.value});
    }
    handleChangePosition(event) {
        this.setState({position: event.target.value});
    }
    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleValidation() {
        let errors = {
            'name': true,
            'email': true,
            'subject': true,
            'textarea': true,
            'position': true,
            'phone': true
        };
        let formIsValid = true;
    
        //Name
        if (!this.state.name) {
            formIsValid = false;
            errors["name"] = "Please fill your name.";
        }
    
        if (typeof this.state.name !== "undefined") {
            if (!this.state.name.match(/^[a-zA-Z][a-zA-Z\s]*$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (this.state.name === ""){
            formIsValid = false;
            errors["name"] = "Please fill your name.";
        }
    
        //Email
        if (!this.state.email) {
          formIsValid = false;
          errors["email"] = "Please fill your valid email.";
        }
    
        if (typeof this.state.email !== "undefined") {
          let lastAtPos = this.state.email.lastIndexOf("@");
          let lastDotPos = this.state.email.lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              this.state.email.indexOf("@@") === -1 &&
              lastDotPos > 2 &&
              this.state.email.length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Your email is not valid";
          }
        }

        if (!this.state.subject) {
            formIsValid = false;
            errors["subject"] = "Please fill your subject";
        }

        if (!this.state.textarea) {
            formIsValid = false;
            errors["textarea"] = "Please fill your description";
        }

        if (!this.state.position) {
            formIsValid = false;
            errors["position"] = "Please fill your position.";
        }

        if (!this.state.phone) {
            formIsValid = false;
            errors["phone"] = "Please fill your contact phone number.";
        }
    
        this.setState({ errors: errors });
        return formIsValid;
      }
  
    handleSubmit = async (event) => {
        //   alert(this.state.name + this.state.email  + this.state.subject + this.state.textarea + this.state.position + this.state.phone);
        event.preventDefault();
        if (this.handleValidation()){
            let content = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            textarea: this.state.textarea,
            position: this.state.position,
            phone: this.state.phone
            }

            console.log("click");
            let response = await fetch("/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(content)
            });
            let result = await response.json();
            if (result.status === 'success') {
                this.setButtonPopup(true);          
            }
        }
    }
    render() {
        return (
            <div>
                <main>
                <form onSubmit={this.handleSubmit}>
                <div className="contact">
                <div className="contact-body">
                    <div className="content">
                        <div className="label">
                            <span>Name</span>
                        </div>
                        <div className="input-button">
                            <input type="text" name="Name" placeholder="Your name ...." value={this.state.name} onChange={this.handleChangeName} ></input>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["name"]}</span>
                        </div>
                        
                    </div>
                    
                    <div className="content">
                        <div className="label">
                            <span>Email</span> 
                        </div>
                        <div className="input-button">
                            <input type="text" name="Email" placeholder="example@yourcompany.com" value={this.state.email} onChange={this.handleChangeEmail} ></input>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["email"]}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="label"> 
                            <span >Subject</span>
                        </div>
                        <div className="input-button">
                            <input  type="text" name="Subject" placeholder="Job ..." value={this.state.subject} onChange={this.handleChangeSubject} ></input>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["subject"]}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="label"> 
                            <span >Description</span>
                            </div>
                            <div className="input-button">
                            <textarea  type="textarea"  name="Description" placeholder="Hi Aung, ........" value={this.state.textarea} onChange={this.handleChangeTextarea} ></textarea>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["textarea"]}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="label"> 
                            <span >Your Position</span>
                            </div>
                            <div className="input-button">
                            <input  type="text" name="Position" placeholder="Manager.." value={this.state.position} onChange={this.handleChangePosition} ></input>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["position"]}</span>
                        </div>
                    </div>
                    <div className="content">
                    <div className="label"> 
                    <span >Your Contact No</span>
                        </div>
                        <div className="input-button focus:outline-none focus:border-sky-500 focus:ring-sky-500">
                        <PhoneInput className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400   rounded-md sm:text-sm focus:ring-1 w-full"
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            placeholder="9798722263"
                            value={this.state.phone}
                            onChange={phone => this.setState({ phone })}/>
                            <span style={{ color: "red", 'font-size': "13px" }}>{this.state.errors["phone"]}</span>
                        </div>
                    </div>
                    <div className="submit">
                        <button  type="submit" name="Send">Send</button>
                        {/* <button  type="submit" name="Send" onClick={() => {
                            this.setLoading(true);
                            this.setTimeout(function(){ 
                            this.setLoading(false);
                            window.location.href='/';
                            }, 5000);
                        }}
                        >
                        {this.state.isLoading? <Loading/> : null }
                        <LoadingIcons name="plus" />Send</button> */}
                    </div>
                </div>
            </div> 
            </form>
            </main>
            
            <Popup trigger={this.state.buttonPopup}  setTrigger = {this.state.buttonPopup}>
                <h2> Successful </h2>
            </Popup>
            </div>
                
        );
    }
}

export default Contact;
