import React from 'react';
import '../styles/footer.css';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Find a Store</li>
            <li>Nike Journal</li>
            <li>Become a Member</li>
            <li>Feedback</li>
            <li>Promo Codes</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get Help</h4>
          <ul>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Purpose</li>
            <li>Report a concern</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Guides & Legal</h4>
          <ul>
            <li>Terms of Use</li>
            <li>Terms of Sale</li>
            <li>Company Details</li>
            <li>Privacy & Cookie Policy</li>
            <li>Privacy & Cookie Setting</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>South Africa</span>
        <span>© 2025 Nike, Inc. All rights reserved</span>
      </div>
    </footer>
  );
};

export default FooterSection;
