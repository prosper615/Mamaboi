


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
<small>  I &#10084;&#65039; this image i generated it with meta ai. i use it as my profile pics  &#x1F642;
</small>

<div  className="text-left mt-4  ">  

  <ul>


<p > &gt; Hi i love to go with the pen name  Mìmì tiānfù (i love to write to myself) but my first and middle names are Prosper Chidera respectively  &#129309; </p> <br />

<p> &gt; Am a Nigerian student &#128218; </p> <br />

<p> &gt; Am keen on web and blockchain.  Currently I also read crytography for fun (Since i found a way to get most books i want) &#128640; </p> <br />


<p> &gt; I have the best mum &#129303; and i lovely father who left when i was younger to be in heaven &#128557; </p>  <br />

<p> &gt;  Am the " non technical in a technical team" &#129335; </p>  <br />

<p>&gt; Every one have their struggles, with mine i can tell you " poverty is a gravity", but if humans can
  defy gravity with wings and rockets so anyone can defy "poverty" . I would keep navigating </p>   <br />


<p> &gt; Thank God i later got a laptop and every day i pray that my future smiles at me &#128591;</p>   <br />


<p> &gt; I just started out and am always eager to learn</p> <br />


<p> &gt;   I love reading what interest me, am rrently and slowly reading for fun the books on 
<Link  href= "/ReadingList"  className="underline text-blue-600 hover:text-blue-800">  my  reading list</Link>
due to my intrest in crytography, this is excluding book i might read because of school work

  </p> <br />

  


<p> &gt;  I opened this github when i thought i would get a laptop, take a look and also roast  my  &#128513;
  
   <a className="underline text-blue-600 hover:text-blue-800" href="https://github.com/prosper615" target="_blank" rel="noopener noreferrer">
  
      github  
 
</a> </p>  <br />


<p> &gt; I have a dream of being a software/crytography engineer, and i am working towards it </p>  <br />



</ul>



<p> &gt; This plain website is influenced by  <a  className="underline text-blue-600 hover:text-blue-800"href="https://sigilwen.ca/"> Sigil Wen's</a> and <a  className="underline text-blue-600 hover:text-blue-800" href="https://shreybirmiwal.vercel.app/"> Shrey Birmiwal's</a> websites </p> <br /> 
</div>
  
    </div>
  )
}

export default AboutMe
