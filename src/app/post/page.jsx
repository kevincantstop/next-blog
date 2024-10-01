import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Container from "@/app/components/Container";
import Posts from "@/app/components/Posts";
import Subscribe from "@/app/components/Subscribe";
import Meta from "@/app/components/post/Meta";
import Except from "@/app/components/post/Except";
import TableOfContent from "@/app/components/post/TableOfContent";
import Recommend from "@/app/components/post/Recommend";
import Author from "@/app/components/post/Author";

const Post = () => {
    return (
        <Container>
            <Header />
            <main className="px-[6rem] mb-10 mt-[6rem]">
                <div className="px-[10rem]">
                    <Meta />
                    <Except>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui diam arcu pharetra at laoreet pellentesque.
                        Imperdiet sit ut ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.
                    </Except>
                    <article className="text-gray-900">
                        <p className="pt-3">
                            Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac
                            vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc.
                            Feugiat lorem cras ut cras enim neque, elit, facilisi habitasse. Facilisis faucibus nunc
                            congue urna diam.
                            Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at tellus diam.
                        </p>
                        <TableOfContent/>
                        <p className="pt-3">
                            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et nulla a magna
                            amet, amet.
                            Sodales malesuada laoreet bibendum neque amet turpis non.
                            Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero
                            fermentum urna, nunc.
                            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in.
                            Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non.
                            Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero
                            fermentum urna, nunc.
                        </p>
                        <h4 className="font-[family-name:var(--font-merriweather-bold)] pt-3 text-xl">
                            How to travel without spending a dime
                        </h4>
                        <p className="pt-3">
                            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et nulla a magna
                            amet, amet.
                            Sodales malesuada laoreet bibendum neque amet turpis non.
                            Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero
                            fermentum urna, nunc.
                            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in.
                            Et nulla a magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non.
                            Ac arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero
                            fermentum urna, nunc.
                        </p>
                        <h4 className="font-[family-name:var(--font-merriweather-bold)] pt-3 text-xl">
                            Get the most out of your credit card reward points
                        </h4>
                        <p className="pt-3">
                            Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros.
                            Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc.
                            Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt.
                            Neque,
                            et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.
                        </p>
                        <p className="pt-3">
                            Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit
                            hac tristique orci.
                            Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
                            vitae.
                            Duis luctus convallis risus purus sollicitudin purus id eu.
                            Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.
                        </p>
                        <h4 className="font-[family-name:var(--font-merriweather-bold)] pt-3 text-xl">
                            Why you don’t need more than 3 pieces of clothing
                        </h4>
                        <p className="pt-3">
                            Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros.
                            Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc.
                            Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt.
                            Neque,
                            et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.
                        </p>
                        <p className="pt-3">
                            Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit
                            hac tristique orci.
                            Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
                            vitae.
                            Duis luctus convallis risus purus sollicitudin purus id eu.
                            Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.
                        </p>
                    </article>
                    <Recommend />
                    <Author />
                </div>
                <section className="flex flex-wrap justify-between mt-[8rem]">
                    <div className="w-[30%]">
                        <Subscribe/>
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
