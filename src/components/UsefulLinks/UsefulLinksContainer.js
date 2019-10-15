import React from 'react'

class UsefulLinksContainer extends React.Component {

    state = {
        links: [
            "https://en.wikipedia.org/wiki/Brigid_Kosgei",
            "https://css-tricks.com/favicons-next-to-external-links/",
            "https://stackoverflow.com/questions/52324664/how-to-use-iframe-in-react-js",
            "https://medium.com/@jamesfuthey/simulating-the-creation-of-website-thumbnail-screenshots-using-iframes-7145269891db",
            "https://www.w3schools.com/html/html_iframe.asp",
            "https://www.google.com/search?q=regex+everything+after+something&rlz=1C1CHBF_enGB862GB862&oq=regex+everything+after+something&aqs=chrome..69i57.3196j1j4&sourceid=chrome&ie=UTF-8"
        ]
    }

    componentDidMount() {

    }

    getFavicons = (link) => {
        let index
        index = link.indexOf('com')
        if (index === -1) {
            index = link.indexOf('org')
        }
        let start = link.substr(0, index + 3)
        let iconUrl = start + '/favicon.ico'
        return <img src={iconUrl} width="20px" height="20px"></img>
    }

    render() {

        return (
            <div>
                {this.state.links.map(this.getFavicons)}
            </div>
        )
    }
}

export default UsefulLinksContainer