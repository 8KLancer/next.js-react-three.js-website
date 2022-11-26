import Link from 'next/link'
import React, { useState } from 'react'

const AccordionComp = () => {

  const [Show, setShow] = useState(false)

  return (
    <>
      <style jsx>
        {
          `
        .accordion {
          width: 100%;
          height: 350px;
          overflow: hidden;
          margin: 0px auto;
        }
        
        .accordion ul {
          width: 100%;
          display: table;
          table-layout: fixed;
          margin: 0;
          padding: 0;
          overflow:hidden;
        }
        
        .accordion ul li {
          display: table-cell;
          vertical-align: bottom;
          position: relative;
          width: 16.666%;
          height: 350px;
          background-repeat: no-repeat;
          background-position: center center;
          transition: all 400ms ease-in-out;
        }
        
        .accordion ul li div {
          display: block;
          overflow: hidden;
          width: 100%;
        }
        
        .accordion ul li div a {
          display: block;
          height: 350px;
          width: 100%;
          position: relative;
          z-index: 3;
          vertical-align: bottom;
          padding: 15px 20px;
          box-sizing: border-box;
          color: #fff;
          text-shadow: 1px 1px 2px #000;
          /*filter: invert(100%);*/
          text-decoration: none;
          font-family: Open Sans, sans-serif;
          transition: all 300ms ease-in-out;
        }
        
        .accordion ul li div a * {
          opacity: 0;
          margin: 0;
          width: 100%;
          text-overflow: ellipsis;
          position: relative;
          z-index: 5;
          white-space: nowrap;
          overflow: hidden;
          -webkit-transform: translateX(-20px);
          transform: translateX(-20px);
          -webkit-transition: all 400ms ease-in-out;
          transition: all 400ms ease-in-out;

        }
        .accordion ul li div a h2 {
          font-family: Montserrat, sans-serif;
          text-overflow: clip;
          font-size: 32px;
          text-transform: uppercase;
          margin-bottom: 2px;
          top: 80px;
        }
        
        .accordion ul li div a p {
          top: 100px;
          font-size: 18px;
          padding-left: 1em;
        }
        
        .accordion ul li:nth-child(1) { 
          background-image: url("https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-db2RxpoSXYB/image_part_001.jpg");  
          background-position: 50% 30%;
          filter: saturate(3);
          border-radius:20px 0px 0px 20px;
        }
        
        .accordion ul li:nth-child(2) { 
          background-image: url("https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-db2RxpoSXYB/image_part_002.jpg");  
          background-position: 50% 30%;
         filter: grayscale(70%);
        }
        
        .accordion ul li:nth-child(3) { 
          background-image: url("https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-db2RxpoSXYB/image_part_003.jpg");  
          background-position: 50% 30%;
          filter: saturate(2);
        }
        
        .accordion ul li:nth-child(4) { 
          background-image: url("https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-cut-image-db2RxpoSXYB/image_part_004.jpg"); 
          background-position: 50% 30%;
          filter: hue-rotate(180deg);
          border-radius:0px 20px 20px 0px;
        }
      
        
        .accordion ul li { background-size: cover; }
        .accordion ul:hover li { width: 10%; }
        .accordion ul:hover li:hover { width: 90%; }
        
        /*.accordion ul:hover li:hover a { background: rgba(0, 0, 0, 0.4); }*/
        
        .accordion ul:hover li:hover a * {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
         @media screen and (max-width: 680px) {
          
          body { margin: 0; }
          .accordion { height: auto; }
        
          .accordion ul li,
          .accordion ul li:hover,
          .accordion ul:hover li,
          .accordion ul:hover li:hover {
            position: relative;
            display: table;
            table-layout: fixed;
            width: 100%;
            -webkit-transition: none;
            transition: none;
          }
          .accordion ul li div a * {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
        }

        .sliderText{
          font-size: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          top: 45%;
          color:white;
        }

        .sliderTextTrue{
          font-size: 16px;
          display: flex;
          justify-content: start;
          align-items: start;
          position: relative;
          top: 25%;
          color:white;
          transform:rotate(-90deg);
        }
        `
        }
      </style>
      <div className="accordion relative pb-[650px] pb-[100px] px-4">
        <ul>
          <Link href="/accordionSections/section1">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Blockchain</span> : <span className='sliderText'>Trigan Blockchain</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Blockchain</h2>
                  <p>The first real-world relevant blockchain
                    Designed as a fairer more powerful solution to the needs of <br /> urban communities.
                    The foundation of our smart city operating system.
                  </p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section2">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Economy</span> : <span className='sliderText'>Trigan Economy</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Economy</h2>
                  <p>The next step in community enablement.Imagine a caring economy actively working for the success of everyone, <br /> regardless of background - a system created to bring external funding to real-world towns and cities everywhere.
                  </p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section3">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Smartest City</span> : <span className='sliderText'>Trigan Smartest City</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Smartest City</h2>
                  <p>Fact checked networks of sensors providing data and analysis to the Trigan urban blockchain, empowering <br /> communities and helping everyone to have a voice. The operating system for smart cities.</p>
                </a>
              </div>
            </li>
          </Link>
          <Link href="/accordionSections/section4">
            <li onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
              {Show ? <span className='sliderTextTrue'>Trigan Digital Twins</span> : <span className='sliderText'>Trigan Digital Twins</span>}
              <div>
                <a href="#" className="sliderLink">
                  <h2>Trigan Digital Twins</h2>
                  <p>A new community-centric approach to digital twins. Applying data holistically to inform real-time community <br /> simulations. This is Trigan’s answer to Metaverse, introducing new ways to live, work and play virtually. <br /> Commuting should be a choice, not a necessity.
                  </p>
                </a>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default AccordionComp