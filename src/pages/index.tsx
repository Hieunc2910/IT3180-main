
import React from "react";
import Footer from "@/components/layout/footer";
import { CloudMoon, Sun, MapPin, Shield, MoonStar } from "lucide-react";
import { motion } from 'framer-motion';
import Image from "next/image";
import {Button} from "@/components/ui/button";


const Home = () => {
  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-48 pb-48 flex content-center items-center justify-center min-h-screen-75"
        >
          
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-contain"
        
            style={{
              backgroundImage:
                "url('https://wallpapers.com/images/hd/vietnam-largest-city-efhfwqa2nzzjwxcm.jpg')",
            }}
          >
            {/* lớp trong suốt đè lên ảnh nền */}
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>          

          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
              >
                <div className="px-12">
                  <MoonStar className="text-blue-500 w-24 h-24 mb-2 lg:w-6/12 px-4 ml-auto mr-auto text-center" />
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to BlueMoon
                  </h1>
                  <p className="text-white mt-4 text-lg text-center">
                    chung cư cao cấp cho mọi nhà

                  </p>
                </div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-6/12 px-4 text-right"
              >
                { <div className="px-12">
                  <Image
                    width={626}
                    height={351}
                    alt="BlueMoon là chung cư danh giá bậc nhất"
                    src="/img/appartment1.avif"
                    className="max-w-full rounded-lg shadow-lg"
                  />

                </div> 
              </motion.div> */}
            </div>
          </div>
        </motion.div>

        <section className="pb-20 mt-24 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
            
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-10/12 px-4 text-center"
              >
                <div className="relative flex flex-col min-w-0 break-words w-full rounded-lg">
                  <div className="px-4 py-5">
                    <p className="text-lg text-left font-light leading-relaxed text-blueGray-600 mb-6 ">
                      Chung cư BlueMoon tọa lạc ngay ngã tư Văn Phú được khởi công xây dựng năm 2021
                      và hoàn thành vào 2023. Chung cư được xây dựng trên diện tích 450m2, gồm
                      30 tầng, tầng 1 làm kiot, 4 tầng đế, 24 tầng nhà ở và 1 tầng penhouse. Với thiết kế đẹp mắt, 
                      tiện nghi hiện đại và vị trí đắc địa, cho thuê chung cư BlueMoon đang thu hút 
                      sự quan tâm của nhiều người muốn tận hưởng cuộc sống thoải mái 
                      và tiện ích tại một trong những khu vực phát triển nhanh nhất của thành phố.
                    </p>
                    {/* <p className="mt-6 text-left leading-relaxed ">
                      Chung cư BlueMoon quy hoạch khá nhiều tiện ích tại chỗ phục vụ cư dân nhằm gia tăng giá trị cuộc sống:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-left ">
                      <li>Các hoa viên nội khu</li>
                      <li>Hồ bơi trong nhà và ngoài trời, cho người lớn và trẻ em</li>
                      <li>Phòng tập thể dục, phòng sinh hoạt cộng đồng, khu vực tiệc nướng ngoài trời</li>
                    </ul> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-4/12 px-4 mr-auto ml-auto"
              >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    width={1900}
                    height={1900}
                    alt="Thiết kế hiện đại và tiện nghi cao cấp"
                    src="/img/Noithat.png"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-5/12 px-4 mr-auto ml-auto"
              >
                <h3 className="text-2xl mb-2 font-semibold leading-normal">
                  Thiết kế hiện đại và tiện nghi cao cấp
                </h3>
                <p className="text-lg font-light leading-relaxed text-blueGray-600 mb-6">
                  Chung cư BlueMoon cho thuê được thiết kế theo phong cách hiện đại và tinh tế, 
                  tạo nên không gian sống đẳng cấp và thoải mái cho cư dân. Các căn hộ tại BlueMoon được thiết kế 
                  với sự chú trọng đến mọi chi tiết, từ bố trí không gian, bố cục nội thất đến lựa chọn vật liệu cao cấp.
                </p>
                <ul className="list-disc text-lg font-light ml-5 space-y-4">
                  <li>Không gian mở và thông thoáng với cửa sổ lớn và ban công</li>
                  <li>Hệ thống điều hòa và cấp thoát nước hiện đại</li>
                  <li>Nội thất cao cấp: bếp hiện đại, phòng tắm sang trọng</li>
                  <li>Hệ thống an ninh 24/7 và thang máy tiện lợi</li>
                </ul>
                <p className="text-lg font-light leading-relaxed text-blueGray-600"> 
                Đây là nơi mà cư dân có thể thư giãn, tận hưởng cuộc sống hiện đại và đạt được sự cân bằng giữa công việc và cuộc sống.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          ></div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
              >
                <Image
                  width={2560}
                  height={1440}
                  alt="Tiện ích nội khu đa dạng và đẳng cấp"
                  src="/img/TienIch.jpg"
                  className="max-w-full rounded-lg shadow-lg"
                />
              </motion.div>
              
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-4"
              >
                <div className="md:pr-12">
                    <h3 className="text-2xl font-semibold leading-normal">
                        Tiện ích nội khu đa dạng và đẳng cấp
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                        Scenic Valley tự hào sở hữu nhiều tiện ích nội khu đẳng cấp, mang lại trải nghiệm sống tiện lợi cho cư dân.
                      </p>
                    <ul className="list-disc text-lg font-light ml-5 space-y-4">
                        <li><strong>Hồ bơi</strong>: Không gian thư giãn lý tưởng giữa thiên nhiên.</li>
                        <li><strong>Phòng gym</strong>: Trang bị hiện đại giúp cư dân rèn luyện sức khỏe.</li>
                        <li><strong>Khu vui chơi trẻ em</strong>: An toàn và sáng tạo cho các em nhỏ.</li>
                        <li><strong>Khu BBQ</strong>: Nơi lý tưởng để tổ chức tiệc ngoài trời và giao lưu.</li>
                    </ul>
                    <p className="mt-4 text-lg font-light leading-relaxed text-blueGray-600">
                        Nhờ các tiện ích này, cư dân Scenic Valley có thể tận hưởng cuộc sống tiện nghi ngay tại nơi cư trú.
                    </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative block lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:mt-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-6/12 px-4"
              >
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-black">
                      Để lại lời nhắn cho chúng tôi
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-black">
                      Hãy điền vào mục dưới đây và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2 text-black"
                        htmlFor="full-name"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Họ và tên"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2 text-black"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2 text-black"
                        htmlFor="message"
                      >
                        Lời nhắn
                      </label>
                      <textarea
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Để lại lời nhắn..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <Button
                        className="uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Gửi
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
