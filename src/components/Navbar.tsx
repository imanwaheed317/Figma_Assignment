export default function Navbar() {
  return (
    <nav className="absolute top-0 w-[1400px] py-12 px-14 ">
      <div className="container mx-auto flex justify-end space-x-9">
        <a href="#works">
          Works
      </a>
     <a href="#blog">
          Blog
       </a>
        <a href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
