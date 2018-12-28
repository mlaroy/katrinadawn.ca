import React from 'react';

const PricingTable = () => {
  return (
    <div className="lg:flex lg:items-center lg:-mx-2">
      <div class="mb-4 lg:mb-0 lg:w-1/4 lg:px-2">
        <div class="text-center border border-grey-light p-10 rounded shadow">
          <h2 class="text-lg mb-4">6 x 8</h2>
          <div class="mb-6">
            <span class="block text-2xl pb-2 font-serif">$125 - $175</span>
          </div>
          {/* <a class="text-sm inline-block bg-white border border-red text-red font-bold w-full p-3 rounded no-underline" href="#">Get started</a> */}
        </div>
      </div>
      <div class="mb-4 lg:mb-0 lg:w-1/4 lg:px-2">
        <div class="text-center border border-grey-light p-10 rounded shadow">
          <h2 class="text-lg mb-4">8 x 10</h2>
          <div class="mb-6">
            <span class="block text-2xl pb-2 font-serif">$175 - $225</span>
          </div>
          {/* <a class="text-sm inline-block border border-red text-red lg:border-none lg:bg-red lg:hover:bg-red-dark lg:text-white font-bold w-full p-3 rounded no-underline" href="#">Get started</a> */}
        </div>
      </div>
      <div class="mb-4 lg:mb-0 lg:w-1/4 lg:px-2">
        <div class="text-center border border-grey-light p-10 rounded shadow">
          <h2 class="text-lg mb-4">9 x 12</h2>
          <div class="mb-6">
            <span class="block text-2xl pb-2 font-serif">$225 - $275</span>
          </div>
          {/* <a class="text-sm inline-block bg-white border border-red text-red font-bold w-full p-3 rounded no-underline" href="#">Get started</a> */}
        </div>
      </div>
      <div class="mb-4 lg:mb-0 lg:w-1/4 lg:px-2">
        <div class="text-center border border-grey-light p-10 rounded shadow">
          <h2 class="text-lg mb-4">11 x 14</h2>
          <div class="mb-6">
            <span class="block text-2xl pb-2 font-serif">$275 - $325</span>
          </div>
          {/* <a class="text-sm inline-block bg-white border border-red text-red font-bold w-full p-3 rounded no-underline" href="#">Get started</a> */}
        </div>
      </div>
    </div>
  )
}

export default PricingTable;


// Pricing for licensing of an image for reproduction can be worked out directly with the artist