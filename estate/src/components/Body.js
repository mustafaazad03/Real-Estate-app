import React, { useState } from "react";
import Data from "../components/Data";
import Cards from "./Cards";
const Body = () => {
	const [info, setInfo] = useState(Data);
	// dates filter function
	const datefilter = (item) => {
		const result = Data.filter((curdata) => {
				if(item == 0){return Data}
				return curdata.date == item
		})
		setInfo(result);
	}
	// filtering price with if and else
	const pricefilter = (item) => {
		const result = Data.filter((curdata) => {
			if(item == 1000){
				return curdata.price < item;
			}else if(item == 2000){
				return (curdata.price < item && curdata.price >= 1000)
			}else if(item == 3000){
				return (curdata.price > (2000) && curdata.price <= 3500)
			}else if(item == 4000){
				return (curdata.price > (3500))
			}else if (item == 0){
				return Data
			}
		})
		setInfo(result);
	}
	// filtering by Location
	const filterresult = (item) => {
		const result = Data.filter((curdata) => {
			return curdata.location === item;
		});
		(item == "")?setInfo(Data):
		setInfo(result);
	}
	// property type filter
	const typefilter = (item) => {
		const result = Data.filter((curdata) => {
			if(item == 0){
				return Data;
			}
				return curdata.type === item;
		})
		setInfo(result);
	}
	return (
		<>
			<div className="w-full md:w-[90vw] lg:w-full xl:w-[90vw] mx-auto p-5 rounded-lg bg-white">
  <div className="relative">
	<div className="absolute flex items-center ml-2 h-full">
	  <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
	  </svg>
	</div>
	{/* search bar */}
	<input type="Search" placeholder="Search by Location ,Bedrooms ,Bathrooms ,. . ." className="px-8 py-3 w-full rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
	  </div>
		{/* just a text filter */}
	<div className="flex items-center justify-between mt-4">
	  <p className="font-medium">
		Filters
	  </p>
		{/* reset button for reverse changes */}
	  <button onClick={() => setInfo(Data)} className="px-4 py-2 bg-orange-100 hover:bg-orange-300 font-semibold text-gray-800 text-sm rounded-lg">
		Reset Filter
	  </button>
	</div>

	<div>
		{/* location parameter select thing */}
	  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
		<select onChange={(e) => filterresult(e.target.value)} className="px-4 py-3 w-full font-semibold rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Location</option>
		  <option value="india">India</option>
		  <option value="USA">USA</option>
		</select>
		{/* date parameter */}
		<select onChange={(e) => datefilter(e.target.value)} className="px-4 py-3 w-full font-semibold rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="0">Date Available</option>
		  <option value="1">1-10-22 to 30-10-22</option>
		  <option value="2">1-11-22 to 30-11-22</option>
		  <option value="3">1-12-22 to 30-12-22</option>
		  <option value="4">1-1-23 to 30-1-23</option>
		</select>

        {/* <input onChange={filterdate} className='px-4 py-3 w-full rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm' type="date" value="2022-10-6" name="House" id="stdate" /> */}
		
		
		{/* price parameter for selection */}
		<select onChange={(e) => pricefilter(e.target.value)} className="px-4 py-3 font-semibold w-full rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="0">Price</option>
		  <option value="1000">Below $1000</option>
		  <option value="2000">$1000 - $2000</option>
		  <option value="3000">$2000 - $3500</option>
		  <option value="4000">Above 3500</option>
		</select>
		{/* selection on basis of proprty type */}
		<select onChange={(e) => typefilter(e.target.value)} className="px-4 py-3 w-full font-semibold rounded-md bg-orange-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
		  <option value="">Property Type</option>
		  <option value="House">Houses</option>
		  <option value="Plot">Plot</option>
		  <option value="multifb">Multi-Floor Building</option>
		  <option value="Flat">Flat</option>
		</select>
	  </div>
	</div>
  </div>
			{info.length === 0 ? (
				<div className="mx-[42vw] font-bold text-xl w-40 my-6">No Data Found</div>
			) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-3 mx-auto w-[90vw] lg:w-full xl:w-[90vw]">
				{info.map((value, idx) => {
					return (
            <div className="mx-auto my-2">
						<Cards name={value.name} price={value.price} pic={value.pic} address={value.address} beds={value.beds} bathroom={value.bathroom} area={value.area} key={idx} />
            </div>
          );
				})}
        </div>
			)}
		</>
	);
};

export default Body;
