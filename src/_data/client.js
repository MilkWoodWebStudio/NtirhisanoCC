module.exports = {
    name: "Ntirhisano Community Centre",
    email: "admin@ncc.org",
    phoneForTel: "071 768 9611",
    phoneFormatted: "(071) 768-9611",
    address: {
        lineOne: "515 Albert Road",
        lineTwo: "Salt River",
        city: "Cape Town",
        state: "Western Cape Provence",
        zip: "7925",
        country: "South Africa",
        mapLink: "https://maps.app.goo.gl/uigdxWpasHtGszd77",
    },
    socials: {
        facebook: "https://www.facebook.com/people/Spencer-Park/pfbid02FMySvRUyiTxF1p6d7JNGv5wNMjKqqCTkvxboQrvKYG14N3JpmYPNqskuwws6ABATl",
        instagram: "https://www.instagram.com/guardiansofspencerpark",
        xcorp: "https://x.com/OfPark86365",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.ncc.org",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
