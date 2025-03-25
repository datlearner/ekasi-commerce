import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CiUser, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <p>
            Free Shipping Options its Available to <span>4803, Midrand, South Africa</span>
          </p>
          <p className="pleft">Free Shipping Over R200</p>
          <p>100 Day Returns</p>
        </div>
        <div className="nav-container">
          <div className="ptags">
            <p>shop</p>
            <p>collections</p>
            <p>gifts</p>
          </div>
          <h1 className="h1">Ekasi Fashion</h1>
          <div className="icons">
            <p>offers</p>
            <CiUser style={{ margin: 10 }} className="hover" />
            <CiSearch style={{ margin: 10 }} className="hover" />
            <HiOutlineShoppingBag style={{ margin: 5 }} className="hover" />
          </div>
        </div>

        <div className="menu">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
          >
            <SwiperSlide>
              <div className="page1">
                <div className="bottom">
                  <h1>Shop your perfect branded set</h1>
                  <p>Curated just for you - Style, Quality, and Brand in one set</p>
                  <div className="flex">
                    <div className="btns">
                      <button>
                        shop now <span className="whit">→</span>
                      </button>
                      <button className="blac">
                        discover <span className="whit">→</span>
                      </button>
                    </div>
                    <div className="btn">
                      <button>
                        <span className="white">←</span>
                      </button>
                      <button>
                        <span className="white">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="page2"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="page3"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
