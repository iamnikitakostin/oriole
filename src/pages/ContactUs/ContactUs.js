import React from 'react'

import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="app__findUs section__padding" id="contact">
      <div className="app__findUs-container">
        <div className="app__findUs-info">
          <div className='findUs__location'>
            <h2 className='headtext__base' style={{fontFamily: "var(--font-alt)", fontWeight: "300"}}>Address</h2>
            <p className='p__base' style={{fontWeight: "400"}}>1200 W 73rd Ave, Vancouver, BC V6P 6Z1</p>
          </div>
          <div className='findUs__hours'>
            <h2 className='headtext__base' style={{fontFamily: "var(--font-alt)", fontWeight: "300"}}>Open Hours</h2>
            <ul>
              <li className='p__base' style={{fontWeight: "400"}}>Mon - Fri: 9 a.m. – 3 p.m.</li>
              <li className='p__base' style={{fontWeight: "400"}}>Sat - Sun: Closed</li>
            </ul>
          </div>
          <div className="findUs__contacts">
          <h2 className='headtext__base' style={{fontFamily: "var(--font-alt)", fontWeight: "300"}}>Call Us</h2>
            <p className='p__base' style={{fontWeight: "400"}}>+1 (604) 263-2691</p>
          </div>
          <div className='horizontal__divider'/>
          <div className='findUs__identity-social'>
            {/* <a href='https://www.instagram.com/yah_yah_yaramen/' target='_blank' rel="noreferrer"><div aria-label='instagram'><BsInstagram size="1.5rem" color='#aa2fb7'/></div></a>
            <a href='https://www.facebook.com/richmondyahyahya/' target='_blank' rel="noreferrer"><div aria-label='facebook'><BsFacebook size="1.5rem" color='#0765ff'/></div></a>
            <a href='https://www.doordash.com/en-CA/store/yah-yah-ya-ramen-richmond-576879/' target='_blank' rel="noreferrer"><div aria-label='doordash'><SiDoordash size="1.5rem" color='#eb1600'/></div></a>
            <a href='https://www.fantuanorder.com/store/yah-yah-ya-ramen/ca-5202/' target='_blank' rel="noreferrer"><div aria-label='fantuan'><TbCircleLetterF size="1.5rem" color='#15c2c2'/></div></a> */}
          </div>
        </div>
        <div className="app__findUs-identity">
          <div className="identity-logo">
            {/* <img src={images.logo} alt="logo" /> */}
          </div>
          <div className='identity-map'>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30575.698672293616!2d-123.12756300405793!3d49.199658458393365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674e94bdde4af%3A0x29e00a347c067550!2sOriole%20Caf%C3%A9!5e0!3m2!1sen!2sca!4v1714418785921!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          <div className='app__developer' style={{marginTop: "1rem"}}>
            <p className='p__base'>Developed by <a href='https://nikitakostin.com' target='_blank' rel="noreferrer" style={{textDecoration: "underline"}}>Nikita Kostin</a></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs