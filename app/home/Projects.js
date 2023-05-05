// "use client";
import React from "react";
import Link from "next/link";

const getRepos = async () => {
  let data = await (
    await fetch(
      `https://portfolio-rc6y-3ukoqjzn6-rishi-sharma2002.vercel.app/api/repos`,
      { next: { revalidate: 10 } }
    )
  ).json();
  let json_ = [];
  data.map((e) => {
    json_.push({
      name: e.name,
      description: e.description,
      htmlUrl: e.html_url,
      contributors: e.contributors_url,
      created: e.created_at,
      updated: e.updated_at,
      clone_ssh: e.ssh_url,
      clone_http: e.clone_url,
      size: e.size,
      language: e.language,
    });
  });
  return json_;
};

let lang = {
  Python:
    "https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534",
  JavaScript:
    "https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
  "C++":
    "https://camo.githubusercontent.com/891c1fd9d2ab2adf1053e8514f469b94049769ccd9d2765c8e06e9c1b6da1b8c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632b2b2d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465",
  TypeScript:
    "https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
  Shell:
    "https://camo.githubusercontent.com/7df250f624de398fbf14c84b1667c3d1e8e1450d67c0be03bd0dfb4e6a28c2c2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7368656c6c5f7363726970742d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676e752d62617368266c6f676f436f6c6f723d7768697465",
  HTML: "https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145",
};
// let getLanguages = async (json) => {
//   let json_ = await getRepos();
//   json_.map(async (m, index) => {
//     let data = await (await fetch(m.languageUrl)).json();
//     json_[index].languages = Object.keys(data);
//   });
//   console.log(json_);
// };

const getDate = (x) => {
  var d = new Date(x);
  return `${d.getUTCDay()}:${d.getUTCMonth()}:${d.getUTCFullYear()}`;
};

const Projects = async () => {
  let data = await getRepos();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Magical Projects
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Most my projects are open source.....🙂
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {data.map((e, index) => (
            <div
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`${e.htmlUrl}`}>{e.name}</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Created: {getDate(e.created)}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 text-wrap">
                  {e.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      {lang[e.language] ? (
                        <img src={lang[e.language]} />
                      ) : (
                        e.language
                      )}
                      {/* // {lang} */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
