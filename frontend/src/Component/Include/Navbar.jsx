import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo main.png'
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import gpt from '../../assets/gpt.jpeg'
import pg from '../../assets/monitor.jpeg'
import ilmu from '../../assets/sience.png'
import pendidikan from '../../assets/pendidikan.jpeg'
import tips from '../../assets/tips.jpeg'
import { FaArrowRight } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className='  bg-white font-Montserrat text-[13px] dm:flex items-center justify-center'>
        <div className='flex justify-between  items-center w-[24.5rem] h-[4rem] dm:w-[66rem] dm:h-[4rem]'>
          <div  className='dm:w-[8rem] dm:h-[3rem] w-[6rem] h-[3rem] m-2 mx-1 dm:mx-3'>
            <img src={Logo} alt="" className='w-full my-1' />
          </div>
          <ul className=' hidden dm:flex items-center dm:gap-[2rem] mx-5 font-bold'>
            <Link to={'/'} >Beranda</Link>

            <li className=" group py-2 flex items-center justify-center ">
                <button className="flex items-center  ">
                    Fitur <RiArrowDropDownLine className='size-8 text-biru'/>
                </button>
                <ul className="absolute hidden flex-col group-hover:block p-2 rounded top-12 font-Montserrat text-hitam2 bg-white w-[10rem]">
                    <li><a href="#" className="block py-2 hover:bg-gray-100">Layout</a></li>
                    <li><a href="#" className="block py-2 hover:bg-gray-100">Load page</a></li>
                    <li className="py-2 group">
                      <a href="#" className=" py-2  flex items-center">Animate page <FaArrowRight className='w-[2rem] h-[1rem]'/></a>
                        <ul className=' absolute animate-navbar2 group-hover:block hidden left-[10.5rem] bg-white w-[7rem] h-[6rem] pt-2 px-2 top-[5rem] space-y-2 rounded-lg'>
                          <li><p>Kiri kanan</p></li>
                          <li><p>Kanan kiri</p></li>
                          <li><p>Atas bawah</p></li>
                        </ul>   
                    </li>
                    <li><a href="#" className="block  py-2 hover:bg-gray-100">Position</a></li>
                    <li><a href="#" className="block  py-2 hover:bg-gray-100">Transition</a></li>
                </ul>
            </li>
            <li className=" group py-2 flex flex-col justify-center items-center ">
                <button className="flex items-center hover:text-ungu">
                    Tranding <RiArrowDropDownLine className='size-8 text-biru '/>
                </button>
                  <ul className="absolute hidden w-[62rem] h-[14.5rem] group-hover:flex justify-center space-x-8 top-12  p-2 font-Montserrat rounded   bg-white  animate-navbar border-2">
                    <li className='space-y-2 h-[13rem]'>
                      <img src={tips} alt="" className='w-[10rem] h-[7rem] rounded-lg'/>
                      <div className='w-[10rem] h-[5.5rem] hover:text-pink'>
                        <h1 className='h-[4rem] font-bold'>Ada runtime terbaru dari Javascript apa bener bagus?</h1>
                        <p className='text-[11px] text-hitam2'>September 12, 2024</p>
                      </div>
                    </li>
                    <li className='space-y-2 h-[13rem]'>
                      <img src={tips} alt="" className='w-[10rem] h-[7rem] rounded-lg'/>
                      <div className='w-[10rem] h-[5.5rem] hover:text-pink'>
                        <h1 className='h-[4rem] font-bold'>Ada runtime terbaru dari Javascript apa bener bagus?</h1>
                        <p className='text-[11px] text-hitam2'>September 12, 2024</p>
                      </div>
                    </li>
                    <li className='space-y-2 h-[13rem]'>
                      <img src={tips} alt="" className='w-[10rem] h-[7rem] rounded-lg'/>
                      <div className='w-[10rem] h-[5.5rem] hover:text-pink'>
                        <h1 className='h-[4rem] font-bold'>Ada runtime terbaru dari Javascript apa bener bagus?</h1>
                        <p className='text-[11px] text-hitam2'>September 12, 2024</p>
                      </div>
                    </li>
                    <li className='space-y-2 h-[13rem]'>
                      <img src={tips} alt="" className='w-[10rem] h-[7rem] rounded-lg'/>
                      <div className='w-[10rem] h-[5.5rem] hover:text-pink'>
                        <h1 className='h-[4rem] font-bold'>Ada runtime terbaru dari Javascript apa bener bagus?</h1>
                        <p className='text-[11px] text-hitam2'>September 12, 2024</p>
                      </div>
                    </li>
                    <li className='space-y-2 h-[13rem]'>
                      <img src={tips} alt="" className='w-[10rem] h-[7rem] rounded-lg'/>
                      <div className='w-[10rem] h-[5.5rem] hover:text-pink'>
                        <h1 className='h-[4rem] font-bold'>Ada runtime terbaru dari Javascript apa bener bagus?</h1>
                        <p className='text-[11px] text-hitam2'>September 12, 2024</p>
                      </div>
                    </li>



                </ul>
            </li>
            <li className=" group py-2 flex flex-col justify-center items-center ">
                <button className="flex items-center hover:text-ungu">
                    Kategori <RiArrowDropDownLine className='size-8 text-biru '/>
                </button>
                  <ul className="absolute hidden group-hover:flex justify-center space-x-5  p-2  rounded top-12 bg-white w-[62rem] mr-7 h-[12rem] animate-navbar border-2">
                    <li className='space-y-2 h-[11rem]'>
                      <img src={tips} alt="" className='w-[11rem] h-[8rem] rounded-lg'/>
                      <a href="#" className="block mx-auto px-2 py-1 hover:bg-ungu hover:text-white h-[2rem] text-center border-2">Tips</a>
                    </li>
                    <li className='space-y-2 h-[11rem] '>
                      <Link to={'#'}>
                      <img src={gpt} alt="" className='w-[11rem] h-[8rem] rounded-lg'/>
                      <a href="#" className="block mx-auto px-2 py-1 hover:bg-ungu hover:text-white  h-[2rem] text-center border-2">Review</a>
                      </Link>
                    </li>
                    <li className='space-y-2 h-[11rem] '>
                      <Link to={'#'}>
                        <img src={pg} alt="" className='w-[11rem] h-[8rem] rounded-lg'/>
                        <a href="#" className="block mx-auto px-2 py-1 hover:bg-ungu hover:text-white  h-[2rem] text-center border-2">Teknologi</a>
                      </Link>
                    </li>
                    <li className='space-y-2 h-[11rem] '>
                      <img src={ilmu} alt="" className='w-[11rem] h-[8rem] rounded-lg'/>
                      <a href="#" className="block mx-auto px-2 py-1 hover:bg-ungu hover:text-white  h-[2rem] text-center border-2">Science</a>
                    </li>
                    <li className='space-y-2 h-[11rem] '>
                      <img src={pendidikan} alt="" className='w-[11rem] h-[8rem] rounded-lg'/>
                      <a href="#" className="block mx-auto px-2 py-1 hover:bg-ungu hover:text-white  h-[2rem] text-center border-2">Pendidikan</a>
                    </li>


                </ul>
            </li>
        
            <li>Iklan</li>
            <li>Tentang</li>
          </ul>
          <div className='flex items-center  gap-x-10 mr-5 '>
          
          <input
            class="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault01" />
         
          <div className='hidden'>
              <IoSearchOutline className='w-[25px] h-[25px]' />
          </div>

          </div>

        </div>
       
    </div>
  )
}
