import React from 'react'
import icon from '../../assets/logo_main4.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div className='flex justify-center h-[12rem] dm:h-[15rem]  bg-footer dm:mt-10 mt-5'>
            <div className='h-[12rem] w-[63rem]  '>
                <div className='flex h-[8rem] dm:h-[10rem] justify-center'>
                    <div  className='flex justify-center items-center  h-[8rem] dm:h-[12rem] w-[11rem] '>
                        <img src={icon} alt="" className='w-[10rem] h-[3.5rem]' />
                    </div>
                    <div  className=' hidden dm:flex flex-col items-center justify-center px-2 h-[11rem] text-white w-[36rem]'>
                        <div className='space-y-2'>
                            <h1 className='text-[20px] font-bold'> Tentang Kami </h1>
                            <p className='text-item'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur beatae omnis soluta alias facilis deserunt magnam iure quam cupiditate, sint non !</p>
                        </div>
                    </div>
                    <div  className='flex justify-center items-center gap-4 h-[8rem] dm:h-[11rem] w-[14.8rem] text-white'>
                   
                            <FaFacebook className=' w-[1.4rem] h-[2rem] '/>
                            <FaXTwitter className=' w-[1.4rem] h-[2rem]' />
                            <FaPinterest className='w-[1.4rem] h-[2rem]  '/>
                            <IoLogoYoutube className='w-[1.4rem] h-[2rem]  '/>
                            <FaInstagram className='w-[1.4rem] h-[2rem]'/>
           
                    </div>
                </div>
                <div className='h-[3rem] dm:h-[4rem]  px-5 bg-footer2 text-white flex justify-center flex-col dm:flex-row dm:justify-between items-center'>
                    <div className='flex gap-2'>
                        <h1>Desain</h1><h1>-</h1><h1>Martec</h1>
                    </div>
                    <div className='flex gap-5'>
                        <h1>Home</h1>
                        <h1>Tentang kami</h1>
                        <h1>Privasi</h1>
                        <h1>Hubungi kami</h1>
                    </div>
                </div>
            </div>
    </div>
  )
}
