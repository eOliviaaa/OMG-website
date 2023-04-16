import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const EventSchema = Yup.object().shape({
    norwegian_header: Yup.string()
        .min(2, 'Too short!')
        .max(75, 'Too long!')
        .required('Required'),
    norwegian_description: Yup.string()
        .min(2, 'Too short!')
        .required('Required'),
    english_header: Yup.string()
        .min(2, 'Too short!')
        .max(75, 'Too long!')
        .required('Required'),
    english_description: Yup.string()
        .min(2, 'Too short!')
        .required('Required'),
    start_date: Yup.string()
        .required('Required'),
    end_date: Yup.string()
        .required('Required'),
});

export default function EventForm() {
    return(
        <Formik
            validateOnBlur={false}
            initialValues={{ norwegian_header: "", norwegian_description: "", english_header: "", english_description: "", start_date: "", end_date: "", }}
            validationSchema={EventSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                touched,
            }) => (
                <form className="event-form-background" id="event-form-tag" onSubmit={handleSubmit}>
                    <h1>Event From</h1>
                    <div className="event-form">
                        <div>
                            <h2>Norwegian form</h2>
                            <input
                                type="text"
                                name="norwegian_header"
                                placeholder="Type header name here..."
                                id="norwegian-header-input"
                                className="header-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.norwegian_header}
                            />
                            {errors.norwegian_header && touched.norwegian_header ? (
                                <div className={"form_error"}>{errors.norwegian_header}</div>
                            ) : null}

                            <textarea
                                type="text-area"
                                name="norwegian_description"
                                placeholder="Type description here..."
                                id="norwegian-description-input"
                                className="description-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.norwegian_description}
                            />
                            {errors.norwegian_description && touched.norwegian_description ? (
                                <div className={"form_error"}>{errors.norwegian_description}</div>
                            ) : null}
                        </div>
                        <div className="padding-button">
                            <button
                                type="submit"
                                className="add-event"
                                id="add-event"
                            >Add event</button>
                        </div>
                        <div>
                            <h2>English form</h2>
                            <input
                                type="text"
                                name="english_header"
                                placeholder="Type header name here..."
                                id="english-header-input"
                                className="header-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.english_header}
                            />
                            {errors.english_header && touched.english_header ? (
                                <div className={"form_error"}>{errors.english_header}</div>
                            ) : null}
                            <textarea
                                type="text-area"
                                name="english_description"
                                placeholder="Type description here..."
                                id="english-description-input"
                                className="description-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.english_description}
                            />
                            {errors.english_description && touched.english_description ? (
                                <div className={"form_error"}>{errors.english_description}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className="date-input">
                        <div>
                            <label htmlFor="start-date">Start date</label>
                            <input
                                type="datetime-local"
                                name="start_date"
                                id="start-date"
                                className="date-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.start_date}
                            />
                            {errors.start_date && touched.start_date ? (
                                <div className={"form_error"}>{errors.start_date}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="end-date">End date</label>
                            <input
                                type="datetime-local"
                                name="end_date"
                                id="end-date"
                                className="date-input"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.end_date}
                            />
                            {errors.end_date && touched.end_date ? (
                                <div className={"form_error"}>{errors.end_date}</div>
                            ) : null}
                        </div>
                    </div>

                    <div id="event-table">

                    </div>
                </form>
            )}
        </Formik>
    );
}