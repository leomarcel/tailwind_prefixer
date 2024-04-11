"use client";
import { useTheme } from 'next-themes';
import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            { theme === "dark" ?
                <Image src={"/beams-home@95.jpg"}
                       alt={"background"}
                       className={"absolute"}
                       style={{zIndex: -1}}
                       layout='fill'
                       objectFit='contain'
                /> :
                <Image src={"/dark.png"}
                       alt="background"
                       className="absolute w-[90rem] flex-none max-w-none"
                       style={{zIndex: -1}}
                       width={900}
                       height={400}
                />
            }

            <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
                <nav aria-label="Global" className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center py-[2.125rem]">
                        <a className="flex items-center" href="/">
                            <svg className="h-6" aria-hidden="true" viewBox="0 0 50 24" fill="none">
                                <path d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
                                    className="fill-sky-400"></path>
                            </svg>
                            <span className="text-2xl text-slate-200 dark:text-gray-800 font-sans">Tailwind</span>
                            <span className="p-1 rounded-lg ml-1 text-2xl text-slate-200 dark:text-gray-800 font-sans border-slate-200 dark:border-slate-800 border-2">Prefixer</span>
                        </a>
                        <div className="group -my-2 ml-6 items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden min-[1300px]:flex">
                            <svg className="h-4 w-4 fill-sky-500" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="font-semibold">Unofficial prefixer tool</span>
                            <svg width="2" height="2" aria-hidden="true" className="fill-slate-900">
                                <circle cx="1" cy="1" r="1"></circle>
                            </svg>
                            <span className="font-medium">for Tailwind </span>
                            <svg width="2" height="2" aria-hidden="true" className="fill-slate-900">
                                <circle cx="1" cy="1" r="1"></circle>
                            </svg>
                            <span className="font-medium">All language & Framework supported</span>
                        </div>
                        <div className="ml-auto hidden lg:flex lg:items-center">
                        </div>
                        <div className="flex items-center ml-8 pl-8 border-l-2 border-slate-600 dark:border-slate-200">
                            <ThemeSwitcher/>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
