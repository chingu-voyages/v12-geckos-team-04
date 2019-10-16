import React from 'react'
import styles from './LinkList.module.scss'

class LinkList extends React.Component {

    getUrlAndFavicon = (link, index) => {
        debugger
        let domainIndex
        domainIndex = link.indexOf('com')
        if (domainIndex === -1) {
            domainIndex = link.indexOf('org')
        }
        let start = link.substr(0, domainIndex + 3)
        let iconUrl = start + '/favicon.ico'
        if (iconUrl.substr(0, 4) !== 'http') {
            const protocol = 'http://'
            iconUrl = protocol + iconUrl
        }
        if (link.length > 150) {
            link = link.substr(0, 120) + '...'
        }
        return <li key={index} className={styles.listItem}><img alt={'Favicon for website'} className={styles.favicon} src={iconUrl}></img><span className={styles.linkText}>{link}</span><span onClick={(e) => {this.props.deleteLink(e, index)}} title="Delete this link" className={styles.closeButton}>&times;</span></li>
    }

    render() {

        return (
            <div>
                <ul className={styles.list}>
                    {this.props.links.map(this.getUrlAndFavicon)}
                </ul>
            </div>
        )
    }

}

export default LinkList