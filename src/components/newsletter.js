import React, { useState, useEffect, useContext } from 'react'
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { CloseOutline } from 'react-ionicons'

import { ThemeContext } from '../context/provider';

const Newsletter = ({ heading }) => {
    const { isNewsletterHidden, changeNewsletterState } = useContext( ThemeContext );

    const [isHidden, setIsHidden] = useState(true);
    const [result, setResult] = useState(null);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    // console.log(result)

    // const [translated, setTranslated] = useState('is-hidden');

    const handleSubmit = async (e) => {
        console.log('submitting');
        setIsError(false);
        setMessage(null);
        e.preventDefault();
        let response = await addToMailchimp(email, {
            FNAME: firstName,
            LNAME: lastName,
        });

        if( response.result === 'error') {
            setMessage(response.msg);
            setIsError(true);
            setResult(null);
            console.error(result);
        }

        if( response.result === 'success') {
            setMessage(response.msg);
            setIsError(false);
            setResult(response);
        }

        setEmail('');
        setFirstName('');
        setLastName('');
    }

    const toggleForm = () => {
        setIsHidden(!isHidden);

        changeNewsletterState( !isHidden );
    }

    useEffect(() => {
        console.log({isNewsletterHidden});
        setTimeout( () => {
            if( !isNewsletterHidden ) {
                setIsHidden(false);
            }
        }, 8000);
    }, [changeNewsletterState, isNewsletterHidden])

    return (
        <div className={`newsletter block p-4 pb-6 fixed pin-r pin-b z-50 rounded shadow-lg bg-white ${isHidden ? 'is-hidden' : ''}`}>
            <button
                className="rounded-full bg-black h-6 w-6 text-white newsletter-hide-button"
                onClick={toggleForm}
                >
                <CloseOutline color={'#fff'} />
                <span className="screen-reader">Dismiss</span>
            </button>
            <div className="container">
                {heading && <h3 className="mb-8">
                    {heading}
                </h3>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="newsletter-form">
                        <div className="flex mb-2 gap-4">
                            <label className="block w-1/2">
                                <span className="block text-xs font-bold mb-1">First Name</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="border p-2 w-full text-sm"
                                    />
                            </label>
                            <label className="block w-1/2">
                                <span className="block text-xs font-bold mb-1">Last Name</span>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="border p-2 w-full text-sm"
                                    />
                            </label>
                        </div>
                        <label className="block max-w-full mb-4">
                            <span className="block text-xs font-bold mb-1">Email</span>
                            <input
                                type="email"
                                value={email}
                                placeholder="your@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                                className="border p-2 w-full text-sm"
                                />
                        </label>
                        <div>
                            <button className="btn btn-inverse text-sm">Subscribe</button>
                        </div>
                    </div>
                    {message && <div className={`newsletter-message mt-4 ${isError ? 'text-red' : 'text-green'}`}>
                        <p dangerouslySetInnerHTML={{ __html: message }} className="text-sm mb-0"></p>
                    </div>}
                </form>
            </div>
        </div>
    )
}

export default Newsletter;
