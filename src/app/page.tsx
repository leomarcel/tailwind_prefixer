import {InputTransform} from "@/components/InputTransform";
import {Header} from "@/components/Header";

export default function Home() {
    return (
        <main className="relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem] min-h-screen">
            <Header />
            <div className="p-4">
                <div className={"w-full text-center items-center flex flex-col"}>
                    <h1 className="text-gray-200 text-lg font-semibold pb-3 dark:text-gray-800">Unofficial prefixer tool</h1>
                    <InputTransform />
                </div>
            </div>
        </main>
    );
}
