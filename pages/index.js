import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Ronald Beck Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Ronald Beck</h1>
            <ul clssName="flex items-center">
              {/* <li></li> -> Icon if needed*/}
              <li className="bg-gradient-to-r from-cyan-500 to-teel-500 text-white px-4 py-2 rounded-md ml-8"><a href="">CV</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Ronald Beck</h2>
            <h3 className="text-2xl py-2">Aspiring Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">A passionate and highly motivated aspiring software Developer
              looking for a software development apprenticeship.
            </p>
          </div>
          {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600"> */}
            {/* Icons for social media links */}
          {/* </div> */}
          {/* <div className="relative mx-auto bg-gradient-to-b from-teel-500 rounded-full w-80 h-80 mt-20 overflow-hidden">  */}
          {/* image from linkedin pfp Image src={deved} layout="fill" objectFit="cover"*/}
          {/* </div> */}
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Experience:</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              My most recent experience was an 8-week traineeship in software development
              where I did...
            </p>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}
