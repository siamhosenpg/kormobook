const Announcement = () => {
  return (
    <div className="bg-gradient-to-br from-[#007c06] via-[#002e02] to-[#0c2210] h-[calc(100vh-68px)] overflow-hidden  py-6 flex flex-col lg:flex-row gap-6 items-center justify-center">
      <div className="h-full w-3/6 flex items-center justify-center -mt-14 relative">
        <div className="w-6/8 relative z-20">
          <img src="/images/siam.png" alt="" />
        </div>
        <div className="w-7/8 absolute z-10 opacity-10">
          <img src="/images/s.png" alt="" />
        </div>
      </div>
      <div className=" w-3/6 text-white flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Announcement</h1>

        <div className=" uppercase font-bold text-6xl  text-shadow-xl">
          Siam Hossen
        </div>
        <div className="text-4xl font-bold border-border border-dashed border bg-[#013a04] w-fit px-8 py-6">
          Our Chief Executive Officer
        </div>
        <p className="w-10/12 mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sint?
          Nulla consequatur labore ullam asperiores atque blanditiis maxime
          dolores quasi culpa laborum, sapiente placeat itaque expedita nemo?
          Ut, voluptatum minima.
        </p>
      </div>
    </div>
  );
};

export default Announcement;
