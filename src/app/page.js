import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/Container";
import Card from "@/app/components/Card";

export default function Home() {
    const count = n => Array(n).fill(0).map(((n, i) => n + i));

    return (
        <Container>
            <Header />
            <div className="py-[6rem]">
                <Hero />
            </div>
            <div className="pb-[6rem] flex flex-wrap items-center justify-between">
                {count(6).map((n) => <Card key={n} />)}
            </div>
        </Container>
    );
}
