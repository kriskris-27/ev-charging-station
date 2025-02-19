import './Footer.css';

function Footer() {
    return (
        <>
            <div className="foot">
                <div className="foot-top">
                    <div className="foot-top-l">
                        <h3>Subscribe to updates</h3>
                        <p>Stay informed about EV charging station updates and more</p>
                    </div>
                    <div className="foot-top-r">
                        <div className="email">
                            <input placeholder='Your email here' />
                            <button>join</button>
                        </div>
                        <p>By subscribing,you agree to our Privacy Policy</p>
                    </div>
                </div>
                <hr></hr>
                <div className="foot-bottom">
                    <ul>
                        <h4>Quick Links</h4>
                        <li><a>About Us</a></li>
                        <li><a>Contact Support</a></li>
                        <li><a>FAQ's</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Community</a></li>
                    </ul>
                    <ul>
                        <h4>Connect with us</h4>
                        <li><a>Twitter-X</a></li>
                        <li><a>Linkedin</a></li>
                        <li><a>Instagram</a></li>
                        <li><a>Youtube</a></li>
                        <li><a>Threads</a></li>
                    </ul>
                    <ul>
                        <h4>Stay Connected</h4>
                        <li><a>Updates</a></li>
                        <li><a>Events</a></li>
                        <li><a>Support</a></li>
                        <li><a>Sponsorship info</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>
                <hr></hr>
                <div className="foot-end">
                    <h1 className="logos">Starlietti</h1>
                    <p>© 2025 Kris. All right reserved.</p>

                </div>
            </div>
        </>
    );
}

export default Footer