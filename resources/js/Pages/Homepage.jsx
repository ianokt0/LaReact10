import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import NewsLists from "@/Components/Homepage/NewsLists";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    console.log("props :", props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="container border mx-auto">
                <div
                    className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center 
            gap-4 p-4"
                >
                    <NewsLists news={props.news.data} />
                </div>
            </div>
            <div className="mb-96"></div>
            <div className="flex justify-center items-center p-2">
                <Paginator meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    );
}
//4.55
