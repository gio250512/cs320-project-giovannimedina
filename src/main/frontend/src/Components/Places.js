import React, { useState, useEffect } from "react";
import { getPlaces, addPlace, updatePlace, deletePlace } from "./PlaceService";
import '../Styles/Places.css';

function Places() {
    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState({ name: "", location: "", description: "", image: "" });

    useEffect(() => {
        fetchPlaces();
    }, []);

    const fetchPlaces = async () => {
        const response = await getPlaces();
        setPlaces(response.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (place.id) {
            await updatePlace(place.id, place);
        } else {
            await addPlace(place);
        }
        setPlace({ name: "", location: "", description: "", image: "" });
        fetchPlaces();
    };

    const handleDelete = async (id) => {
        await deletePlace(id);
        fetchPlaces();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPlace({ ...place, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold">Add your Whisper</h1>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input type="text" placeholder="Place name" className="border p-2 w-full"
                       value={place.name} onChange={(e) => setPlace({ ...place, name: e.target.value })} required />
                <input type="text" placeholder="Location" className="border p-2 w-full"
                       value={place.location} onChange={(e) => setPlace({ ...place, location: e.target.value })} required />
                <textarea placeholder="Description" className="border p-2 w-full"
                          value={place.description} onChange={(e) => setPlace({ ...place, description: e.target.value })}></textarea>
                <input type="file" accept="image/*" className="border p-2 w-full" onChange={handleImageUpload} />

                {place.image && (
                    <img src={place.image} alt="Preview" className="w-full h-32 object-cover mt-2" />
                )}

                <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                    {place.id ? "Update" : "Add"} Place
                </button>
            </form>
            <ul className="mt-4">
                {places.map((p) => (
                    <li key={p.id} className="border p-2 flex flex-col">
                        <span className="font-bold">{p.name} - {p.location}</span>
                        <p>{p.description}</p>
                        {p.image && <img src={p.image} alt={p.name} className="w-full h-32 object-cover mt-2" />}
                        <div className="flex mt-2">
                            <button className="text-blue-500" onClick={() => setPlace(p)}>Edit</button>
                            <button className="text-red-500 ml-2" onClick={() => handleDelete(p.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Places;