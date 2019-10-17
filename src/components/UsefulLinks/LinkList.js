import React from 'react'
import styles from './LinkList.module.scss'
import defaultIcon from './images/default.ico'

class LinkList extends React.Component {

    getUrlAndIcon = (linkObj, index) => {
        let linkText = linkObj.linkText
        if (linkObj.linkText.substr(0, 4) !== 'http') {
            linkText = 'http://' + linkText
        }
        let domainIndex
        domainIndex = linkText.indexOf('com')
        if (domainIndex === -1) {
            domainIndex = linkText.indexOf('org')
        }
        let start = linkText.substr(0, domainIndex + 3)
        let iconUrl = start + '/favicon.ico'
        if (linkText.length > 150) {
            linkText = linkText.substr(0, 120) + '...'
        }
        return <li key={index} className={styles.listItem} onClick={() => {this.props.showModal(index, linkText)}}><img onError={this.handleError} alt={'Icon for website'} className={styles.favicon} src={iconUrl}></img><a href={linkText} target='_blank' className={styles.linkText}>{linkText}</a><span>{this.props.description}</span><span onClick={(e) => {this.props.deleteLink(e, index)}} title="Delete this link" className={styles.closeButton}>&times;</span></li>
    }

    handleError = (e) => {
        if (e.target.src !== defaultIcon) {
            e.target.src = defaultIcon
        }
    }

    render() {

        return (
            <div>
                <ul className={styles.list}>
                    {this.props.links.map(this.getUrlAndIcon)}
                </ul>
            </div>
        )
    }

}

export default LinkList