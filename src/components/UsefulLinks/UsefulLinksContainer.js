import React from 'react'
import styles from './UsefulLinksContainer.module.scss'
import Header from './Header'
import LinkList from './LinkList'
import AddLinkButton from './AddLinkButton'

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

    addLink = (e) => {
        e.preventDefault()
        console.log('New link added')
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <Header />
                <LinkList links={this.state.links} />
                <AddLinkButton addLink={this.addLink} />
            </div>
        )
    }
}

export default UsefulLinksContainer