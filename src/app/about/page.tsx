import Link from 'next/link';
import Head from 'next/head';
import { FC } from 'react';
import Image from 'next/image';

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
                              <h2 className="text-4xl font-extrabold text-emerald-100 mb-4">Hello!,Welcome to About page </h2>
                              <p className="text-lg text-gray-200 mb-6">Welcome to our corner of the web! we're a passionate programmer with a love for coding problem-solving and creating innovative solutions With a deep interest in both front-end and back-end technologies we enjoy building seamless user-friendly experiences and scalable efficient systems Over the years  we honed my skills in a variety of programming languages, frameworks, and tools, including but not limited to JavaScript, Python, Java, React, Node.js, and SQL. Our focus is on writing clean, maintainable code that not only works but works well, ensuring optimal performance and long-term sustainability.Beyond coding, we thrive on collaboration and learning from others. Whether it working with teams or contributing to open-source projects, We believe that great software is the result of diverse ideas and teamwork.On this page, you find examples of our work, insights into our programming journey, and thoughts on the ever-evolving world of technology. Feel free to browse, connect, and reach out if you want to collaborate or chat about programming!Let build something amazing together!</p>
                          </div>
                            <div className="sm:w-1/2 flex justify-center">
                             <Image src="/image1.png" alt="meows"  width={600} height={1000} className="rounded-mb ml-9 mb-11" />
                             
                          </div>
                      </section>
          </main>
      <footer className="mt-12 py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 KupalsBlog. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default home;
