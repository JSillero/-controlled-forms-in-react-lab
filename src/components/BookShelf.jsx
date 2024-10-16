import { useState } from 'react';
import Book from './Book';

export default function BookShelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Set our title state based on the formData state at the time of submission
        setBooks([...books, { title: formData.title, author: formData.author }]);
        // Reset fullName state to clear our form inputs
        setFormData({ title: '', author: '' });
    };


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <p>  <label htmlFor='title'>Title:
                            <input
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange} /> </label></p>
                        <p>  <label htmlFor='author'>Author:
                            <input
                                id="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange} /></label></p>
                        <input type='submit' value="Submit" />

                    </form>
                </div>
                <div className="bookCardsDiv">{books.map((book, idx) => {
                    return (
                        <Book
                            key={idx}
                            {...book}
                        />
                    )
                })}</div>
            </div>

        </>
    )
}

