import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    // const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        // setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        console.log("props", props);
        return;
    }, []);

    // console.log("message:", props.flash.message);
    // console.log("ini notif", isNotif);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight hover:text-secondary">
                    LaReact
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="min-h-screen container mx-auto">
                <div className="text-2xl p-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-bold">
                    Form Input Postingan
                </div>
                {/* Form Input */}
                <div className="pt-6 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 rounded-lg shadow-lg hover:shadow-inner">
                        {props.flash.message && (
                            <div className="alert alert-info shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />
                        <button
                            className="btn btn-outline btn-accent m-2 shadow-lg hover:shadow-inner"
                            onClick={() => handleSubmit()}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
                {/* Hasil Input */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-xl ">Berita Anda</h1>
                    <div
                        className="flex justify-start flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center 
            gap-4 "
                    >
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((news, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="card w-full lg:w-96 shadow-xl hover:shadow-inner bg-white/50"
                                    >
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {news.title}
                                                <div className="badge badge-secondary">
                                                    NEW
                                                </div>
                                            </h2>
                                            <p>{news.description}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-inline">
                                                    {news.category}
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "edit.news"
                                                        )}
                                                        method="get"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        edit
                                                    </Link>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "delete.news"
                                                        )}
                                                        method="post"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="alert shadow-lg hover:shadow-none max-w-2xl mx-auto bg-white/50">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-info flex-shrink-0 w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                    <span className="uppercase">
                                        Tidak ada berita
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
// 33.00
