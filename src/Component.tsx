function Component() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [wishlist, setWishlist] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const product = {
    name: 'SmartWatch X5000',
    price: 199.99,
    discount: 20,
    images: [
      'https://example.com/watch1.jpg',
      'https://example.com/watch2.jpg',
      'https://example.com/watch3.jpg',
    ],
    ratings: 4.5,
    reviews: 120,
    sizes: ['S', 'M', 'L'],
    colors: ['blue', 'red', 'green'],
  };

  return (
    <div className="bg-zinc-950 p-6 rounded-xl max-w-sm mx-auto">
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={product.images[carouselIndex]}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 flex space-x-2 p-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                  carouselIndex === index ? 'bg-white' : 'bg-zinc-600'
                }`}
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white">{product.name}</h2>
          <div className="flex items-center mt-2">
            <span className="text-lg font-bold text-white">
              ${product.price - (product.price * product.discount) / 100}
            </span>
            <span className="text-lg text-zinc-500 line-through ml-2">
              ${product.price}
            </span>
            <span className="text-lg text-zinc-500 ml-2">
              ({product.discount}% off)
            </span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-lg text-white">
              {product.ratings}{' '}
              <span className="text-zinc-500">({product.reviews} reviews)</span>
            </span>
            <div className="ml-2 flex items-center">
              {[1, 2, 3, 4, 5].map((rating) => (
                <svg
                  key={rating}
                  className={`w-5 h-5 ${
                    rating <= product.ratings
                      ? 'text-yellow-300'
                      : 'text-zinc-500'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.696h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.696l1.519-4.674z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-lg text-white">Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="ml-2 bg-zinc-800 p-2 rounded-lg text-white"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <label className="text-lg text-white">Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="ml-2 bg-zinc-800 p-2 rounded-lg text-white"
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <button
            className="mt-4 bg-orange-500 hover:bg-orange-600 transition-all duration-200 py-3 px-6 rounded-lg text-white font-bold"
          >
            Add to Cart
          </button>
          <button
            className={`mt-2 p-2 rounded-lg ${
              wishlist ? 'bg-orange-500' : 'bg-zinc-800 hover:bg-zinc-700'
            } transition-all duration-200`}
            onClick={() => setWishlist(!wishlist)}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}