const Card = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Product <span className="text-green-600">Categories</span>
      </h1>
      <div className="flex justify-around">
      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://tse1.mm.bing.net/th/id/OIP.22aFQSK47XCY6E9UlMeDRQHaE7?pid=Api&P=0&h=180')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Vegetables</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://www.nutritionfact.in/wp-content/uploads/2022/06/egg.jpg')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Egg</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://www.aahaimpex.in/wp-content/uploads/2018/06/Wheat-Flour.png')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Wheat Floor</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://www.ikedaspa.com/wp-content/uploads/2014/09/04-SJ_rice-import-126-ab-ED.png')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Rice</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://tse4.mm.bing.net/th/id/OIP.s9qaRABM6sHPWHUYQ-pJPwHaHa?pid=Api&P=0&h=180')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Millets</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>

      <div className="m-2 p-2 bg-gray-200 shadow-2xl w-[350px] text-center rounded-xl">
        <p
        className="bg-[url('https://static.toiimg.com/photo/68483689.cms')] 
            bg-cover bg-center bg-no-repeat 
            w-[250px] h-[300px] rounded-lg mx-auto mb-2 mt-2">
        </p>

        <p className="text-xl font-serif font-semibold mb-2">Salt</p>
        <p className="text-xl font-serif mb-2">Upto 45% Off</p>
        <button className="p-2 border-1 rounded-xl mb-2 hover:bg-green-600 hover:text-white hover:font-semibold">Shop now</button>
      </div>
    </div>
    </div>
  );
};

export default Card;
