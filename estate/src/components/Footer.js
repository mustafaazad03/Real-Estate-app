

import React from "react";
import './footer.css'

function Footer() {
  return (
   <>
	<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>COMPANY</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>GET HELP</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>BOOK ONLINE</h4>
  	 			<ul>
  	 				<li><a href="#">plots</a></li>
  	 				<li><a href="#">houses</a></li>
  	 				<li><a href="#">villa</a></li>
  	 				<li><a href="#">bunglow</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>FOLLOW US</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i className="fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
			
  	 	</div>
		<hr />
		<div className="row" >
          		<p className="col-sm">
            	&copy;{new Date().getFullYear()} Real State App | All rights reserved |Terms Of Service | Privacy
				</p>
        	</div>
  	 </div>
	 
  </footer>


   </>
  );
}

export default Footer;