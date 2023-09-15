export const Graphic = () => {
  return (
    <div className="flex flex-col justify-center rounded-xl w-full bg-gray-200 p-5 gap-3">
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <p className="font-bold text-2xl text-right w-[150px]">Astro</p>
        <div className="w-full rounded-2xl p-1 border-primary-700 border-2">
          <div className="w-[98%] rounded-2xl bg-primary-600 text-white text-right pr-7 text-lg font-semibold">
            98
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <p className="text-xl text-right w-[150px]">Wordpress</p>
        <div className="w-full rounded-2xl p-1 border-primary-700 border-2">
          <div className="w-[58%] rounded-2xl bg-gray-500/30 text-right pr-7 text-lg font-semibold">
            58
          </div>
        </div>
      </div>
      <p className="text-center pt-4">
        Baseado em dados de desempenho do mundo real do{" "}
        <a href="https://httparchive.org/" target="_blank" className="font-bold hover:underline">
          "HTTP Archive"
        </a>{" "}
        (Lighthouse, P90)
      </p>
    </div>
  );
};
