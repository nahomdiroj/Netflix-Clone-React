import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import CopyrightIcon from '@mui/icons-material/Copyright'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer_outer_container">
        <div className="footer_inner_container" >
            <div  className="footer_icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
            <div className="footer_data">
               <div>
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notice</li>
                    </ul>
               </div>

               
               <div>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                    </ul>
               </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='service_code'>
                <p>
                    service code
                </p>
            </div>
            <div className='copy-write'>
            © 1997-2024 netflix, Inc.
            </div>

        </div>

        

       
      </div>
    
 




    </div>
  )
}

export default Footer