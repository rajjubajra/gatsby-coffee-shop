import React from 'react'

export default function Footer() {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-6 text-center">
          <p>all right reserved &copy; { new Date().getFullYear().toString()} <a href="https://yellow-website.com">Yellow-Website.com</a></p>
        </div>
        </div>
      </div>
    </footer>
  )
}
