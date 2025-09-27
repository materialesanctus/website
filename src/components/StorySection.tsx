export default function StorySection() {
  const stories = [
    {
      id: 1,
      title: "Start of the sanctus story here",
      subtitle: "mission and all that",
      image: "/assets/hero-image-1.png",
      position: "left",
      maskWidth: "652px",
      maskHeight: "398px"
    },
    {
      id: 2,
      title: "More about the group why",
      subtitle: "who where when because", 
      image: "/assets/hero-image-2.png",
      position: "right",
      maskWidth: "652px", 
      maskHeight: "398px"
    },
    {
      id: 3,
      title: "Part three of the story come and see",
      subtitle: "and sing with us",
      image: "/assets/hero-image-3.png", 
      position: "left",
      maskWidth: "652px",
      maskHeight: "398px"
    }
  ];

  return (
    <section id="about" className="bg-[#171718] py-0">
      {stories.map((story, index) => (
        <div key={story.id} className="relative h-[583px] flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-[1440px] h-full relative flex items-center mx-auto">
            
            {/* Story Image with proper masking like Figma */}
            <div 
              className={`absolute h-[425px] opacity-90 overflow-hidden ${
                story.position === "left" 
                  ? "left-[-403px] w-[1055px]" 
                  : story.id === 2 
                    ? "left-[173px] w-[1062px]" 
                    : "left-[-113px] w-[993px]"
              } top-1/2 transform -translate-y-1/2`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${story.image}')`,
                  maskImage: `url('${story.image}')`,
                  maskRepeat: 'no-repeat',
                  maskSize: `${story.maskWidth} ${story.maskHeight}`,
                  maskPosition: story.position === "left" 
                    ? (story.id === 1 ? '403px 0px' : '227px 2px')
                    : '397px 10px',
                  WebkitMaskImage: `url('${story.image}')`,
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskSize: `${story.maskWidth} ${story.maskHeight}`,
                  WebkitMaskPosition: story.position === "left"
                    ? (story.id === 1 ? '403px 0px' : '227px 2px') 
                    : '397px 10px'
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