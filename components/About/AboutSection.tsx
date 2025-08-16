import React from 'react'

export default function AboutSection() {
    return (
        <section
            className="relative z-20 min-h-screen flex flex-col items-center gap-6 justify-end pb-[25vh] text-center content text-white"
        >

            <div className="flex items-center gap-16">
                <svg
                    className="animate-in"
                    width="75"
                    height="15"
                    viewBox="0 0 75 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.24707 0.00976562C11.7018 0.185002 14.5395 2.69853 15.21 5.99902H74.3594V7.99902H15.3418C15.0847 11.9078 11.8351 14.9988 7.86133 14.999L7.47461 14.9893C3.64027 14.7946 0.565586 11.7201 0.371094 7.88574L0.361328 7.5C0.361328 3.3582 3.71956 0.000148709 7.86133 0L8.24707 0.00976562ZM7.86133 2C4.82406 2.00015 2.36133 4.4627 2.36133 7.5C2.36156 10.5371 4.82421 12.9989 7.86133 12.999C10.8984 12.9988 13.3601 10.537 13.3604 7.5C13.3604 4.46275 10.8985 2.00023 7.86133 2Z"
                        fill="url(#paint0_linear_911_714)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_911_714"
                            x1="0.361328"
                            y1="7.49951"
                            x2="54.8599"
                            y2="7.99952"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className="animate-in"
                    width="75"
                    height="15"
                    viewBox="0 0 75 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M66.7529 0.00976562C63.2982 0.185002 60.4605 2.69853 59.79 5.99902H0.640625V7.99902H59.6582C59.9153 11.9078 63.1649 14.9988 67.1387 14.999L67.5254 14.9893C71.3597 14.7946 74.4344 11.7201 74.6289 7.88574L74.6387 7.5C74.6387 3.3582 71.2804 0.000148709 67.1387 0L66.7529 0.00976562ZM67.1387 2C70.1759 2.00015 72.6387 4.4627 72.6387 7.5C72.6384 10.5371 70.1758 12.9989 67.1387 12.999C64.1016 12.9988 61.6399 10.537 61.6396 7.5C61.6396 4.46275 64.1015 2.00023 67.1387 2Z"
                        fill="url(#paint0_linear_911_717)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_911_717"
                            x1="74.6387"
                            y1="7.49951"
                            x2="29.1399"
                            y2="7.99952"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <h2>
                CREATING WORLDS, <br />
                SHAPING THE FUTURE OF GAMING
            </h2>
            <p className="text-sm md:text-base lg:text-xl font-medium z-10 font-sans max-w-3xl text-pretty animate-in">
                We’re building a new creative economy for Africa. With our strategic
                partnerships, we aim to create a new class of gamers and game owners.
                We’re not waiting for permission. We’re not following trends. We’re
                creating them. This is our moment, and we invite the world to join us.
            </p>

        </section>
    )
}
