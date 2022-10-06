<<<<<<< HEAD


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
=======
import React from 'react'
const Footer = () => {
    const social = [
        {link : "https://github.com/Mustafa-Azad025",logo : "/github.png"},
        {link : "https://www.linkedin.com/in/mustafa-azad-4128ba225",logo : "/linkedin.png"},
        {link : "https://instagram.com/webdesigne_ui_ux?igshid=YmMyMTA2M2Y=",logo : "/instagram.png"},
    ]
  return (
    <>
      <div className="md:flex grid grid-cols-1 text-center space-y-2 md:justify-between md:mx-20 md:py-3">
        <h3 className="font-semibold mt-2">Copyright © {new Date().getFullYear()}{" "}<span className=' font-bold text-orange-500'> Mustafa Azad</span>. All Right Reserved</h3>
        <div className="flex space-x-6 my-1 md:mx-0 mx-auto">
        {social.map((value,idx) => {
          return(
            <a href={value.link} key={idx}><img className='w-8 h-8 hover:-translate-y-2 ease-in-out duration-200' src={value.logo} alt="" /></a>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default Footer
>>>>>>> 66af8111c1f90a09027ec3b4c803467fe2df6c82
