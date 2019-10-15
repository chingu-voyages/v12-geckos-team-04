import React from 'react'

const UsefulLinksContainer = () => {

    const links = [
        "https://en.wikipedia.org/wiki/Brigid_Kosgei",
        "https://css-tricks.com/favicons-next-to-external-links/",
        "https://stackoverflow.com/questions/52324664/how-to-use-iframe-in-react-js",
        "https://medium.com/@jamesfuthey/simulating-the-creation-of-website-thumbnail-screenshots-using-iframes-7145269891db",
        "https://www.w3schools.com/html/html_iframe.asp",
        "https://www.google.com/search?q=regex+everything+after+something&rlz=1C1CHBF_enGB862GB862&oq=regex+everything+after+something&aqs=chrome..69i57.3196j1j4&sourceid=chrome&ie=UTF-8"
    ]

    const getFavicon = (link) => {
        let index
        index = link.indexOf('com')
        if (index === -1) {
            index = link.indexOf('org')
        }
        let start = link.substr(0, index + 3)
        let iconUrl = start + '/favicon.ico'
        return <img src={iconUrl} width="20px" height="20px"></img>
    }


    return (
        <div>
            {links.map(getFavicon)}
        </div>
    )
}

export default UsefulLinksContainer

