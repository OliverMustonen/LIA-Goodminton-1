import React from 'react'



const Footer = () => {
    return (
       <footer className='footer'>
          
            
              <ul className='no-bullets foot-li'>
                <li>
                 <a className='foot-space' href="https://www.w3schools.com">Oil Painting Care</a>
                 <a href="https://www.w3schools.com">Canvas Size</a>
                </li>
              </ul>      
            
             <ul className='no-bullets foot-li'>
               <li className=''>
                <a className='foot-space' href="https://www.w3schools.com">Contact Us</a>
                <a className='foot-space' href="https://www.w3schools.com">FAQ</a>
                <a className='foot-space' href="https://www.w3schools.com">Privacy</a>
                <a href="https://www.w3schools.com">Links</a>
               </li>
             </ul>

            
            <hr className='footline'/>
            
           
            <div className='ms-auto grid-container-footer'>
            
              <div>
                <a href="https://www.w3schools.com">
                     <i className="fab fa-facebook fa-4x facebook-ico"></i>
                </a>
              </div>
            
              <div>
                <a href="https://www.w3schools.com">
                     <i className="fab fa-pinterest fa-4x pinterest-ico"></i>
                </a>
              </div>
          
              <div>
                <a href="https://www.w3schools.com">
                  <button className='fa-stack fa-stack-4x fa-2x tumblr-btn'>
                    <i className="fab fa-tumblr tumblr-ico"></i>
                  </button>
                </a>
              </div>

            
              <a href="https://www.w3schools.com">
              <button className='fa-stack fa-stack-4x fa-2x twitter-btn'>
                <i className="fab fa-twitter twitter-ico"></i>
              </button>
              </a>
             
              
              
            
           
            
            </div>
         

           <div className='copyright'>
               <p>©2006-2022 | <a href="/"> TheWorldsArtist.com </a>| All rights reserved</p>
           </div>
         
       </footer>
    )
}

export default Footer
