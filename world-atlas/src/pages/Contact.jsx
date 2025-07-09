export const Contact = () =>{
    const handleFormSubmit = (formData) => {
        const formInput = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" 
                className="form-control"
                required
                autoComplete="false" 
                placeholder="Enter your name"
                name="usename" />

                <input type="email" 
                className="form-control"
                required
                autoComplete="false" 
                placeholder="Enter your email"
                name="email" />

                <textarea type="text" 
                className="form-control"
                rows="10"
                required
                autoComplete="false" 
                placeholder="Enter your message"
                name="message" ></textarea>

                <button type="submit">Send</button>
            </form>
            </div>
        </section>
    )
};