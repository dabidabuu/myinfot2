import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FC } from "react";

const home: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 bg-slate-700">
            <Head>
                <title>KupalsBlog</title>
                <meta name="description" content="Simple blog" />
            </Head>
            <header className=" mx-auto px-4 sm:px-6 lg:px-8 mb-8 bg-gray-900">
            <nav className="flex justify-between items-center py-6 shadow-lg border-gray-300">
            <h1 className="text-3xl font-extrabold text-gray-50">KupalsBlog</h1>
            <div className="space-x-6">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link href={`/${item.toLowerCase()}`} key={item} legacyBehavior>
                <a className="text-gray-50 hover:text-indigo-500 transition duration-300 ease-in-out">{item}</a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
            <main className="max-w-6xl mx-auto px-4 py-12 ">
                <section className="flex flex-col-reverse sm:flex-row items-center">
                    <div className="sm:w-1/2 text-center sm:text-left">
                        <h2 className="text-4xl font-extrabold text-emerald-100 mb-4">Hello!,Welcome to the KupalsBlog</h2>
                        <p className="text-lg text-gray-200 mb-6">We are a dynamic group of passionate programmers dedicated to crafting innovative, scalable, and user-friendly software solutions. With expertise in web development, we collaborate to turn complex challenges into seamless digital experiences. Our diverse backgrounds and shared enthusiasm for technology drive us to constantly learn, grow, and deliver exceptional results.</p>
                    </div>
                      <div className="sm:w-1/2 flex justify-center">
                      <Image src="/meow.jpg" alt="meows"  width={300} height={300} className="rounded-mb" />
                    </div>
                </section>

                <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image src="/arje.jpg" alt="meows"  width={400} height={300} className="rounded-lg" />
                    <h3 className="text-xl font-bold mt-4">Frontend Designer</h3>
                    <p className="text-gray-600">A creative frontend designer focused on building visually appealing and user-friendly web interfaces. I love turning ideas into engaging digital experiences using HTML, CSS, and JavaScript.</p>
                    <Link href="/portfolio"legacyBehavior>
                          <a className="text-blue-500 font-medium text-lg hover:text-blue-600 transition underline">see more..</a>
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image src="/daniel.png" alt="meows"  width={400} height={100} className="rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">Frontend developer</h3>
                    <p className="text-gray-600">Building the user-facing parts of websites and applications.Create interactive and visually appealing interfaces, ensuring a seamless user experience across devices and browsers. My focus is on translating design and functionality into code, delivering responsive and dynamic web experiences.</p>
                    <Link href="/portfolio"legacyBehavior>
                          <a className="text-blue-500 font-medium text-lg hover:text-blue-600 transition underline">see more...</a>
                     </Link>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image src="/dave2.jpg" alt="meows"  width={300} height={100} className="rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">Full Stack developer</h3>
                    <p className="text-gray-600"> {/* eslint-disable-next-line react/no-unescaped-entities */}A Full Stack Developer is proficient in both front-end and back-end development My design and build complete web applications handling everything from user interfaces to server-side logic, databases, and APIs. Skilled in various programming languages and frameworks, I'am ensure seamless integration across all layers of a web system.</p>
                    <Link href="/portfolio"legacyBehavior>
                          <a className="text-blue-500 font-medium text-lg hover:text-blue-600 transition underline">see more...</a>
                     </Link>
                  </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 KupalsBlog. All rights reserved.</p>
      </footer>
        </div>
        



    );
}
export default home;

