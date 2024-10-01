import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/Container";
import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import Footer from "@/app/components/Footer";
import Posts from "@/app/components/Posts";
import Subscribe from "@/app/components/Subscribe";

export default function Home() {
    const count = n => Array(n).fill(0).map(((n, i) => n + i));

    return (
        <div>
            <Container>
                <Header />
                <main className="px-[6rem] mb-10">
                    <div className="py-[6rem] mb-8">
                        <Hero/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        {count(6).map((n) => <Card key={n}/>)}
                    </div>
                    <div className="pb-[3rem] pt-[3rem]">
                        <Pagination/>
                    </div>
                    <section className="flex flex-wrap justify-between mt-[3rem]">
                        <div className="w-[30%]">
                            <Subscribe />
                        </div>
                        <div className="w-[30%]">
                            <Posts title="Recent Posts"/>
                        </div>
                        <div className="w-[30%]">
                            <Posts title="Popular Posts"/>
                        </div>
                    </section>
                </main>
                <Footer/>
            </Container>
        </div>
    );
}
