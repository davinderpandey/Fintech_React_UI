import { Link } from 'react-router-dom';
import Typed from 'react-typed';
 function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
     <div className="max-w-[1240px] py-[100px] mx-auto text-center font-bold">
       <div className="text-xl md:text-3xl md:p-[20px]">Starting from scratch with credit?</div>
       <div className="text-white text-5xl md:text-[80px] md:p-[20px]">No Problem.</div>
       <div className="text-white  text-[20px] md:text-[50px] md:p-[20px]"><Typed 
       className="md:text-5xl sm:text-4xl text-xl font-bold"
       strings={['CHECK YOUR CREDIT SCORE','GET LOAN','HOME LOAN']} 
       typeSpeed={120} 
       backSpeed={140} 
       loop/>
       </div>
       <Link to="/checkcredit"style={{ textDecoration: 'none' }}><button className="bg-black text-white p-3 rounded"> Get started</button></Link>
     </div>
     
    </div>
  )
}
export default Banner