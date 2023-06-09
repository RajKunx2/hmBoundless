import React from 'react'
import Image from "next/image"
import Logo from "../assets/main.png"
import gmail from "../assets/gmail.png"
import money from "../assets/money.png"
import rocket from "../assets/rocket.png"
import group from "../assets/group.png"
import canvas from "../assets/canvas.jpg"

export default function Advertise() {
    return (
        <>
            <div className='flex flex-col md:flex-row mt-[100px]'>
                <div className='flex basis-1/2 w-full h-auto align-middle text-center'>
                    <Image src={Logo} height={480} width={480} alt='' className='mx-auto mb-6' />
                </div>
                <div className='flex basis-1/2 w-full h-auto flex-col flex-start justify-center md:px-14 px-8'>
                    <div className='my-3 lg:text-5xl text-3xl font-BodoniModa font-bold'>PUT YOUR BRAND IN EVERYONE’S HAND</div>
                    <div className='my-3 text-lg md:text-xl font-sans text-slate-700'>Receive meaningful impressions and utilize the greatest brand loyalty platform in the ad industry</div>
                    <div className='my-3 text-sm md:text-lg bg-black w-fit px-8 py-4 rounded-lg hover:bg-slate-900 hover:cursor-pointer shadow-slate-100 shadow-xl text-white'><a href='https://forms.gle/Kg4PVYzsKPjMMtoR6'>Get A Quote</a></div>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-screen h-fit mt-24'>
                <div className='flex basis-1/2 flex-col md:mx-14 mx-4'>
                    <div className='lg:text-5xl text-4xl my-8 font-BodoniModa font-semibold md:mx-4'>Our product is a blank canvas</div>
                    <div className='lg:text-base my-2 font-BodoniModa md:mx-4 text-slate-600'>We are the opposite of traditional advertising because we are not annoying. Instead of making the audience cringe or run for cover, we put a smile on their face, and from that state of happiness is when they&#39;ll be excited to support your brand.</div>
                    <div className='flex flex-col justisfy-start'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='basis-1/2 mt-8'>
                                <div className='flex flex-col basis-1/2 items-start justify-start md:mx-8'>
                                    <h1 className='text-lg my-2 font-bold text-orangslate-700'>Use QR Codes</h1>
                                    <p className='text-base text-slate-500'>to connect anything on the internet, such as websites, coupons, and videos</p>
                                </div>
                            </div>
                            <div className='basis-1/2 mt-8'>
                                <div className='flex flex-col basis-1/2 items-start justify-start md:mx-8'>
                                    <h1 className='text-lg my-2 font-bold text-orangslate-700'>Social Media</h1>
                                    <p className='text-base text-slate-500'>Increase your custormer base by showing you social media handles on packages.</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='basis-1/2 mt-8'>
                                <div className='flex flex-col basis-1/2 items-start justify-start md:mx-8'>
                                    <h1 className='text-lg my-2 font-bold text-orangslate-700'>Subsidize or Cover the Entire Cost by Sharing the Ad Space</h1>
                                    <p className='text-base text-slate-500'>We help you to cut your CAC by 40%</p>
                                </div>
                            </div>
                            <div className='basis-1/2 mt-8'>
                                <div className='flex flex-col basis-1/2 items-start justify-start md:mx-8'>
                                    <h1 className=' text-lg my-2 font-bold text-orangslate-700'>Eco-friendly</h1>
                                    <p className='text-base text-slate-500'>100% Biodegradable and Recyclable Pads</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div className='my-6 md:mx-6 text-sm md:text-lg bg-black w-fit px-8 py-4 rounded-lg hover:bg-slate-900 hover:cursor-pointer shadow-slate-100 shadow-xl text-white'><a href='https://forms.gle/Kg4PVYzsKPjMMtoR6'>Get A Quote</a></div>
                    </div>
                </div>
                <div className='flex basis-1/2 w-full items-center align-middle'>
                    <Image src={canvas} height={420} width={420} alt='' className='mx-auto' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row align-middle justify-center items-center md:my-8 bg-black'>
                <div className='flex md:flex-row flex-col align-middle justify-center items-center md:my-6'>
                    <div className='flex flex-col basis-1/2 items-center my-2 justify-center align-middle md:mx-8'>
                        <Image src={gmail} alt='' width={60} height={60} />
                        <h1 className='text-center text-4xl my-4 font-bold text-white'>10x</h1>
                        <p className='text-center text-base text-gray-400'>More impressions than direct mail</p>
                    </div>
                    <div className='flex flex-col basis-1/2 items-center my-2 align-middle justify-center md:mx-8'>
                        <Image src={money} alt='' width={60} height={60} />
                        <h1 className='text-center text-4xl my-4 font-bold text-white'>40%</h1>
                        <p className='text-center text-base text-gray-400'>Decrease in your CAC</p>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col align-middle justify-center items-center md:my-6'>
                    <div className='flex flex-col basis-1/2 items-center my-2 justify-center align-middle md:mx-8'>
                        <Image src={rocket} alt='' width={60} height={60} />
                        <h1 className='text-center text-4xl my-4 font-bold text-white'>29%</h1>
                        <p className='text-center text-base text-gray-400'>return on investment</p>
                    </div>
                    <div className='flex flex-col basis-1/2 items-center my-2 align-middle justify-center md:mx-8'>
                        <Image src={group} alt='' width={60} height={60} />
                        <h1 className='text-center text-4xl my-4 font-bold text-white'>Priceless</h1>
                        <p className='text-center text-base text-gray-400'>saving lives and helping the planet</p>
                    </div>
                </div>
            </div>
            <div className='h-full w-2/3 flex justify-start my-16'>
                <h1 className='text-4xl md:text-7xl  font-bold my-4 mx-8'>It&apos;s a mini billboard in your hands
                </h1>
            </div>
        </>
    )
}
