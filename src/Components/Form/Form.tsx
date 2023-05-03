import React from 'react'

const Form = () => {
  return (
    <main>
      <section className="form-left">

      </section>
        <section className="form-right">
          <div className="form-top flex">
            <h1 className="form-top-head font-[300] text-[2em] ">Become a driver</h1>
            <h3 className="form-top-head  text-[1em]">Sign up to ride</h3>
          </div>
          <div className="form-top-btn flex">
          <div className="form-top-btn">
            <button className="form-btn">I have a car</button>
          </div>
          <div className="form-top-btn">
            <button className="form-btn">I need a car</button>
          </div>
          </div>
          <form className="form-right-btn">
            <div className="form div">
             <label htmlFor="first name" className="form-label">First name</label>\
             <div className="form-div">
              <input type="text" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor=" last name" className="form-label">Last name</label>\
             <div className="form-div">
              <input type="text" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor="email" className="form-label">Email</label>\
             <div className="form-div">
              <input type="email" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor="" className="form-label">Password</label>\
             <div className="form-div">
              <input type="text" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor="" className="form-label">Phone number</label>\
             <div className="form-div">
              <input type="number" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor="" className="form-label">City you'll drive in </label>\
             <div className="form-div">
              <input type="text" className="form-input" />
             </div>
            </div>
            <div className="form div">
             <label htmlFor="" className="form-label">Invite code</label>\
             <div className="form-div">
              <input type="text" className="form-input" />
             </div>
            </div>
            <p className="form-text">
              By proceeding, you'll agree to Uber's <a href="/"> Term of Use</a> and acknowledge 
              taht i have read the  <a href="/"> Privacy Policy</a>
            </p>
            <p className="form-text"> I also agree that Uber or it's representatives may contact me 
            by email,photo or SMS(including by automated means) at the email address or number i provide,
            including for marketing purposes  </p>
            <button className="form-btn">Sign Up to drive </button>
            <p className="form-text">Already have an Account ? <a href="/"> Sign In</a>  </p>
          </form>
        </section>
    </main> 
  )
}

export default Form
