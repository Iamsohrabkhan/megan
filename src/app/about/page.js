import Image from "next/image";
export default function about() {
  return (
    <>
      {/* ====== About Section Start */}
      <section className="overflow-hidden pt-4 pb-2 lg:pt-5 lg:pb-5">
        <div className="container mx-auto">
          <div className="-mx- flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 ">
                    <div className="img">
                      <div className="relative w-52 h-64 lg:w-64 lg:h-64">
                        <Image
                          src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="about"
                          className="w-full rounded-2xl object-cover object-center hover:opacity-50"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-3 sm:py-4">
                    <div className="relative w-52 h-64 lg:w-64 lg:h-64">
                      <Image
                        src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about"
                        className="w-full rounded-2xl object-cover object-center hover:opacity-50"
                        fill
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <div className="relative w-52 h-64 lg:w-64 lg:h-64">
                      <Image
                        src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about"
                        className="w-full rounded-2xl object-cover object-center hover:opacity-50"
                        fill
                      />
                    </div>
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <Circle/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-1 lg:mt-0">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  <span className="bg-[#7C96A6] text-muted px-2 py-1 rounded-lg">
                    Meet Megan
                  </span>
                </span>
                <h2 className="mb-8 text-3xl font-bold sm:text-4xl ">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base">
                  Megan has never been afraid of a challenge. If there was an
                  expectation, she exceeds it. If there was an obstacle, she
                  overcame it. If there was a need, she met it with a smile on
                  her face. Serving as a Marriage & Family Pastor for years,
                  Megan has seen God work miracles in many marriages, starting
                  with her own. Though she and the love of her life, Chad,
                  started off shaky they landed on solid ground and have been
                  running full steam ever since. With a daughter, Chandler(21)
                  and son Riley (18), their family has shared with thousands
                  their story of redemption, grace, and celebrating Gods
                  goodness in the little things.
                  <br />
                  <br />
                  Recently she stepped out in faith into a new season to pursue
                  the dream God put inside her to speak and write. Megans heart
                  is that the spoken words or written words found in Everyday
                  Pearls capture the snapshot of His love through even the
                  smallest details of our lives. Strong and bold is Megans
                  message of hope for those who feel lost in the shuffle and
                  insignificant in the eyes of God.
                  <br />
                  <br />
                  She prays that you walk away feeling loved, inspired and
                  empowered, believing that God can turn even the smallest grain
                  of sand into a beautiful pearl.
                  <br />
                  <br />
                  She enjoys living in the moment and making memories everywhere
                  she goes. When she is not speaking or writing, she enjoys
                  every moment with her family going on weekend getaways,
                  working at their farm, or having a family meal. She loves
                  escaping to the beach and real conversations with friends over
                  lunch. If you want to see Megan smile, bring her a Chick-Fil-A
                  Dr. Pepper!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== About Section End */}
    </>
  );
}


 const Circle = () => {
  return (
    <svg
    width={134}
    height={106}
    viewBox="0 0 134 106"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="1.66667"
      cy={104}
      r="1.66667"
      transform="rotate(-90 1.66667 104)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy={104}
      r="1.66667"
      transform="rotate(-90 16.3333 104)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy={104}
      r="1.66667"
      transform="rotate(-90 31 104)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy={104}
      r="1.66667"
      transform="rotate(-90 45.6667 104)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3334"
      cy={104}
      r="1.66667"
      transform="rotate(-90 60.3334 104)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy={104}
      r="1.66667"
      transform="rotate(-90 88.6667 104)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy={104}
      r="1.66667"
      transform="rotate(-90 117.667 104)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy={104}
      r="1.66667"
      transform="rotate(-90 74.6667 104)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy={104}
      r="1.66667"
      transform="rotate(-90 103 104)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy={104}
      r="1.66667"
      transform="rotate(-90 132 104)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="89.3333"
      r="1.66667"
      transform="rotate(-90 1.66667 89.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="89.3333"
      r="1.66667"
      transform="rotate(-90 16.3333 89.3333)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="89.3333"
      r="1.66667"
      transform="rotate(-90 31 89.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="89.3333"
      r="1.66667"
      transform="rotate(-90 45.6667 89.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 60.3333 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 88.6667 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 117.667 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 74.6667 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 103 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="89.3338"
      r="1.66667"
      transform="rotate(-90 132 89.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="74.6673"
      r="1.66667"
      transform="rotate(-90 1.66667 74.6673)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="31.0003"
      r="1.66667"
      transform="rotate(-90 1.66667 31.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 16.3333 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="31.0003"
      r="1.66667"
      transform="rotate(-90 16.3333 31.0003)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 31 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="31.0003"
      r="1.66667"
      transform="rotate(-90 31 31.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 45.6667 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="31.0003"
      r="1.66667"
      transform="rotate(-90 45.6667 31.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 60.3333 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 60.3333 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 88.6667 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 88.6667 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 117.667 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 117.667 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 74.6667 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 74.6667 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 103 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 103 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="74.6668"
      r="1.66667"
      transform="rotate(-90 132 74.6668)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="30.9998"
      r="1.66667"
      transform="rotate(-90 132 30.9998)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 1.66667 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 1.66667 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 16.3333 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 16.3333 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 31 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 31 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 45.6667 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 45.6667 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 60.3333 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 60.3333 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 88.6667 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 88.6667 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 117.667 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 117.667 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 74.6667 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 74.6667 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 103 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 103 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="60.0003"
      r="1.66667"
      transform="rotate(-90 132 60.0003)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="16.3333"
      r="1.66667"
      transform="rotate(-90 132 16.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="45.3333"
      r="1.66667"
      transform="rotate(-90 1.66667 45.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="1.66667"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 1.66667 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="45.3333"
      r="1.66667"
      transform="rotate(-90 16.3333 45.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="16.3333"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 16.3333 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="45.3333"
      r="1.66667"
      transform="rotate(-90 31 45.3333)"
      fill="#7C96A6"
    />
    <circle
      cx={31}
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 31 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="45.3333"
      r="1.66667"
      transform="rotate(-90 45.6667 45.3333)"
      fill="#7C96A6"
    />
    <circle
      cx="45.6667"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 45.6667 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 60.3333 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="60.3333"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 60.3333 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 88.6667 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="88.6667"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 88.6667 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 117.667 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="117.667"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 117.667 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 74.6667 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx="74.6667"
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 74.6667 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 103 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx={103}
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 103 1.66683)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="45.3338"
      r="1.66667"
      transform="rotate(-90 132 45.3338)"
      fill="#7C96A6"
    />
    <circle
      cx={132}
      cy="1.66683"
      r="1.66667"
      transform="rotate(-90 132 1.66683)"
      fill="#7C96A6"
    />
  </svg>
  )
}
