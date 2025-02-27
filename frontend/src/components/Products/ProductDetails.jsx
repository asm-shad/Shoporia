import React from "react";

const ProductDetails = () => {
  const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jacket perfect for any occassion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=9",
        altText: "Denim Jeans",
      },
      {
        url: "https://picsum.photos/500/500?random=10",
        altText: "Stylish Jacket",
      },
    ],
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                className="w-20 h-20  object-cover rounded-lg cursor-pointer border border-gray-200"
              ></img>
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              ></img>
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200"
              ></img>
            ))}
          </div>
          {/* Right Section */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
