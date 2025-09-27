export default function StorySection() {
  const stories = [
    {
      id: 1,
      title: "Start of the sanctus story here",
      subtitle: "mission and all that",
      image: "/assets/hero-image-1.png",
      position: "left"
    },
    {
      id: 2,
      title: "More about the group why",
      subtitle: "who where when because", 
      image: "/assets/hero-image-2.png",
      position: "right"
    },
    {
      id: 3,
      title: "Part three of the story come and see",
      subtitle: "and sing with us",
      image: "/assets/hero-image-3.png", 
      position: "left"
    }
  ];

  return (
    <section id="about" className="bg-[#171718] py-0">
      {stories.map((story, index) => (
        <div key={story.id} className="relative h-[583px] flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[1440px] h-full relative flex items-center mx-auto">
            
            {/* Story Image - simplified approach */}
            <div 
              className={`absolute h-[400px] opacity-63 overflow-hidden rounded-lg ${
                story.position === "left" 
                  ? "left-0 w-[652px]" 
                  : "right-0 w-[652px]"
              } top-1/2 transform -translate-y-1/2`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${story.image}')`
                }}
              />
            </div>
            
            {/* Story Text - centered like in Figma */}
            <div className="absolute z-10 w-full top-1/2 transform -translate-y-1/2 text-center px-5">
              <h2 className="font-['Baskerville'] text-[48px] md:text-[60px] leading-normal text-[#F0F0F0] max-w-[800px] mx-auto">
                {story.title}
                <br />
                {story.subtitle}
              </h2>
            </div>
            
          </div>
        </div>
      ))}
    </section>
  );
}