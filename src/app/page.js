"use client";

import { useState } from "react";

export default function Home() {
  const [resources, setResources] = useState([]);

  const [form, setForm] = useState({
    title: "",
    link: "",
    type: "",
    notes: "",
    author: "",
    topic: "",
    tags: "",
    date: "",
    event: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = () => {
    setResources([...resources, { ...form }]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center m-auto p-20 prose">
      <h1>SoftCraft Resources</h1>
      <div className="form-control min-w-full">
        <label htmlFor="title">Title</label>
        <input
          value={form.title}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="title"
          name="title"
          size="10"
          required={true}
        />
        <label htmlFor="link">Link</label>
        <input
          value={form.link}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="link"
          name="link"
          size="10"
          required={true}
        />
        <label htmlFor="type">Type</label>
        <input
          value={form.type}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="type"
          name="type"
          size="10"
          required={true}
        />
        <label htmlFor="notes">Notes</label>
        <input
          value={form.notes}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="notes"
          name="notes"
          size="10"
        />
        <label htmlFor="author">Author</label>
        <input
          value={form.author}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="author"
          name="author"
          size="10"
        />
        <label htmlFor="topic">Topic</label>
        <input
          value={form.topic}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="topic"
          name="topic"
          size="10"
        />
        <label htmlFor="tags">Tags</label>
        <input
          value={form.tags}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="tags"
          name="tags"
          size="10"
        />
        <label htmlFor="date">Date</label>
        <input
          value={form.date}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="date"
          name="date"
          size="10"
        />
        <label htmlFor="event">Event</label>
        <input
          value={form.event}
          onChange={handleChange}
          className="input input-bordered"
          type="text"
          id="event"
          name="event"
          size="10"
        />
        <button className="btn btn-primary mt-5" onClick={handleClick}>
          Add resource
        </button>
      </div>

      {resources.length !== 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Type</th>
              <th>Notes</th>
              <th>Author</th>
              <th>Topic</th>
              <th>Tags</th>
              <th>Date</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.link}>
                <td>{resource.title}</td>
                <td>
                  <a href={resource.link} target="_blank">
                    {resource.link}
                  </a>
                </td>
                <td>{resource.type}</td>
                <td>{resource.notes}</td>
                <td>{resource.author}</td>
                <td>{resource.topic}</td>
                <td>{resource.tags}</td>
                <td>{resource.date}</td>
                <td>{resource.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
