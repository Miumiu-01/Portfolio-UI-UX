"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    name: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    setForm({ name: "", name: "", objet: "", message: "" });
  };

  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Formulaire de contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="PréNom"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
          <input
            type="text"
            name="objet"
            placeholder="Objet"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-md h-32"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full py-3 rounded-md font-semibold"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
