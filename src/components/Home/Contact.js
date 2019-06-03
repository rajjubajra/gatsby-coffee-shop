import React from 'react'
import Title from '../Globals/Title';

export default function Contact() {
  return (
   <section className="py-3 contact">
    <div className="container">
      <div className="row">
        <Title title="Contact" />
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-8 col-xm-10 mx-auto mt-5">
        <form action="https://formspree.io/rajjubajra@gmail.com" method="POST">
          {/** Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input required type="text" className="form-control" name="name" placeholder="Your name"/>
          </div>
           {/** Email */}
           <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required type="email" className="form-control" name="email" placeholder="Your email address"/>
          </div>
           {/** Message */}
           <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea required className="form-control" name="message" placeholder="Your message" rows="5"/>
          </div>
          <button type="submit" className="btn btn-yellow text-capitalize mt-5 btn-block">Submit</button>
        </form>
        </div>
       
      </div>
    </div>
   </section>
  )
}
