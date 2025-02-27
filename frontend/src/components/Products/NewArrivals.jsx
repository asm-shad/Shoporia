import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Casual Sneakers",
      price: 85,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "3",
      name: "Classic Watch",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Classic Watch",
        },
      ],
    },
    {
      _id: "4",
      name: "Leather Wallet",
      price: 60,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Leather Wallet",
        },
      ],
    },
    {
      _id: "5",
      name: "Denim Jeans",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "6",
      name: "Summer Hat",
      price: 40,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Summer Hat",
        },
      ],
    },
    {
      _id: "7",
      name: "Formal Shoes",
      price: 130,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Formal Shoes",
        },
      ],
    },
    {
      _id: "8",
      name: "Sunglasses",
      price: 70,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Sunglasses",
        },
      ],
    },
  ];

  //   Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();

      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runaway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border border-gray-200 ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 "
            }`}
          >
            <FiChevronLeft className="text-2xl"></FiChevronLeft>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border border-gray-200 ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            <FiChevronRight className="text-2xl"></FiChevronRight>
          </button>
        </div>
      </div>
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container mx-auto flex overflow-x-auto space-x-6 relative scrollbar-hide"
      >
        {newArrivals.map((product, idx) => (
          <div
            key={idx}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div
              className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
