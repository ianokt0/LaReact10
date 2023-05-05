import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="container mx-auto flex justify-center">
            <div className="pt-6 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card w-full lg:w-96 shadow-xl hover:shadow-none bg-white/50 m-2">
                    <div className="p-4 text-2xl">EDIT POSTINGAN</div>
                    <div className="card-body">
                        <input
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(title) => setTitle(title.target.value)}
                            defaultValue={props.myNews.title}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            defaultValue={props.myNews.description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full bg-white"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            defaultValue={props.myNews.category}
                        />
                        <button
                            className="btn btn-primary m-2 uppercase"
                            onClick={() => handleSubmit()}
                        >
                            Udate
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
//4.55
