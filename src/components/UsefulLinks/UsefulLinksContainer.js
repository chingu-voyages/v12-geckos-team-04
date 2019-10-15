import React from 'react'
import styles from './UsefulLinksContainer.module.scss'
import Header from './Header'
import LinkList from './LinkList'
import AddLinkButton from './AddLinkButton'

class UsefulLinksContainer extends React.Component {

    state = {
        links: [

        ]
    }

    componentDidMount() {
        if (localStorage.getItem('savedLinks') && localStorage.getItem('savedLinks').length > 0) {
            const savedLinks = JSON.parse(localStorage.getItem('savedLinks'))
            this.setState(() => ({links: savedLinks}))
        }
    }

    addLink = (e) => {
        e.preventDefault()
        e.persist()
        const textInput = e.target.elements.textInput.value
        let updatedList = [...this.state.links, textInput]
        localStorage.setItem('savedLinks', JSON.stringify(updatedList))
        this.setState(() => ({links: updatedList}))
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