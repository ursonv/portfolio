import React, { useState } from "react";
import { createContactMessage } from "../../core/modules/contactmessages/ContactMessage.api";
import styles from "./Contact.module.css";
import MainContainer from "../../components/MainContainer/MainContainer";
import Title from "../../components/design/Typography/Title/Title";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        message: "",
        name: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await createContactMessage(formData);
            setFormData({
                message: "",
                name: ""
            });
            alert("Contact message sent successfully!");
        } catch (error) {
            setError("An error occurred while submitting the form.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
            <>
            <MainContainer>

                <div className={styles.contactForm}>
                <Title text="Contact Form" />
                <form onSubmit={handleSubmit}>
                    {error && <div className={styles.errorMessage}>Error: {error}</div>}
                    <div>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.inputField}
                    />
                    </div>
                    <div>
                    <label htmlFor="message">Your question:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={styles.textareaField}
                    />
                    </div>
                    <button
                    type="submit"
                    disabled={isLoading}
                    className={styles.submitButton}
                    >
                    Send
                    </button>
                </form>
                </div>
            </MainContainer>
            </>

    );
};

export default Contact;
