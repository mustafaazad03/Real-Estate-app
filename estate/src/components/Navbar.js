import React from "react";
import Button from "./Button";

const Navbar = () => {
	const nav = [
		{
			name: "About",
			add: "#",
		},
		{
			name: "Rent",
			add: "#",
		},
		{
			name: "Buy",
			add: "#",
		},
		{
			name: "Sell",
			add: "#",
		},
	];
	return (
		<>
			<div className="flex justify-between mx-4 my-1">
				<div className="flex space-x-10">
					<a href="#">
						<img className="w-20 h-10" src="/logo.png" alt="Logo" />
					</a>
					<div className="my-3 h-8 border-r-2 border-orange-500"></div>
					{nav.map((value, idx) => {
						return (
							<div
								className="my-4 font-medium hover:font-bold hover:border-b-2 hover:border-orange-600  hover:text-orange-600 focus-within:font-bold focus-within:border-b-2 focus-within:border-orange-600  focus-within:text-orange-600"
								key={idx}
							>
								<a href={value.add}>{value.name}</a>
							</div>
						);
					})}
				</div>
				<div className="my-2 space-x-3">
					<Button name="Login" num="1" link="#"/>
					<Button name="Sign up" link="#" />
				</div>
			</div>
		</>
	);
};

export default Navbar;
