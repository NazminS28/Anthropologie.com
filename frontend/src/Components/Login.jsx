import React, { useState } from 'react'
import style from './login.module.css'

const Login = () => {
  const [formData, setformData] = useState({})
  const [formData1, setformData1] = useState({})
  const [passtype, setpasstype] = useState(false)

  const handleChange = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value })
     
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.first===undefined || formData.last===undefined || formData.email===undefined || formData.password===undefined){
      alert("Fill all Fields")
    }else{
    localStorage.setItem("login",JSON.stringify(formData))     
    }
  }
 
  const handleChange1 = (e) => {
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value })
  };

  const handleSubmit1 = (e) => {
    e.preventDefault()
    let data1 = JSON.parse(localStorage.getItem("login"))
    if(data1.email===formData1.email && data1.password===formData1.password1){
      alert("Login Success")
    }else{
      alert("Login Fail")
    }
  }
  return (<>
    {/* --------------------------------sign up------------------------------ */}

    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal"  ></button>
          </div>
          <p className='text-center fs-2 mb-auto'>Sign Up</p>
          <hr />
          <p className='text-center text-sm-start-center px-4 mt-auto'>Sign in so you can save items to your wishlists, track your orders, and check out faster!</p>
          <div className="modal-body">
            <div className={style.style2}>
              <form className={style.form} onSubmit={handleSubmit}>
                <p>FIRST NAME</p>
                <input  required onChange={handleChange} name="first" type="text" className={style.style3} style={{ textTransform: "capitalize" }} />
                <p>LAST NAME</p>
                <input  required onChange={handleChange} name="last" type="text" className={style.style3} style={{ textTransform: "capitalize" }} />
                <p>EMAIL</p>
                <input  required onChange={handleChange} name="email" type="email" className={style.style3} />
                <p>PASSWORD</p>
                <input onChange={handleChange} name="password" type={!passtype ? 'password' : 'text'} className={style.style3} />
                <i style={{ marginLeft: "-30px", cursor: "pointer" }} className="fa-solid fa-eye" onClick={() => { setpasstype(!passtype) }}></i>
                <p></p>
                <input  required type="submit" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" value="Create" className={style.style4} />
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <p className='text-center mx-auto'>If Already Have An Account Click Sign In.</p>
            <button className="btn btn-secondary d-grid col-10 row-2 mx-auto" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign In</button>
          </div>
        </div>
      </div>
    </div>


    {/* --------------------------------sign in------------------------------ */}

    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabndex="-1">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <p className='text-center fs-1 mb-1'>Sign In</p>
          <hr />
          <div className="modal-body">
            <div className={style.style2}>
              <form className={style.form} onSubmit={handleSubmit1}>
                <p>EMAIL</p>
                <input  required onChange={handleChange1} name="email" type="email" className={style.style3} />
                <p>PASSWORD</p>
                <input  required onChange={handleChange1} name="password1" type={!passtype ? 'password' : 'text'} className={style.style3} />
                <i style={{ marginLeft: "-30px", cursor: "pointer" }} className="fa-solid fa-eye" onClick={() => { setpasstype(!passtype) }}></i>

                <p></p>
                <input  onSubmit={handleSubmit1} type="submit" value="Sign In" className={style.style4} />
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <p className='text-center mx-auto'>If Don't Have An Account Click Create An Account.</p>
            <button className="btn btn-secondary d-grid col-10 row-2 mx-auto" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">CREATE AN ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
    <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>


  </>)
}
export default Login
