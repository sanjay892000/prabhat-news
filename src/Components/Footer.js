import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Prabhat<span>News</span></h3>

                    <p className="footer-links">
                        <Link to="#" className="link-1">Home</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Contact</Link>
                        <Link to="#">Help</Link>
                        <Link to="#">Report</Link>

                    </p>

                    <p className="footer-company-name">Prabhat news © 2023</p>
                </div>

                <div className="footer-center">

                    <div className='con-details'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Mirzapur Utter Pradesh, India</p>
                    </div>

                    <div className='con-details'>
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 6388774338</p>
                    </div>

                    <div className='con-details'>
                        <i className="fa-solid fa-envelope"></i>
                        <p><Link to="mailto:support@company.com">sanjay892000@gmail.com</Link></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div className="footer-icons">

                        <Link to="https://www.linkedin.com/in/sanjay-kumar-singh-844a62222/"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to="https://github.com/sanjay892000"><i className="fa-brands fa-github"></i></Link>
                        <Link to="https://www.instagram.com/sanjay_singh.15/"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100010363560624&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><i className="fa-brands fa-facebook"></i></Link>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer
