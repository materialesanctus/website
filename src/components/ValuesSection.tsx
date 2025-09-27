export default function ValuesSection() {
  const values = [
    {
      title: "PASSION",
      icon: (
        <svg width="46" height="47" viewBox="0 0 46 47" fill="none">
          <path d="M23 0L28.85 15.15L46 23L28.85 30.85L23 46L17.15 30.85L0 23L17.15 15.15L23 0Z" fill="#F0F0F0" opacity="0.4"/>
        </svg>
      )
    },
    {
      title: "COMMUNITY", 
      icon: (
        <svg width="67" height="79" viewBox="0 0 67 79" fill="none">
          <path d="M33.5 0C52 0 67 15 67 33.5C67 52 52 67 33.5 67C15 67 0 52 0 33.5C0 15 15 0 33.5 0Z" fill="#F0F0F0" opacity="0.4"/>
        </svg>
      )
    },
    {
      title: "GOSPEL",
      icon: (
        <svg width="59" height="79" viewBox="0 0 59 79" fill="none">
          <path d="M29.5 0L59 20V59L29.5 79L0 59V20L29.5 0Z" fill="#F0F0F0" opacity="0.4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#171718] py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                {value.icon}
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xs tracking-[1px] uppercase text-[#F0F0F0] opacity-40">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}