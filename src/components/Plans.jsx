import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Personalized Loan Solutions</h2>
                    <p className='text-center text-4xl font-bold'>Start today</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Discover a range of loan options designed to match your unique financial needs. Whether you're planning a major purchase, consolidating debts, or handling unexpected expenses, our flexible loan offerings have you covered. We believe in providing solutions that empower you on your financial journey.</p>
                        {/* <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p> */}
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Instant Credit Score Check</h2>
                    <p className='text-center text-4xl font-bold'>Start today</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>No more waiting. Get your credit score right here, right now. Our quick and secure process provides you with an instant snapshot of your credit health.</p>
                        <p className='py-2 border-b mx-8 mt-8'>Check Your Credit Score Instantly</p>
                        <p className='py-2 border-b mx-8'>Seamless Access to Your Credit Health</p>
                        <p className='py-2 border-b mx-8'>Instant Credit Insights</p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Expert Guidance, Anytime Assistance</h2>
                    <p className='text-center text-4xl font-bold'>Start today</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Dedicated Support Whenever You Need </p>
                        <p className='py-2 border-b mx-8'>Rest easy knowing our support team is available 24/7, ready to assist with your financial queries.</p>
                        <p className='py-2 border-b mx-8'>Complex financial decisions made easy – our experts are here to guide you through your application, terms, and repayments.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
