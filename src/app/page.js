import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/Container";

export default function Home() {
    return (
        <Container>
            <Header />
            <div className="py-[6rem]">
                <Hero />
            </div>
        </Container>
    );
}
