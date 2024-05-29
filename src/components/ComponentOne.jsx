import React from 'react';
import './CSS/p23-less.css';
import './CSS/common.css';
import './CSS/critical.css'

const ComponentOne = () => {
    return (
        <section
            id="2VUcNoeIcRXsl9UobcrJME"
            className="p23hero module module--noPadding backgroundJasmine fs-unmask"
            data-module-id="p23Hero"
            data-entry-id="2VUcNoeIcRXsl9UobcrJME"
            data-behavior="p23Hero"
        >
            <div className="p23hero__content flex flex--columns-2 mainContent__media_fullbleed">
                <div className="p23hero__copyContainer">
                    <div className="p23hero__copyHolder mainContainer__media_fullbleed">
                        <p className="p23hero__eyebrow copy-eyebrow margin--bottom-2">
                            AUDIENCE MANAGEMENT TOOLS
                        </p>
                        <h1 className="h1">
                            Personalize every customer interaction with precise audience segmentation
                        </h1>
                        <div className="p23hero__copy copy-large margin--top-3">
                            <p>
                                Mailchimp’s audience tools help you store, segment, and understand your customers to deliver the most relevant personalized experiences.
                            </p>
                        </div>
                        <div className="flex flex--middle margin--top-5">
                            <div className="margin--right-3">
                                <a className="ctaPrimary" href="/pricing/marketing/" aria-label="Get started">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p23hero__mediaContainer__media_fullbleed">
                    <figure className="image__media_fullbleed">
                        <picture>
                            <source
                                sizes="(min-width: 1600px) 1600px, 100vw"
                                srcSet="https://eep.io/images/yzco4xsimv0y/4bf8vBAEGZ0pWSsOz2gZfx/29b15f8afdc5bb360318a119e47d8fee/Audience_Management_-_Hero_-_EN.jpg?w=1520&fm=avif&q=60"
                                type="image/avif"
                            />
                            <source
                                sizes="(min-width: 1600px) 1600px, 100vw"
                                srcSet="https://eep.io/images/yzco4xsimv0y/4bf8vBAEGZ0pWSsOz2gZfx/29b15f8afdc5bb360318a119e47d8fee/Audience_Management_-_Hero_-_EN.jpg?w=1520&fm=webp&q=70"
                                type="image/webp"
                            />
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/4bf8vBAEGZ0pWSsOz2gZfx/29b15f8afdc5bb360318a119e47d8fee/Audience_Management_-_Hero_-_EN.jpg?w=1520&q=70"
                                className="mediaImage__image"
                                sizes="(min-width: 1600px) 1600px, 100vw"
                                alt="An e-commerce email using Mailchimp segmentation to target previous customers who are likely to purchase again."
                                width="1083"
                                height="885"
                            />
                        </picture>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default ComponentOne;
