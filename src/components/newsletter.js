import React, { useState, useEffect, useContext } from 'react'
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mailchimp/
// import addToMailchimp from 'gatsby-plugin-mailchimp';
import { CloseOutline } from 'react-ionicons'
import NewsletterForm from './newsletter-form';

import { ThemeContext } from '../context/provider';

const Newsletter = ({ heading }) => {
    const { isNewsletterHidden, changeNewsletterState } = useContext( ThemeContext );

    const [isHidden, setIsHidden] = useState(true);
    // console.log(result)

    // const [translated, setTranslated] = useState('is-hidden');
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
    }, [isNewsletterHidden])

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
                <NewsletterForm />
            </div>
        </div>
    )
}

export default Newsletter;
