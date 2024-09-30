import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/Container";
import Card from "@/app/components/Card";
import Pagination from "@/app/components/Pagination";
import Footer from "@/app/components/Footer";

export default function Home() {
    const count = n => Array(n).fill(0).map(((n, i) => n + i));

    return (
        <div>
            <Container>
                <Header />
                <main className="px-[6rem] py-10">
                    <div className="py-[6rem]">
                        <Hero/>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        {count(6).map((n) => <Card key={n}/>)}
                    </div>
                    <div className="pb-[3rem] pt-[1rem]">
                        <Pagination/>
                    </div>
                </main>
                <Footer/>
            </Container>
        </div>
    );
}
