import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">

<div className="footer-left">

    <h3>Prabhat<span>Center</span></h3>

    <p className="footer-links">
        <Link to="#" className="link-1">Home</Link>
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Help</Link>
        <Link to="#">Report</Link>
        
    </p>

    <p className="footer-company-name">Prabhat Center © 2023</p>
</div>

<div className="footer-center">

    <div>
    <i className="fa-solid fa-location-dot"></i>
        <p><span>Mirzapur</span> Utter Pradesh, Bharat</p>
    </div>

    <div>
        <i className="fa-solid fa-phone"></i>
        <p>+91 6388774338</p>
    </div>

    <div>
        <i className="fa-solid fa-envelope"></i>
        <p><Link to="mailto:support@company.com">prabhatcenter@gmail.com</Link></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div className="footer-icons">

        <Link to="http://www.faceBook.com"><i className="fa-brands fa-facebook"></i></Link>
        <Link to="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></Link>
        <Link to="https://www.linkedin.com/in/sanjay-kumar-singh-844a62222/"><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://github.com/sanjay892000"><i className="fa-brands fa-github"></i></Link>

    </div>

</div>

</footer>
    </div>
  )
}

export default Footer
