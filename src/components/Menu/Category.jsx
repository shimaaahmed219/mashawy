import { useEffect, useRef, useState } from "react";
import { categories, items } from "./Cat";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(
    categories.slice(0, 4)
  );
  const navigate = useNavigate();
  const categoryRef = useRef(null);


  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

 
  
  useEffect(() => {
    const handleScroll = () => {
      if (categoryRef.current) {
        setIsSticky(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMoreClick = () => {
    
    const nextIndex =
      categories.indexOf(visibleCategories[visibleCategories.length - 1]) + 1;
    if (nextIndex < categories.length) {
      setVisibleCategories((prev) => [...prev.slice(1), categories[nextIndex]]);
    } else {
     
      setVisibleCategories(categories.slice(0, 4));
    }
  };
  return (
    <div>
      <div
        ref={categoryRef}
        className={`bg-categores mb-5 w-full top-[100px] ${
          isSticky ? "fixed shadow-lg mt-[-20px]" : ""
        }`}
        style={{ transition: "background-color 0.3s ease", zIndex: 100 }}
      >
        <ul className="md:flex hidden  justify-between lg:text-[18px]  font-bold items-center min-h-[100px] px-5 text-main">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="cursor-pointer hover:text-gray-600"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={categoryRef}
        className={`bg-categores mb-5 w-full top-[80px] ${
          isSticky ? "fixed shadow-lg mt-[-20px]" : ""
        } md:hidden block`}
        style={{ transition: "background-color 0.3s ease", zIndex: 100 }}
      >
        <ul className="flex  justify-between lg:text-[18px]  font-bold items-center min-h-[80px] phon:px-5 px-1 text-main">
          {visibleCategories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="cursor-pointer phon:text-[16px] font-bold text-[12px] hover:text-gray-600"
            >
              {category.name}
            </li>
          ))}
          {categories.length > visibleCategories.length && (
            <li
              onClick={handleMoreClick}
              className="cursor-pointer flex items-center text-[13px] phon:text-[16px] hover:text-gray-600"
            >
              More
              <MdNavigateNext/>
            </li>
          )}
        </ul>
      </div>
      {selectedCategory && (
        <div>
          <ul className="grid md:grid-cols-2 gap-x-10 phon:px-10 px-2 py-5 phon:bg-categores gap-y-5 ">
            {items
              .filter((item) => item.categoryId === selectedCategory)
              .map((item) => (
                <li
                  className="bg-white border-[1px]  border-main justify-between lg:h-[180px] flex mb-4 rounded shadow cursor-pointer"
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                >
                
                  <div>
                    <h1 className="phon:p-3  phon:font-normal font-semibold p-1 py-2 phon:text-[20px] text-[14px] text-main font-bord">
                      {item.name}
                    </h1>
                    <p className="phon:p-3 px-2 font-Anek phon:block hidden">{item.description?.substring(0,60)}</p>
                    <p className="phon:p-3 px-1 font-Anek block phon:hidden">{item.description?.substring(0,30)}..</p>
                  
                    <span className="phon:p-3 py-2 px-1 font-semibold">
                      {item.price}
                      <span className="uppercase font-bold mx-1">egp</span>
                    </span>
                  </div>
                  <img
                  className="lg:h-[178px] phon:block hidden"
                    src={item.imageUrl}
                    alt={item.name}
                    style={{
                      width: "180px",
                    
                      borderRadius: "5px",
                    }}
                  />
                    <img
                  className="lg:h-[178px] w-[120px] block phon:hidden"
                    src={item.imageUrl}
                    alt={item.name}
                    style={{
                      
                    
                      borderRadius: "5px",
                    }}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
