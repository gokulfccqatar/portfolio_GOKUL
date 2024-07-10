import React from "react";
import styles from './ContactStyles.module.css'
function Contact(){
    return(
        <section id="contact" className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form action="">

                <div className="formGroup">
                    <label htmlFor="Name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name here"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="Email" hidden>
                        Email
                    </label>
                    <input
                        type="Email"
                        name="Email"
                        id="Email"
                        placeholder="Email"
                        required
                    />
                </div>


                <div className="formGroup">
                    <label htmlFor="Message" hidden>
                     Message
                    </label>
                    <textarea
                        type="text"
                        name="message"
                        id="Email"
                        placeholder="Type Your message"
                        required
                    />
                </div>
                <input className="hover btn" type='submit' value='submit'/>

            </form>
        </section>
    )
}

export default Contact;