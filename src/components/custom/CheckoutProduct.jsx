const CUSTOM_YELLOW = "#FFA500";

const CheckoutProduct = ({
  name = "Aditya",
  quantity = 12,
  price = 299,
  image = {
    url: "https://media.istockphoto.com/id/1584787887/photo/construction-workers-working-on-a-construction-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=K6I6rNDI3Pn6ETIoGm0HlUNqOMRQOQrfnRqG607xJMU=",
  },
  color = CUSTOM_YELLOW,
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-lg dark:bg-zinc-900 transition-transform hover:scale-105 duration-300 ease-in-out">
      <img
        src={image.url}
        alt="Product"
        className="w-24 sm:w-36 h-24 sm:h-32 rounded-lg object-cover border"
      />
      {/* Product details */}
      <div className="flex flex-col flex-1 ml-10">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-200">
          {name}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
          <span className="flex items-center gap-2 font-medium">
            Color:
            <span
              className="w-5 h-5 rounded-full border shadow-sm"
              style={{ backgroundColor: color }}
            ></span>
          </span>
          
          <span className="hidden sm:block">|</span>
          <span className="font-medium">
            Qty: <span className="font-semibold text-blue-500">{quantity}</span>
          </span>
          
          <span className="hidden sm:block">|</span>
          <span className="font-semibold">
            Price:{" "}
            <span className="font-semibold text-green-500">₹{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct