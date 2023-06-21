'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const Carousel = ({ photo=[1,2,3],content,name=[1,2,3],desc=[1,2,3] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentDescIndex, setCurrentDescIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photo.length);
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % content.length);
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % name.length);
      setCurrentDescIndex((prevIndex) => (prevIndex + 1) % desc.length);

    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [photo,name,content,desc]);

  return (
  <div>
    <h1>{content[currentContentIndex]}</h1>
    <Image src={photo[currentImageIndex]} alt="Carousel Image" />;
    <p>{name[currentNameIndex]}</p>
    <p>{desc[currentDescIndex]}</p>
    <div>
      {/* <Image src={Photo} /> */}
    </div>
    </div>
  )
};

export default Carousel;