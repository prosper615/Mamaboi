


'use client'

import React from 'react'

import Image from 'next/image';

import Link from 'next/link';



import ProsperImage from "../MyProfolio/ProsperImage.jpg"






const AboutMe = () => {







  return (


    <div  className="flex flex-col items-center" >



<Image 
  src={ProsperImage}
  alt="Image description" 
  width={300} 
  height={200} 
   className="mb-4"
/>
<small>  I love this image i generated it with meta ai. i use it as my profile pics  &#x1F642;
</small>

<div  className="text-left mt-4  ">  

  <ul>


<p >  Hi i love to go with the pen name  Mìmì tiānfù, i love to write to myself but my first and middle names are Prosper Chidera respectively  </p> <br />

<p>  Am a Nigerian student </p> <br />

<p>  Am keen on web and blockchain.  Currently I also read crytography for fun (Since i found a way to get most books i want)  </p> <br />


<p>  I have the best mum  and i lovely father who left when i was younger to be in heaven  </p>  <br />

<p>   Am the &quot; non technical in a technical team&quot; </p>  <br />

<p> Every one have their struggles, with mine i can tell you &quot; poverty is a gravity&quot;, but if humans can
  defy gravity with wings and rockets so anyone can defy &quot;poverty&quot; . I would keep navigating </p>   <br />


<p>  Thank God i later got a laptop and every day i pray that my future smiles at me </p>   <br />


<p>  I just started out and am always eager to learn</p> <br />


<p>    I love reading what interest me, am rrently and slowly reading for fun the books on 
<Link  href= "/ReadingList"  className="underline text-blue-600 hover:text-blue-800">  my  reading list</Link>
due to my intrest in crytography, this is excluding book i might read because of school work

  </p> <br />

  


<p>  I opened this github when i thought i would get a laptop, take a look and also roast  my  
  
   <a className="underline text-blue-600 hover:text-blue-800" href="https://github.com/prosper615" target="_blank" rel="noopener noreferrer">
  
      github  
 
</a> </p>  <br />


<p> I have a dream of being a software/crytography engineer, and i am working towards it </p>  <br />



</ul>



<p> &gt; This plain website is influenced by  <a  className="underline text-blue-600 hover:text-blue-800"href="https://sigilwen.ca/"> Sigil Wen's</a> and <a  className="underline text-blue-600 hover:text-blue-800" href="https://shreybirmiwal.vercel.app/"> Shrey Birmiwal's</a> websites </p> <br /> 
</div>
  
    </div>
  )
}

export default AboutMe
