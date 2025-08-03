const Experience = async () => {

    return (
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden ">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-800">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Experience
                    </h2>
                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-white">BA4, Barclays</span>
                            <span class="mt-1 text-gray-500 text-sm">17 feb 2025 - Now</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-white title-font mb-2">Full Stack Developer</h2>
                            <p class="leading-relaxed">
                                • Developed and deployed customer-facing onboarding features for Delegated Authority and Bereavement journeys, reducing manual intervention and accelerating resolution times.
                            </p>
                            <p class="leading-relaxed">
                                • Built scalable APIs using Spring Boot and integrated them with responsive ReactJS frontends.
                            </p>
                            <p class="leading-relaxed">
                                • Ensured smooth CI/CD delivery using Jenkins and maintained codebase quality through Git workflows.
                            </p>
                            <p class="leading-relaxed">
                                • <strong>Impact:</strong> Enhanced onboarding efficiency, reduced processing time for complex customer journeys, and ensured compliance with internal and regulatory requirements.
                            </p>
                            {/* <a class="text-purple-400 inline-flex items-center mt-4">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-white">BA3, Barclays</span>
                            <span class="mt-1 text-gray-500 text-sm">10 July 2023 - 14th feb 2025</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-white title-font mb-2">Data Engineer</h2>
                            <p class="leading-relaxed">
                                • Contributed to the successful launch of Arrow Card, supporting seamless integration of Amazon credit cards with Barclays accounts through robust ETL pipelines.
                            </p>
                            <p class="leading-relaxed">
                                • Designed and maintained data workflows using PySpark, Hadoop, and Ab Initio, ensuring reliable data delivery and high system availability.
                            </p>
                            <p class="leading-relaxed">
                                • Developed and maintained feeds for Debt Management and Customer Systems, enabling real-time updates across critical financial platforms.
                            </p>
                            <p class="leading-relaxed">
                                • <strong>Impact:</strong> Improved data consistency and enabled accurate transaction processing for over 2,000+ Amazon credit card customers.
                            </p>
                            {/* <a class="text-purple-400 inline-flex items-center mt-4">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span class="font-semibold title-font text-white">Intern BA3, Barclays</span>
                            <span class="mt-1 text-gray-500 text-sm">10 June 2022 - 7 Aug 2022</span>
                        </div>
                        <div class="md:flex-grow">
                            <h2 class="text-2xl font-medium text-white title-font mb-2">Backend Developer</h2>
                            <p class="leading-relaxed">
                                • Designed and developed a RAML-to-Dynamic UI Generator Tool that automatically rendered user interfaces from API specifications, enabling rapid testing of endpoints.
                            </p>
                            <p class="leading-relaxed">
                                • Empowered the QA/testing team to perform API validations without manual setup, significantly reducing testing time and effort across multiple environments.
                            </p>
                            <p class="leading-relaxed">
                                • Deployed the solution on OpenShift, using Next.js for the frontend and Spring Boot for backend logic and integration.
                            </p>
                            <p class="leading-relaxed">
                                • <strong>Impact:</strong> Accelerated the API testing lifecycle, improved QA efficiency, and reduced dependency on manual testers and documentation.
                            </p>
                            {/* <a class="text-purple-400 inline-flex items-center mt-4">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;