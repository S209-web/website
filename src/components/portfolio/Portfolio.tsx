'use client'

import React, { useState } from 'react';
// import portfolio_data from '@/data/portfolio_data';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import portfolio_img_6 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_7.jpg"; 


interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  // portfolio pages
	{
		id: 1,
		category: 'Creatives & Content',
		img: portfolio_img_6,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 2,
		category: 'Social & Community Growth',
		img: portfolio_img_7,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 3,
		category: 'Performance & Growth',
		img: portfolio_img_8,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 4,
		category: 'AI & Future-Ready Solutions',
		img: portfolio_img_9,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 5,
		category: 'Web, App & Custom Development',
		img: portfolio_img_10,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 6,
		category: 'ONDC & Retail Media Operations',
		img: portfolio_img_11,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
]

// data
const categories = ["All", "Creatives & Content", "Social & Community Growth", "Performance & Growth", "AI & Future-Ready Solutions", "Web, App & Custom Development", "ONDC & Retail Media Operations"];

const Portfolio = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };


  return (
    <>
      <style jsx>{`
        .cs_portfolio_img {
          position: relative;
          height: 250px;
          background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          border: 1px solid rgba(243, 60, 82, 0.2);
          transition: all 0.4s ease;
        }

        .coming-soon-text {
          text-align: center;
          color: white;
        }

        .coming-soon-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: #F33C52;
          filter: drop-shadow(0 0 20px rgba(243, 60, 82, 0.3));
        }

        .coming-soon-title {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #F33C52 0%, #ff6b6b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .coming-soon-subtitle {
          font-size: 1rem;
          color: #e0e0e0;
          opacity: 0.8;
        }

        .cs_portfolio {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 15px;
          overflow: hidden;
        }

        .cs_portfolio:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
          box-shadow: 0 25px 50px rgba(243, 60, 82, 0.2), 
                      0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .cs_portfolio:hover .cs_portfolio_img {
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
          border-color: #F33C52;
          box-shadow: inset 0 0 30px rgba(243, 60, 82, 0.1);
        }

        /* Navbar fixes */
        .cs_isotop_item_menu ul {
          display: flex;
          flex-wrap: nowrap;
          justify-content: flex-start;
          gap: 0.8rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .cs_isotop_item_menu li {
          background: #1a1a1a;
          color: #e0e0e0;
          padding: 0.8rem 1.2rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(243, 60, 82, 0.2);
          font-weight: 500;
          font-size: 0.85rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cs_isotop_item_menu li:hover,
        .cs_isotop_item_menu li.active {
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(243, 60, 82, 0.3);
        }

        /* Single coming soon per page */
        .single-coming-soon {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          width: 100%;
        }

        .single-coming-soon .cs_portfolio {
          max-width: 400px;
          width: 100%;
        }

        /* Scrollbar for navbar */
        .cs_isotop_item_menu ul::-webkit-scrollbar {
          height: 4px;
        }

        .cs_isotop_item_menu ul::-webkit-scrollbar-track {
          background: #2a2a2a;
          border-radius: 2px;
        }

        .cs_isotop_item_menu ul::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #F33C52, #ff6b6b);
          border-radius: 2px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cs_isotop_item_menu li {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
          
          .cs_portfolio:hover {
            transform: translateY(-10px);
          }
        }
      `}</style>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>


      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>  {' '}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {activeCategory === "All" ? (
                // Show all categories in grid
                items.map((item, i) => (
                  <div key={i} className="col-md-4 cs_item cs_ui_design cs_development">
                    <div className="cs_portfolio cs_style_1">
                      <div className="cs_portfolio_img">
                        <div className="coming-soon-text">
                          <div className="coming-soon-icon">🚀</div>
                          <div className="coming-soon-title">Coming Soon</div>
                          <div className="coming-soon-subtitle">{item.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Show single coming soon card for specific category
                <div className="col-md-12">
                  <div className="single-coming-soon">
                    <div className="cs_portfolio cs_style_1">
                      <div className="cs_portfolio_img">
                        <div className="coming-soon-text">
                          <div className="coming-soon-icon">🚀</div>
                          <div className="coming-soon-title">Coming Soon</div>
                          <div className="coming-soon-subtitle">{activeCategory}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;