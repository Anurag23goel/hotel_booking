"use client"
import Navbar from '@/custom_components/home/navbar';
import Searchbar from '@/custom_components/home/searchbar';

const Page = () => {

  return (
    <div className="min-h-screen sm:px-3 bg-gray-50">
      <div className="border border-black border-4 bg-[#057d23] md:min-h-[45vh] min-h-[25vh] w-full">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Navbar />
        </div>
      </div>
      <div className="md:max-w-5xl w-[80%] mx-auto md:transform md:-translate-y-1/2">
        <Searchbar />
      </div>
      
      <div className="border border-black border-2 bg-white shadow-sm py-4">
        <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Mahabaleshwar: 183 properties found
          </h1>
          <div className="flex gap-2">
            <button
            className='rounded-sm p-2  border  border-black border-2 hover:bg-gray-950 hover:text-white'
            >
              List
            </button>
            <button
            className='rounded-sm p-2  border  border-black border-2 hover:bg-gray-950 hover:text-white' >
              Grid
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="border border-black border-2  grid grid-cols-2 gap-6">
            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600" 
                alt="villa" 
                className="w-full h-50 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold ">Dronacharya Villa laude ka</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-600">MahaBaleswar</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">20</span>
                      x
                    </div>
                    <span className="text-sm text-gray-600">3 reviews</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <span className="text-sm text-gray-500 line-through">₹2300</span>
                    <div className="text-2xl font-bold">₹1400</div>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    See availability
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
