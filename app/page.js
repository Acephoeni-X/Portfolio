import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import Hobby from "./Hobby";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Image from 'next/image'

async function getFollowers() {
  let data = await (
    await fetch(
      `${process.env.API_GITHUB}/followers`,
      {
        next: { revalidate: 10 },
      },
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.GITHUB_TOKEN} `,
        },
      }
    )
  ).json();
  return Object.keys(data).length;
}

async function getRepos() {
  let data = await (
    await fetch(
      `${process.env.API_GITHUB}/repos`,
      {
        next: { revalidate: 10 },
      },
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.GITHUB_TOKEN} `,
        },
      }
    )
  ).json();
  return Object.keys(data).length;
}

async function getFollowings() {
  let data = await (
    await fetch(
      `${process.env.API_GITHUB}/following`,
      {
        next: { revalidate: 10 },
      },
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.GITHUB_TOKEN} `,
        },
      }
    )
  ).json();
  return Object.keys(data).length;
}

export const metadata = {
  title: "RSharma",
};

const page = async () => {
  let followers = await getFollowers();
  let followings = await getFollowings();
  let repos = await getRepos();

  return (
    <div>
      {/* <Head /> */}
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block " style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/bg.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative w-[150px] h-[150px] mx-auto -mt-20">
                      <Image
                        src="https://avatars.githubusercontent.com/u/63443330?v=4"
                        alt="Rishi Sharma"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full shadow-xl"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link href="/Contact">
                        <button
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Connect With Me
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {repos || "-"}
                        </span>
                        <span className="text-sm text-gray-500">Repos</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {followers || "-"}
                        </span>
                        <span className="text-sm text-gray-500">Followers</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {followings || "-"}
                        </span>
                        <span className="text-sm text-gray-500">
                          Followings
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="font-Caveat text-4xl leading-normal mb-2 text-gray-800 mb-2">
                    Rishi Sharma
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    New Delhi, India 🇮🇳
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    BA4 Engineer - Barclays Global Service Center Private
                    Limited
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    SRM University
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        I am a proactive and versatile individual with a strong
                        foundation in Full Stack Web Development, Automation,
                        Dev-Ops, and Software Testing and Debugging. Throughout
                        my college years, I have worked on numerous projects,
                        both open-source and private, which has given me a
                        wealth of transferable skills. In my free time, I like
                        to keep fit by visiting the gym regularly and unwind by
                        listening to music and watching movies. I am confident
                        that my willingness to learn and adaptability will allow
                        me to make a good contributions towards the nation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Projects /> */}
      <Hobby />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default page;
