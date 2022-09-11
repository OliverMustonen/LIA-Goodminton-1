import React from 'react'
import { Link } from 'react-router-dom'; 
import image102 from "../Images/image102.png";
import image72 from "../Images/image 72.png";
import image73 from "../Images/image 73.png";
import image720 from "../Images/image 730.png";
import image730 from "../Images/image 720.png";
import image30 from "../Images/image 30.png";
import image104 from "../Images/image 104.png";
import image105 from "../Images/image 105.png";
import image106 from "../Images/image 106.png";

const Homesite = () => {
    return (
        <div>
            <div className='contain'>
                <div className='left-side'>
                    <h1>We have over <span className='dark-blue'>thousands</span> of art replicas</h1> 
                    <p>The art replicas are from the world's most renowned artists.    
                    <br></br> 
                    Hand-painted, museum reproduction oil paintings. 
                    <br></br>
                    Check out our art gallery
                    </p>
                    <Link className="" to="/products"><i className="gallery_btn"><button>Art Gallery</button></i></Link>
                </div>
               
                 <img src={image102} alt=""></img> 
                
                
            </div>

           <h2 className='green-1'>The World’s Artist Oil Painting Reproductions & Portraiture.</h2>
            {/* 1 */}
            <div className='rest-contain'>
                <div>
                     <h2 className='red-h2'>Museum Quality, Hand Painted, Oil Painting Reproductions On Canvas</h2>
                     <img src={image72} alt=""></img> 
                     <p>Choose from thousands of art replicas from the world's most renowned artists. Hand-painted, museum reproduction oil paintings. Cezanne, Monet, Klimt, Van Gogh and hundreds more painters to choose from in our art gallery. Any art movement, any style, any subject and any size.</p>
                     <button className='btn-left btn-homesite-1 red-btn'>Buy the Famous Painters Artwork</button>
                 </div>
                 <div className='right-side'>
                     <h2 className='purple-h2'>Personal Portrait Oil Painting From A Photo</h2>
                 <img src={image73} alt=""></img> 
                 <p>People, family & friends, all want their portraits done on canvas. Immortalize your selfie, look at our beautiful portraiture section.</p>
                 <button className='btn-right btn-homesite-2 purple-btn'>Commission A Portrait</button>
                 </div>
            </div>
            <hr className='line'/>
            
            {/* 2 */}
            <div className='rest-contain'>
                <div>
                     <h2 className='orange-h2'>Hand Painted, Custom Made, Oil Painting From Your Photographs!</h2>
                     <img src={image730} alt=""></img> 
                     <p>A favorite new painter, art in a hotel lobby, a decorating magazine image, even street art. Anything you see, anywhere, anytime, take a photograph and send it to us. We turn photos into art. A custom, made to order work of fine art for you. Look at some ideas of where to get inspirations.</p>
                     <button className='btn-left btn-homesite-3 orange-btn'>Request Custom Artwork</button>
                 </div>
                 <div className='right-side'>
                     <h2 className='blue-h2'>Pet Portrait Oil Painting From Your Photos</h2>
                 <img src={image720} alt=""className='img-width'></img> 
                 <p>Your favorite dog, cat, horse, or pet painted in oil on canvas from your picture by our portrait artists. See our darling pet portraiture section.</p>
                 <button className='btn-right btn-homesite-4 blue-btn'>Commission a Pet Portait in Oil</button>
                 </div>
            </div>
            <hr className='line'/>
            {/* 3 */}
            <div className='rest-contain'>
                <div>
                     <h2 className='purple-h2'>Famous Painter Biographies & Museum Quality Oil Painting Reproductions.</h2>
                     <img src={image30} alt=""></img> 
                     <p>Their stories will surprise and entertain you, some are sad and some are unbelievable. Some were poor, some were renowned in their lifetime and others only after their early deaths. Read their interesting biographies and see their many works of art reproduced here.</p>
                     <button className='btn-left btn-homesite-5 purple-btn'>Read Artist Biographies & Buy Artwork Replicas</button>
                 </div>
                 <div className='right-side'>
                     <h2 className='green-h2'>Home Portrait Made From Your House Photo.</h2>
                 <img src={image104} alt="" className='img-width'></img> 
                 <p>Our talented painters will do a 100% painted by hand, work of art of your house, for your home. See our beautiful house portraits.</p>
                 <button className='btn-right btn-homesite-6 green-btn'>Commission a House Portrait</button>
                 </div>
            </div>
            <hr className='line'/>
            {/* 4 */}
            <div className='rest-contain'>
                <div>
                     <h2 className='yellow-h2'>THEN & NOW Famous Painting Locations And The All New TILT-SHIFT Oil Painting Photos.</h2>
                     <img src={image105} alt=""></img> 
                     <p>See the locations where the artists set up their easel to paint. Look at side by side photo comparisons of the sites and their artwork. Also included in this section is the new Tilt-Shift photos of famous oil paintings, including tilt-shift Van Gogh, and many others.</p>
                     <button className='btn-left btn-homesite-7 yellow-btn'>View Then & Now & Tilt-Shift Photos</button>
                 </div>
                 <div className='right-side'>
                     <h2 className='red-h2'>Oil Painting Reproduction Wall Art Photo Mock-Up.</h2>
                 <img src={image106} alt=""></img> 
                 <p>An oil painting reproduction in your home? Send us a photo, we will mock up your photo with your chosen art replica in your decor.</p>
                 <button className='btn-right btn-homesite-8 red-btn'>Request a Free Wall Art Mockup</button>
                 </div>
            </div>
            <hr className='line'/>

           

        </div>
    )
}

export default Homesite
