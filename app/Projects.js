// "use client";
import React from "react";
import Link from "next/link";
import Image from 'next/image'

const getRepos = async () => {
  const token = process.env.GITHUB_TOKEN;

  let res =
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
    );
  let data = await res.json()
  if (!res.ok) {
    console.error("GitHub API Error:", data);
    return [];
  }

  if (!Array.isArray(data)) {
    console.error("Unexpected data from GitHub API:", data);
    return [];
  }

  return data.map((e) => ({
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
  }));
};


let lang = {
  Python:
    "/python.png",
  JavaScript:
    "/javascript.png",
  "C++":
    "/cpp.png",
  TypeScript:
    "/typescript.png",
  Shell: "/shellscript.png",
  HTML: "/html.png",
  CSS: "/css.png",
  Java: "/java.png"
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
                        <Image src={lang[e.language]} width={30} height={30} alt={e.language} />
                      ) : (
                        e.language
                      )}
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
