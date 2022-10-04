import React from 'react'

const Cards = ({pic,price,name,address,beds,bathroom,area}) => {
  return (
    <>
        {/*Product Card Container */}
        <div class="flex flex-col shadow">
            {/*  Product Card  */}
            <div class="flex flex-col shadow-md cursor-pointer w-72 hover:-translate-y-1 duration-300">
                {/*  Preview  */}
                <div class="inline relative group h-48">
                    {/* Image  */}
                    <img class="absolute rounded-t object-cover h-full w-full"
                        src={pic}
                        alt="Product Preview" />

                        {/*  Hover Bar  */}
                        <div class="flex flex-row absolute justify-end
                            h-16 w-full bottom-0 px-3 space-x-2
                            bg-none opacity-0 group-hover:opacity-100
                            group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
                            transition-all ease-in-out duration-200 delay-100">

                            {/*  Add to Bookmarks Button  */}
                            <button class="bg-gray-50/10 rounded-full 
                                px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                                transition-colors duration-200">
                                <svg className='w-5 h-5 m-auto fill-white/70 text-white/50' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </button>

                            {/*  Add to Favorites Button  */}
                            <button class="bg-gray-50/10 rounded-full 
                                px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                                transition-colors duration-200">
                                <svg className='w-5 h-5 m-auto fill-white/70 text-white/50' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                </div>

                {/*  Body  */}
                <div class="flex flex-col bg-white rounded-b p-3">
                    {/*  Price/Ribbon  */}
                    <div class="text-lg font-bold text-orange-500">
                      ${price}<span className='text-sm font-normal text-orange-500/80'>/month</span>
                    </div>
                    {/*  Author - Category  */}
                    <div class="text-xl font-bold">
                      {name}
                    </div>

                    {/*  Price  */}
                    <div class="text-xs text-gray-400 font-semibold mt-1 mb-1">
                        {address}
                    </div>
                    </div>
                    {/* property of house */}
                    <div class="flex items-center justify-between gap-4 p-2 mx-1 border-t dark:text-gray-400 dark:border-gray-700">
                    {/* No of Beds */}
                    <div class="flex items-center space-x-2">
                    <svg width="25" height="25" stroke="#ff5252" fill='none' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.25 10.814a3.724 3.724 0 0 0-1.5-.314H5.25a3.754 3.754 0 0 0-3.75 3.75v5.25a.75.75 0 1 0 1.5 0v-.375a.38.38 0 0 1 .375-.375h17.25a.38.38 0 0 1 .375.375v.375a.75.75 0 1 0 1.5 0v-5.25a3.754 3.754 0 0 0-2.25-3.436Z"></path>
                      <path d="M17.625 3.75H6.375A2.625 2.625 0 0 0 3.75 6.375V9.75a.187.187 0 0 0 .24.18c.409-.12.833-.18 1.26-.18h.198a.188.188 0 0 0 .188-.166A1.5 1.5 0 0 1 7.125 8.25H9.75a1.5 1.5 0 0 1 1.49 1.334.188.188 0 0 0 .188.166h1.147a.187.187 0 0 0 .187-.166A1.5 1.5 0 0 1 14.25 8.25h2.625a1.5 1.5 0 0 1 1.49 1.334.188.188 0 0 0 .188.166h.197c.427 0 .851.06 1.26.18a.188.188 0 0 0 .24-.18V6.375a2.625 2.625 0 0 0-2.625-2.625Z"></path>
                    </svg>
                      <span class="text-xs font-medium"><span>{beds}</span> Beds</span>
                    </div>
                    {/* No of Bathrooms */}
                    <div class="flex items-center space-x-1">
                    <svg width="25" height="25" fill="none" stroke="#ff5252" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1v0Z"></path>
                      <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"></path>
                      <path d="m4 21 1-1.5"></path>
                      <path d="m20 21-1-1.5"></path>
                    </svg>
                      <span class="text-xs font-medium"><span>{bathroom}</span> Bathroom</span>
                    </div>
                    {/* Total Area */}
                    <div class="flex items-center space-x-1">
                    <svg width="25" height="25" fill="#ff5252" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7V3H2v18h20V7H12Zm-2 12H4v-2h6v2Zm0-4H4v-2h6v2Zm0-4H4V9h6v2Zm0-4H4V5h6v2Zm10 12h-8V9h8v10Zm-2-8h-4v2h4v-2Zm0 4h-4v2h4v-2Z"></path>
                    </svg>
                      <span class="text-xs font-medium"><span>{area}</span>m<sup>2</sup></span>
                    </div>
                  </div>
                </div>
            </div>
    </>
  )
}

export default Cards