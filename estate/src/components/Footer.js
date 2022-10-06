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
