import { Link } from "react-router-dom"
import banner from "../assets/banner.svg"
function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-3">
     <div className="col-span-2 md:w-[80%]">
      <img src={banner} alt="img"></img>
     </div>
     <div className="col-span-1 my-2 flex flex-col justify-center">
      <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
      <p className="my-2 text-justify">Welcome to Fintech Loan Application Portal. We understand your financial needs and offer a seamless way to access the funds you require. Our innovative approach ensures a quick and efficient application process, helping you achieve your goals sooner.</p>
      <Link to="/checkcredit"style={{ textDecoration: 'none' }}><button className="w-[30%] bg-black text-white p-3 rounded"> Get started</button></Link>
     </div>
    </div>
  )
}
export default Experts