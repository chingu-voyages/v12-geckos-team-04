import React from 'react'
import styles from './LinkList.module.scss'

class LinkList extends React.Component {

    getUrlAndFavicon = (link) => {
        let index
        index = link.indexOf('com')
        if (index === -1) {
            index = link.indexOf('org')
        }
        let start = link.substr(0, index + 3)
        let iconUrl = start + '/favicon.ico'
        if (link.length > 150) {
            link = link.substr(0, 120) + '...'
        }
        return <li className={styles.listItem}><img className={styles.favicon} src={iconUrl}></img><span className={styles.linkText}>{link}</span></li>
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