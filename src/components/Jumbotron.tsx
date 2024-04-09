import { Button } from "@/components/ui/button"

export const Jumbotron = () => {
    return (
        <>
            {/* Shadow effect */}
            <div className="shadow"></div>

            <section>
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none dark:text-white md:text-5xl lg:text-6xl">We
                        invest in the world’s potential</h1>
                    <p className="mb-8 text-lg font-normal dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Tailwind
                        we focus on markets where technology, innovation, and capital can unlock long-term value and
                        drive economic growth.</p>
                        <Button className={'mr-4'}>Get Started</Button>
                        <Button variant="outline">Learn More</Button>
                </div>
            </section>

            <hr className="w-11/12 mx-auto" />
        </>
    );
};