import Head from "next/head";
import { Ubuntu } from "next/font/google";

interface PageProps {
    title: string;
    children: React.ReactNode;
}
const ubuntu = Ubuntu({
    weight: "400",
    subsets: ["latin"],
});

/// Place your layout definitions here
const Page: React.FC<PageProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={ubuntu.className}>{children}</main>
        </>
    );
};
export default Page;
