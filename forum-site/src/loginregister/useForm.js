import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let success;
        if (values.username && values.password2) {
            console.log("this is a signup not login");
            const rawResponse = await fetch('http://localhost:9000/signup', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const content = await rawResponse.json();


            success = content.login;
            let loggedInUser = content.user;

            //reset form
            setValues({
                username: '',
                email: '',
                password: '',
                password2: ''
            });

            return loggedInUser;
        }
        else {
            console.log("this is a login not a signup");
            const rawResponse = await fetch('http://localhost:9000/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const content = await rawResponse.json();

            success = content.login;
            let loggedInUser = {
                'user': content.user,
                'isAdmin': content.isAdmin
            };

            //reset form
            setValues({
                username: '',
                email: '',
                password: '',
                password2: ''
            });

            return loggedInUser;

        }



    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;