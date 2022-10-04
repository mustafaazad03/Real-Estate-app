import React from "react";

const Button = ({ name, num, link }) => {
	return (
		<a href={link}>
			<button
				className={
					num == 1
						? "bg-orange-400 w-auto hover:bg-orange-500 focus-within:bg-orange-500 px-6 py-2 font-semibold rounded-3xl"
						: "border-orange-400 w-auto border-2 px-6 py-2 hover:bg-orange-400 focus-within:bg-orange-400 font-semibold rounded-3xl"
				}
			>
				{name}
			</button>
		</a>
	);
};

export default Button;
