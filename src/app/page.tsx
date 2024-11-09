import Image from "next/image";

function Projects() {
  return (
    <div className=" min-h-screen flex flex-col items-center p-7 ">
      {/* Header Section */}
      <div className=" w-[830px] text-left flex flex-col md:flex-row items-center space-y-30 md:space-x-16 mt-40">
        <div>
          <h1 className="text-4xl font-semibold text-gray-900">
            Hi, I am John, <br /> Creative Technologist
          </h1>
          <br />
          <p className="text-lg text-gray-600 max-w-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="mt-6 px-5 py-3 bg-red-400 text-white font-semibold rounded">
            Download Resume
          </button>
        </div>
        <div className="overflow-hidden flex-shrink-0">
          <img src="/hero.png" alt="Profile" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-[#F4E2E2] mt-16 p-8 w-[1000px]">
        <div className="flex justify-between items-center mb-6 max-w-8xl mx-auto w-[830px]">
          <h2 className="font-bold text-2xl text-gray-800 ]">
            Recent Post
          </h2>
          <a href="#" className="text-pink-500">View all</a>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-9 w-[830px]">
          <div className="bg-white p-10">
            <h3 className="text-2xl font-bold">Making a design system from scratch</h3>
            <p className="text-gray-500 mt-6">12 Feb 2020 | Design, Pattern</p>
            <p className="mt-6 mx-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="bg-white p-10">
            <h3 className="text-2xl font-bold">Making a design system from scratch</h3>
            <p className="text-gray-500 mt-6">1 Feb 2020 | Design, Pattern</p>
            <p className="mt-6 mx-1 ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>

      {/* Featured Works Section */}
      <div className="w-[1000px] h-[870px] bg-pink-50 py-14">
      <div className="max-w-12xl mx-4 px-8">
       <h2 className="mx-10 font-bold text-3xl text-gray-800 mb-8">Featured works</h2>
     <div className="space-y-14">
            {/* Work Item 1 */}
      <div className="flex items-start p-3 px-12 ">
      <Image src="/photo1.png" alt="Designing Dashboards" width={200} height={400} className="rounded-md mr-6" />
      <div>
     <h3 className="text-2xl font-bold text-gray-800 ">Designing Dashboards</h3>
      <div className="flex items-center space-x-4 mt-1">
      <span className="text-xs bg-red-300 text-white px-2 py-1 rounded-full">2020</span>
      <span className="text-sm text-gray-500">Dashboard</span>
     </div>
                <p className="text-sm text-gray-600 mt-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            {/* Work Item 2 */}
            <div className="flex items-start p-3 px-12 ">
              <Image src="/photo2.png" alt="Designing Dashboards" width={200} height={400} className="rounded-md mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Designing Dashboards</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs bg-red-300 text-white px-2 py-1 rounded-full">2020</span>
                  <span className="text-sm text-gray-500">Dashboard</span>
                </div>
                <p className="text-sm text-gray-600 mt-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
            {/* Work Item 3 */}
            <div className="flex items-start p-3 px-12 ">
              <Image src="/photo3.png" alt="Designing Dashboards" width={200} height={400} className="rounded-md mr-6" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Designing Dashboards</h3>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs bg-red-300 text-white px-2 py-1 rounded-full">2020</span>
                  <span className="text-sm text-gray-500">Dashboard</span>
                </div>
                <p className="text-sm text-gray-600 mt-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-pink-50 w-[1000px] text-center py-8 p-12">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/fb.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/insta.png" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Group.png" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          <b>Copyright ©2020 All rights reserved</b>
        </p>
      </footer>
    </div>
  );
}

export default Projects;
