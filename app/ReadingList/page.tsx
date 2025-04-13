

import React from 'react'

import Image from 'next/image'

import AppliedCryto from "../(root)/BooksFolder/AppliedCryto.jpg"

import ByFrankRubin from "../(root)/BooksFolder/ByFrankRubin.jpg"

import CrytoaandNetworking from "../(root)/BooksFolder/CrytoaandNetwork.jpg"

import CrytomadeSimple from "../(root)/BooksFolder/CrytomadeSimple.jpg"

import DiscreteMaths from "../(root)/BooksFolder/DiscreteMaths.jpg"

import JoyofCryto from "../(root)/BooksFolder/JoyofCryto.jpg"

import SeriousCryto from "../(root)/BooksFolder/SeriousCryto.jpg"

import TsBook from "../(root)/BooksFolder/TsBook.jpg"

import UnderstandingCryto from "../(root)/BooksFolder/UnderstandingCryto.jpg"



const ReadingList = () => {
  const books = [
    { src: AppliedCryto, alt: "Applied Cryptography" },
    { src: ByFrankRubin, alt: "By Frank Rubin" },
    { src: CrytoaandNetworking, alt: "Cryptography and Networking" },
    { src: CrytomadeSimple, alt: "Cryptography Made Simple" },
    { src: DiscreteMaths, alt: "Discrete Maths" },
    { src: JoyofCryto, alt: "The Joy of Cryptography" },
    { src: SeriousCryto, alt: "Serious Cryptography" },
    { src: TsBook, alt: "TypeScript Book" },
    { src: UnderstandingCryto, alt: "Understanding Cryptography" },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">My Reading List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <Image 
              src={book.src}
              alt={book.alt}
              width={300} 
              height={200} 
              className="object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">{book.alt}</h2>
          </div>
        ))}
      </div>




      <p> Am not smart but am curious</p>
    </div>
  )
}

export default ReadingList












