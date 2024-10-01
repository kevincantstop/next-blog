import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";
import Posts from "@/app/components/Posts";
import Subscribe from "@/app/components/Subscribe";

const Post = () => {
    return (
        <Container>
            <Header />
            <main className="px-[6rem] mb-10">

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
    )
}

export default Post;
