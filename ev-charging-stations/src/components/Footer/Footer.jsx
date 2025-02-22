import './Footer.css';
import { Link,useNavigate } from 'react-router-dom';


function Footer() {
const navigate=useNavigate()
  const handleUser = ()=>{
    navigate('/admin')

  }
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
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact-support">Contact Support</Link></li>
        <li><Link to="/faqs">FAQ's</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>
      <ul>
        <h4>Connect with us</h4>
        
        <li><a href="https://twitter.com">Twitter-X</a></li>
        <li><a href="https://www.linkedin.com/in/krishnakumar-s-474b86257/">Linkedin</a></li>
        <li><a href="https://www.instagram.com/krii.z_">Instagram</a></li>
        <li><a href="https://youtube.com">Youtube</a></li>
        <li><a href="https://threads.net">Threads</a></li>
      </ul>
      <ul>
        <h4>Stay Connected</h4>
        
        <li><Link to="/">Updates</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/sponsorship-info">Sponsorship info</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
      </ul>
                </div>
                <hr></hr>
                <div className="foot-end">
                    <div>
                    <h1 className="logos">Starlietti</h1>
                    <p>© 2025 Kris. All right reserved.</p>   
                    </div>
                    <div>
                    <button onClick={handleUser}>Im Admin</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer