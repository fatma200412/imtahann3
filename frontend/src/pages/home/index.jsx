import React from "react";
import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBacon,
  faIceCream,
  faBellConcierge,
  faMugHot,
  faCakeCandles,
  faCloudMeatball,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../redux/slices/dataSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(data);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ marginBottom: "100px" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={style.slide1}>
            <div className={style.slidertext}>
              <h1>
                Food and more <span>.</span>
              </h1>
              <p> By Chef Francis Smith</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide2}>
            <div className={style.slidertext}>
              <h1>
                Special Dish
                <span>.</span>
              </h1>
              <p> By Chef Francis Smith</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide3}>
            <div className={style.slidertext}>
              <h1>
                Hygienic Food
                <span>.</span>
              </h1>
              <p> By Chef Francis Smith</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <section className={style.welcome}>
        <div className={style.element}>
          <FontAwesomeIcon icon={faBacon} className={style.icon} />
          <div className={style.linetext}>
            <div className={style.line1}></div>
            <p>Welcome</p>
            <div className={style.line2}></div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.year}>2002</p>
                <p className={style.about}>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.year}>2002</p>
                <p className={style.about}>
                  Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id
                  lobortis leo volutpat. Maecenas sollicitudin est in libero
                  pretium.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.year}>2002</p>
                <p className={style.about}>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={style.testimonials}>
        <div className={style.icontextline}>
          <FontAwesomeIcon icon={faIceCream} className={style.icon} />
          <div className={style.linetext}>
            <div className={style.line1}></div>
            <p>Testimonials</p>
            <div className={style.line2}></div>
          </div>
          <div className={style.dirnaq}>"</div>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          style={{ marginBottom: "100px" }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={style.slides}>
            <div className={style.element}>
              <p className={style.paragraf}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda qui animi non exercitationem, fuga nihil sequi
                voluptate cumque autem excepturi quia aperiam voluptates omnis
                quisquam laboriosam alias tempora dolor, laudantium dolorem
                eaque facere voluptas facilis.
              </p>
              <p className={style.client}>
                <span>Ted Chapman</span>, Client
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.element}>
              <p className={style.paragraf}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda qui animi non exercitationem, fuga nihil sequi
                voluptate cumque autem excepturi quia aperiam voluptates omnis
                quisquam laboriosam alias tempora dolor, laudantium dolorem
                eaque facere voluptas facilis.
              </p>
              <p className={style.client}>
                <span>Ted Chapman</span>, Client
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.element}>
              <p className={style.paragraf}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda qui animi non exercitationem, fuga nihil sequi
                voluptate cumque autem excepturi quia aperiam voluptates omnis
                quisquam laboriosam alias tempora dolor, laudantium dolorem
                eaque facere voluptas facilis.
              </p>
              <p className={style.client}>
                <span>Ted Chapman</span>, Client
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={style.services}>
        <div className={style.element}>
          <FontAwesomeIcon icon={faBellConcierge} className={style.icon} />
          <div className={style.linetext}>
            <div className={style.line1}></div>
            <p>Our Services</p>
            <div className={style.line2}></div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3} md={6} className={style.grids}>
              <div className={style.abouts}>
                <FontAwesomeIcon icon={faMugHot} className={style.icon} />
                <p className={style.year}>Breakfast</p>
                <p className={style.about}>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={6} className={style.grids}>
              <div className={style.abouts}>
                <FontAwesomeIcon icon={faCakeCandles} className={style.icon} />
                <p className={style.year}>Brunch</p>
                <p className={style.about}>
                  Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
                  eros hendrerit, id lobortis.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={6} className={style.grids}>
              <div className={style.abouts}>
                <FontAwesomeIcon
                  icon={faCloudMeatball}
                  className={style.icon}
                />
                <p className={style.year}>Lunch</p>
                <p className={style.about}>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={6} className={style.grids}>
              <div className={style.abouts}>
                <FontAwesomeIcon icon={faBurger} className={style.icon} />
                <p className={style.year}>Dinner</p>
                <p className={style.about}>
                  Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui
                  fermentum eros hendreri.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={style.menu}>
        <div className={style.element}>
          <FontAwesomeIcon icon={faBellConcierge} className={style.icon} />
          <div className={style.linetext}>
            <div className={style.line1}></div>
            <p>Our Menu</p>
            <div className={style.line2}></div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={3} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.meals}>Breakfast</p>
              </div>
            </Grid>
            <Grid item xs={3} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.meals}>Brunch</p>
              </div>
            </Grid>
            <Grid item xs={3} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.meals}>Lunch</p>
              </div>
            </Grid>
            <Grid item xs={3} className={style.grids}>
              <div className={style.abouts}>
                <p className={style.meals}>Dinner</p>
              </div>
            </Grid>
          </Grid>{" "}
          <div className={style.data}>
            <Grid container spacing={2}>
              {data &&
                data.map((elem, i) => {
                  return (
                    <Grid item xs={6} lg={6} className={style.grids}>
                      <div className={style.abouts}>
                        <h2 className={style.meals}>{elem.name}</h2>
                        <p>
                          {elem.des}................................{" "}
                          {elem.price}
                        </p>
                      </div>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>{" "}
      </section>
    </>
  );
}

export default Home;
