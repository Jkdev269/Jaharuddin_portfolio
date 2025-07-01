export default function About({ isDarkMode }) {
  return <>
          
    <section id="about" className="mb-16 px-4 sm:px-0">
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        About Me
      </h2>
      <div className={`flex md:w-3/4 flex-col mt-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <p className="mb-1">
          Hi, I'm <span className={isDarkMode ? 'text-white font-semibold' : 'text-black font-semibold'}>Jaharuddin</span>. 
          I am a BCA student and have completed my degree from 
          <span className="font-medium"> Makhanlal Chaturvedi National University of Journalism and Communication</span>, 
          Bhopal, Madhya Pradesh, India.
        </p>
    
        <p className="mb-1">
          I specialize in building robust and scalable web applications using 
          <span className="font-medium"> MongoDB, Express.js, React,</span> and <span className="font-medium">Node.js</span>.
        </p>
    
        <p className="mb-1">
          I’ve developed several projects that showcase my skills and creativity, including:
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            {" "}Website Generator, JText Real-Time Chat App, E-commerce Platform, and a Feedback System.
          </span>
        </p>
    
        <p>
          I’m always eager to learn and take on new challenges. Whether it’s frontend interactivity or backend logic, 
          I enjoy bringing ideas to life with clean, maintainable code.
        </p>
      </div>
    </section>
  </>;
}