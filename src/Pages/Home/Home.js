/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import SecondSection from '../../Components/SecondSection/SecondSection';
import './home.css'
import AboutImg from '../../Assets/about-img.png'
import LeaderBoardHomeTable from '../../Components/LeaderBaordHomeTable/LeaderBoardHomeTable';
import { UserStore } from '../../Storage/UserStorage';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { userTheme, leaderboard } = UserStore()
  const navigate = useNavigate()
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 m-0 p-0">
              <div className="info py-2">
                <ul className="m-0 p-0">
                  <li className="phone d-inline-block">
                    <a
                      href="tel:+91 9990994592"
                      className="text-white border-end pe-2"
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_19_233)">
                          <path
                            d="M15.8286 10.7857C15.2329 9.78484 13.1647 8.69963 13.0736 8.65217C12.8078 8.51771 12.5305 8.44652 12.271 8.44652C11.8851 8.44652 11.5692 8.60366 11.3778 8.88946C11.0753 9.21113 10.7001 9.5871 10.609 9.64537C9.90426 10.0704 9.35256 10.0221 8.74213 9.47953L5.33521 6.45089C4.72863 5.91171 4.67287 5.41525 5.14775 4.79222C5.21419 4.71075 5.63716 4.37696 5.99903 4.10777C6.2298 3.9857 6.38819 3.8043 6.4576 3.58177C6.54984 3.28568 6.48192 2.93739 6.2642 2.59807C6.21289 2.52002 4.99143 0.681274 3.86607 0.152113C3.65607 0.0532418 3.41937 0.0010376 3.18208 0.0010376C2.79114 0.0010376 2.42334 0.136558 2.14689 0.382023L1.39409 1.05092C0.203473 2.10898 -0.227508 3.30836 0.112412 4.61557C0.395976 5.70501 1.22235 6.86431 2.56898 8.06105L6.9307 11.9381C8.63505 13.4531 10.2599 14.2214 11.7602 14.2214C11.7602 14.2214 11.7602 14.2214 11.7605 14.2214C12.8639 14.2214 13.8925 13.8046 14.8171 12.9827L15.5696 12.3138C16.027 11.9076 16.1308 11.2932 15.8286 10.7857Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_19_233">
                            <rect width={16} height="14.2222" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="ms-2"> +91 9990554592</span>{" "}
                    </a>
                  </li>
                  <li className="mail d-inline-block">
                    <a href="mailto:demo@virtual-garden.com" className="text-white ps-2">
                      <svg
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.43008 7.63242C8.30204 7.71585 8.15101 7.75753 8.00002 7.75753C7.84895 7.75753 7.69796 7.71585 7.56992 7.63242L1.45454 3.64611L4.84847e-05 2.69801L0 11.8518C4.84847e-05 12.2089 0.325623 12.4983 0.727271 12.4983L15.2727 12.4983C15.6744 12.4983 16 12.2088 16 11.8518V2.69797L14.5454 3.64611L8.43008 7.63242Z"
                          fill="white"
                        />
                        <path
                          d="M7.99998 6.30945L15.0344 1.72392L0.965332 1.72388L7.99998 6.30945Z"
                          fill="white"
                        />
                      </svg>
                      demo@virtual-garden.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="py-2 ">
                <ul className="m-0 p-0 d-none d-md-block">
                  <li className="d-inline-block">
                    <a href="#"  target="_blank">
                      <svg
                        width={23}
                        height={23}
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_34)">
                          <path
                            d="M20.9999 10.5643C20.9999 4.72888 16.2985 -0.00137329 10.4999 -0.00137329C4.69863 -6.07909e-05 -0.00274658 4.72888 -0.00274658 10.5656C-0.00274658 15.8379 3.83763 20.2085 8.85663 21.0013V13.6184H6.19225V10.5656H8.85925V8.23588C8.85925 5.58856 10.4277 4.12644 12.8256 4.12644C13.9754 4.12644 15.1763 4.3325 15.1763 4.3325V6.93125H13.852C12.5487 6.93125 12.1418 7.74631 12.1418 8.58238V10.5643H15.0529L14.5883 13.6171H12.1405V20.9999C17.1595 20.2072 20.9999 15.8366 20.9999 10.5643Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_34">
                            <rect width={21} height={21} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className="d-inline-block mx-2">
                    <a href="#" target= "blank">
                      <svg
                        width={21}
                        height={24}
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_36)">
                          <path
                            d="M10.5 0.13443C7.65056 0.13443 7.29225 0.148993 6.17269 0.204335C5.05312 0.262589 4.29056 0.457739 3.6225 0.746096C2.92175 1.03856 2.28702 1.49732 1.76269 2.0903C1.2286 2.6724 0.815203 3.37661 0.55125 4.15395C0.291375 4.89377 0.114188 5.74137 0.063 6.97926C0.013125 8.22444 0 8.62057 0 11.7867C0 14.9499 0.013125 15.346 0.063 16.5882C0.1155 17.8291 0.291375 18.6752 0.55125 19.4165C0.820312 20.1825 1.17863 20.832 1.76269 21.4801C2.34544 22.1282 2.93081 22.5272 3.62119 22.8243C4.29056 23.1127 5.05181 23.3093 6.17006 23.3661C7.29094 23.4214 7.64794 23.436 10.5 23.436C13.3521 23.436 13.7078 23.4214 14.8286 23.3661C15.9456 23.3078 16.7108 23.1127 17.3788 22.8243C18.0791 22.5317 18.7134 22.073 19.2373 21.4801C19.8214 20.832 20.1797 20.1825 20.4487 19.4165C20.7073 18.6752 20.8845 17.8291 20.937 16.5882C20.9869 15.346 21 14.9499 21 11.7852C21 8.62057 20.9869 8.22444 20.937 6.98072C20.8845 5.74137 20.7073 4.89377 20.4487 4.15395C20.1848 3.37659 19.7714 2.67237 19.2373 2.0903C18.7131 1.4971 18.0784 1.03831 17.3775 0.746096C16.7081 0.457739 15.9443 0.261132 14.8273 0.204335C13.7064 0.148993 13.3507 0.13443 10.4974 0.13443H10.5013H10.5ZM9.55894 2.23448H10.5013C13.3048 2.23448 13.6369 2.24468 14.7433 2.30147C15.7671 2.35245 16.3236 2.54323 16.6937 2.70197C17.1833 2.91314 17.5337 3.16655 17.9012 3.57432C18.2687 3.9821 18.4958 4.36949 18.6861 4.91416C18.8304 5.3234 19.0011 5.94089 19.047 7.07684C19.0982 8.30454 19.1087 8.67299 19.1087 11.7823C19.1087 14.8916 19.0982 15.2615 19.047 16.4892C19.0011 17.6252 18.8291 18.2412 18.6861 18.6519C18.5177 19.1578 18.249 19.6152 17.8999 19.9903C17.5324 20.398 17.1833 20.65 16.6924 20.8612C16.3249 21.0214 15.7684 21.2107 14.7433 21.2631C13.6369 21.3185 13.3048 21.3316 10.5013 21.3316C7.69781 21.3316 7.36444 21.3185 6.258 21.2631C5.23425 21.2107 4.67906 21.0214 4.30894 20.8612C3.85284 20.6746 3.44023 20.377 3.10144 19.9903C2.75199 19.6146 2.48289 19.1567 2.31394 18.6504C2.17088 18.2412 1.99894 17.6237 1.953 16.4878C1.90313 15.2601 1.89263 14.8916 1.89263 11.7794C1.89263 8.66862 1.90313 8.30163 1.953 7.07393C2.00025 5.93797 2.17088 5.32048 2.31525 4.90979C2.50556 4.36658 2.73394 3.97773 3.10144 3.56995C3.46894 3.16218 3.81806 2.91023 4.30894 2.69906C4.67906 2.53886 5.23425 2.34953 6.258 2.29711C7.22662 2.24759 7.602 2.23303 9.55894 2.23157V2.23448ZM16.1057 4.16851C15.9402 4.16851 15.7764 4.20468 15.6235 4.27494C15.4706 4.3452 15.3317 4.44818 15.2147 4.578C15.0977 4.70783 15.0049 4.86195 14.9416 5.03158C14.8783 5.2012 14.8457 5.38301 14.8457 5.56661C14.8457 5.75021 14.8783 5.93201 14.9416 6.10163C15.0049 6.27126 15.0977 6.42538 15.2147 6.55521C15.3317 6.68503 15.4706 6.78801 15.6235 6.85828C15.7764 6.92854 15.9402 6.9647 16.1057 6.9647C16.4399 6.9647 16.7603 6.8174 16.9966 6.55521C17.2329 6.29301 17.3657 5.9374 17.3657 5.56661C17.3657 5.19581 17.2329 4.8402 16.9966 4.578C16.7603 4.31581 16.4399 4.16851 16.1057 4.16851ZM10.5013 5.80253C9.78609 5.79015 9.0758 5.93577 8.41178 6.23091C7.74777 6.52604 7.1433 6.9648 6.63357 7.52164C6.12384 8.07848 5.71904 8.74227 5.44273 9.47436C5.16642 10.2065 5.02412 10.9922 5.02412 11.7859C5.02412 12.5796 5.16642 13.3654 5.44273 14.0975C5.71904 14.8296 6.12384 15.4934 6.63357 16.0502C7.1433 16.6071 7.74777 17.0458 8.41178 17.341C9.0758 17.6361 9.78609 17.7817 10.5013 17.7693C11.9169 17.7448 13.267 17.1037 14.2603 15.9842C15.2535 14.8648 15.8102 13.3569 15.8102 11.7859C15.8102 10.215 15.2535 8.70709 14.2603 7.58765C13.267 6.46821 11.9169 5.82704 10.5013 5.80253ZM10.5013 7.90113C11.4297 7.90113 12.32 8.31034 12.9765 9.03875C13.633 9.76716 14.0017 10.7551 14.0017 11.7852C14.0017 12.8153 13.633 13.8033 12.9765 14.5317C12.32 15.2601 11.4297 15.6693 10.5013 15.6693C9.57294 15.6693 8.68259 15.2601 8.02613 14.5317C7.36967 13.8033 7.00087 12.8153 7.00087 11.7852C7.00087 10.7551 7.36967 9.76716 8.02613 9.03875C8.68259 8.31034 9.57294 7.90113 10.5013 7.90113Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_36">
                            <rect
                              width={21}
                              height="23.3016"
                              fill="white"
                              transform="translate(0 0.13443)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li className="d-inline-block me-2">
                    <a href="#" target="_blank">
                      <svg
                        width={21}
                        height={23}
                        viewBox="0 0 21 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.59662 22.436C14.5215 22.436 18.8567 13.8588 18.8567 6.43375C18.8567 6.19373 18.8567 5.95029 18.8488 5.71027C19.6928 4.91219 20.4213 3.92412 21 2.79235C20.2116 3.24641 19.3761 3.54567 18.5207 3.68041C19.4218 2.97689 20.0966 1.86995 20.4199 0.565341C19.5733 1.22046 18.6467 1.68034 17.6807 1.92486C17.0312 1.02141 16.1718 0.422904 15.2356 0.222044C14.2994 0.0211844 13.3386 0.229183 12.502 0.813822C11.6654 1.39846 10.9998 2.32711 10.6082 3.45593C10.2166 4.58475 10.1209 5.85073 10.3359 7.05779C8.62279 6.94559 6.94682 6.36426 5.41674 5.35152C3.88667 4.33878 2.53665 2.91724 1.45425 1.1791C0.904759 2.41875 0.737065 3.88512 0.985223 5.28041C1.23338 6.6757 1.87878 7.89533 2.79037 8.69162C2.10727 8.6613 1.43918 8.4217 0.84 7.99214V8.06929C0.841178 9.36792 1.18559 10.6262 1.81502 11.6314C2.44445 12.6366 3.32029 13.3272 4.2945 13.5862C3.92472 13.7193 3.54274 13.7856 3.15919 13.7834C2.88879 13.7845 2.61894 13.7517 2.35331 13.6857C2.62866 14.8036 3.1648 15.781 3.88664 16.481C4.60848 17.181 5.47986 17.5685 6.37875 17.5894C4.85173 19.156 2.96546 20.0057 1.02375 20.0015C0.681608 20.0034 0.339705 19.9777 0 19.9244C1.97074 21.5655 4.25945 22.4369 6.59662 22.436Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="#" target="_blank">
                      <svg
                        width={21}
                        height={21}
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_40)">
                          <path
                            d="M0 1.62505C0 0.823425 0.690375 0.173767 1.54219 0.173767H19.4578C20.3096 0.173767 21 0.823425 21 1.62505V18.9847C21 19.7863 20.3096 20.436 19.4578 20.436H1.54219C0.690375 20.436 0 19.7863 0 18.9847V1.62505ZM6.48769 17.1358V7.98612H3.33637V17.1358H6.48769ZM4.91269 6.7362C6.01125 6.7362 6.69506 6.03462 6.69506 5.15574C6.67537 4.25787 6.01256 3.57529 4.93369 3.57529C3.85481 3.57529 3.15 4.25914 3.15 5.15574C3.15 6.03462 3.83381 6.7362 4.89169 6.7362H4.91269ZM11.3544 17.1358V12.0259C11.3544 11.7524 11.3754 11.4788 11.4594 11.2838C11.6865 10.738 12.2049 10.1719 13.0764 10.1719C14.217 10.1719 14.6724 11.0103 14.6724 12.2412V17.1358H17.8237V11.8879C17.8237 9.07648 16.2698 7.76957 14.196 7.76957C12.5239 7.76957 11.7744 8.65604 11.3544 9.28037V9.31203H11.3334C11.3404 9.30146 11.3474 9.29091 11.3544 9.28037V7.98612H8.20444C8.24381 8.84473 8.20444 17.1358 8.20444 17.1358H11.3544Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_40">
                            <rect
                              width={21}
                              height="20.2622"
                              fill="white"
                              transform="translate(0 0.173767)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      <Hero userTheme={userTheme} />

      <section className={`${!userTheme && 'theme-bg-dark'} about-sec py-5`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} alt="" className="mb-4 mb-md-0" />
            </div>
            <div className="col-md-6 ps-2 ps-md-5">
              <div className="right-box">
                <h2 className="about-heading fw700">
                  Setting goals and create a{" "}
                  <span className="text-color">garden</span>{" "}
                </h2>
                <p className="font20 fw400 about-paragrap py-0 py-md-3">
                  Lorem ipsum dolor sit amet consecteturadipisicing elit. Illum enim
                  minus a in explicabo beatae, consectetur iusto aut?
                </p>
                <div className="d-inline-block">
                  <button className="font20 fw400 text-white discover-more border-0 me-2 px-4 p-2 text-white" onClick={()=>navigate("/user")}>
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecondSection userTheme={userTheme}  />
      
      <LeaderBoardHomeTable  userTheme={userTheme} leaderboard={leaderboard} />
      <div className='bg-dark  text-cream-color'>
        <Footer />
      </div>
    </>

  )
}

export default Home