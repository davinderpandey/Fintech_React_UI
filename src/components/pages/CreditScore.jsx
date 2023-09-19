import { useState, useRef } from 'react';

const CreditScore = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [resultData, setResultData] = useState({})
    const [showResult, setShowResult] = useState(false)

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //check for complete data
        getPreds();
        console.log(formData)
    };


    const handleReset = (event) => {
        event.preventDefault();
        setShowResult(false);
        formRef.current.reset();
        setFormData({});
    };

    const getPreds = () => {

        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {

                setShowResult(true);
                console.log(data);
                if(!(data.nearestneighbour==='Congratulations! Your loan approved!!')){
                    let datarray = data.nearestneighbour.split(",");
                    console.log('splitted -> ',datarray)
                    const newArray = datarray.map(s => s.replace(/[[,\]]/g, ''));
                    console.log('newArray -> ',newArray)
                    data.nearestneighbour=newArray
                }
                
                console.log("after manipulation",data)
                setResultData(data)
            });
    }

    // 6999938 25 3 single rented yes Air_traffic_controller Delhi 3 13


    if (!showResult) {
        return (
        <div className="bg-sky-200 max-w-[1240px] md:grid grid-cols-1 mx-auto py-[50px] pt-[35px] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">  
        <div className='ml-[20%] mr-[20%]'>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form">
                    <header className='text-xl md:text-3xl md:p-[20px] text-center text-gray-900'>
                        <h1>Generate Your Creditworthiness</h1>
                    </header>
                    <div className="formContainer">
                        <div className="formLeft">
                            <div className="formCard">
                                <div className="mt-4">
                                    <span>Fill in required personal info</span>
                                </div>
                                <input className=" mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 outline-blue-600 shadow-sm"  type="text" name="name" placeholder="Your Name" onChange={handleChange} required />

                                <input className=" mt-4 my-[30px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center" type="number" name="age" placeholder="Your Age" onChange={handleChange} required />

                                <select className=" mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 outline-blue-600 shadow-sm" defaultValue="def" name="married" onChange={handleChange} required>
                                    <option value="def" disabled>Marital Status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Unmarried</option>
                                </select>
                            </div>
                            <div className="formCard">
                                <div className="mt-4 ">
                                    <span >Fill in required profession info</span>
                                </div>
                                <select defaultValue="def" name="profession" onChange={handleChange} required className="mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2  outline-blue-600 shadow-sm">
                                    <option value="def" disabled>Choose Profession</option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Economist">Economist</option>
                                    <option value="Technology_specialist">Technology_specialist</option>
                                    <option value="Computer_hardware_engineer">Computer_hardware_engineer</option>
                                    <option value="Petroleum_Engineer">Petroleum_Engineer</option>
                                    <option value="Hotel_Manager">Hotel_Manager</option>
                                    <option value="Software_Developer">Software_Developer</option>
                                    <option value="Web_designer">Web_designer</option>
                                    <option value="Psychologist">Psychologist</option>
                                    <option value="Technical_writer">Technical_writer</option>
                                    <option value="Magistrate">Magistrate</option>
                                    <option value="Fashion_Designer">Fashion_Designer</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Drafter">Drafter</option>
                                    <option value="Biomedical_Engineer">Biomedical_Engineer</option>
                                    <option value="Army_officer">Army_officer</option>
                                    <option value="Mechanical_engineer">Mechanical_engineer</option>
                                    <option value="Graphic_Designer">Graphic_Designer</option>
                                    <option value="Flight_attendant">Flight_attendant</option>
                                    <option value="Comedian">Comedian</option>
                                    <option value="Surveyor">Surveyor</option>
                                    <option value="Geologist">Geologist</option>
                                    <option value="Microbiologist">Microbiologist</option>
                                    <option value="Politician">Politician</option>
                                    <option value="Chartered_Accountant">Chartered_Accountant</option>
                                    <option value="Technician">Technician</option>
                                    <option value="Civil_engineer">Civil_engineer</option>
                                    <option value="Consultant">Consultant</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Firefighter">Firefighter</option>
                                    <option value="Surgeon">Surgeon</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Analyst">Analyst</option>
                                    <option value="Chef">Chef</option>
                                    <option value="Design_Engineer">Design_Engineer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Civil_servant">Civil_servant</option>
                                    <option value="Librarian">Librarian</option>
                                    <option value="Air_traffic_controller">Air_traffic_controller</option>
                                    <option value="Official">Official</option>
                                    <option value="Statistician">Statistician</option>
                                    <option value="Police_officer">Police_officer</option>
                                    <option value="Physician">Physician</option>
                                </select>

                                <input type="number" name="current_job_years" placeholder="Current Job Years" onChange={handleChange} required className="mt-4 my-[30px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center" />

                                <input type="number" name="experience" placeholder="Total Work Experience" onChange={handleChange} required className="mt-4 my-[30px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center" />
                            </div>
                        </div>
                        <div className="formRight">
                            <div className="formCard">
                                <div className="formTitle">
                                    <div>Set Assets Info</div>
                                    <span>Fill in required assets info</span>
                                </div>

                                <input type="number" name="income" placeholder="Your Income" onChange={handleChange} required  className="mt-4 my-[30px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center"/>
                                <select defaultValue="def" name="state" onChange={handleChange} required className="mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 outline-blue-600 shadow-sm">
                                    <option value="def" disabled>Choose State</option>
                                    <option value="Uttar_Pradesh">Uttar_Pradesh</option>
                                    <option value="Andhra_Pradesh">Andhra_Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="West_Bengal">West_Bengal</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Tamil_Nadu">Tamil_Nadu</option>
                                    <option value="Madhya_Pradesh">Madhya_Pradesh</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Jammu_and_Kashmir">Jammu_and_Kashmir</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Himachal_Pradesh">Himachal_Pradesh</option>
                                    <option value="Uttar_Pradesh[5]">Uttar_Pradesh[5]</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Sikkim">Sikkim</option>


                                </select>
                                <select defaultValue="def" name="house_ownership" onChange={handleChange} required className="mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2  outline-blue-600 shadow-sm">
                                    <option value="def" disabled>House Ownership</option>
                                    <option value="rented">Rent</option>
                                    <option value="owned">Own</option>
                                    <option value="norent_noown">None</option>
                                </select>
                                <input type="number" name="current_house_years" placeholder="Current House Years" onChange={handleChange} required className="mt-4 my-[30px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:text-center"/>
                                <select defaultValue="def" name="car_ownership" onChange={handleChange} required className="mt-4 h-8 w-full rounded-md border border-slate-300 text-sm pl-2 outline-blue-600 shadow-sm">
                                    <option value="def" disabled>Car Ownership</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <div className="btns">
                                    <button className="bg-[#a0a4a433] my-[30px] inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 mt-4 " onClick={handleReset}>
                                        Reset
                                    </button>
                                    <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
                                        Generate
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
        );
    }

    else if (showResult) {
        return (
          <>
            <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
              <div className='bg-white p-8 rounded-xl shadow-md w-96'>
                <h1 className='text-2xl font-semibold mb-4 text-center'>
                  Creditworthiness Result
                </h1>

                <div className='mb-4 text-center'>
                  <h2 className='text-xl font-medium'>
                    {' '}
                    <span className='font-medium'>Name: </span>
                    {formData.name}
                  </h2>
                  <p className='mt-2'>
                    <span className='font-medium'>Score:</span>{' '}
                    {resultData.value}
                  </p>
                  <p>
                    <span className='font-medium'>Credit Worthiness:</span>{' '}
                    {resultData.creditgrade}
                  </p>
                  <p className='mt-2'>
                    <span className='font-medium mr-6'>Nearest Neighbour:</span>
                  </p>
                  <p className='list-decimal list-inside pl-5 mt-1'>
                    {resultData.nearestneighbour !== 'Congratulations! Your loan approved!!' ? (
                      <>
                        <p className='mt-1'>
                          Income : {resultData.nearestneighbour?.[0]}
                        </p>
                        <p className='mt-1'>
                          Experience : {resultData.nearestneighbour?.[1]}
                        </p>
                        <p className='mt-1'>
                          Married : {resultData.nearestneighbour?.[2]}
                        </p>
                        <p className='mt-1'>
                          House Ownership : {resultData.nearestneighbour?.[3]}
                        </p>
                        <p className='mt-1'>
                          Car Ownership : {resultData.nearestneighbour?.[4]}
                        </p>
                        <p className='mt-1'>
                          Current Job Years : {resultData.nearestneighbour?.[5]}
                        </p>
                        <p className='mt-1'>
                          Current House Years :{' '}
                          {resultData.nearestneighbour?.[6]}
                        </p>
                      </>
                    ) : (
                      <p className='mt-1'>
                        Result: {resultData.nearestneighbour}
                      </p>
                    )}
                  </p>
                </div>

                <button
                  className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full'
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>

            {/* <div className="result">
                <div className="resultContainer">
                    <div className="topSection">
                        <div className="left">
                            <h1>{formData.name}</h1>
                            <div className="score">
                                <span>{resultData.value}</span>
                                <div>Predicted Score</div>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Credit Worthiness</h1>
                            <div className="score">
                                <span>{resultData.grade}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottomSection">

                        <div className="reccContainer">
                            <div className='title'>Nearest Neighbour</div>
                            <div className="card">
                                <span>{resultData.recc}</span>
                            </div>
                                <div className="btn reset" onClick={handleReset}>Reset</div>
                        </div>

                    </div>
                </div>
            </div> */}
          </>
        )
    }
}

export default CreditScore;