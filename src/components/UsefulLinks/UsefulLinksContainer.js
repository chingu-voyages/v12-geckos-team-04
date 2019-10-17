import React from 'react'
import styles from './UsefulLinksContainer.module.scss'
import Header from './Header'
import LinkList from './LinkList'
import AddLinkButton from './AddLinkButton'
import Modal from './Modal'

class UsefulLinksContainer extends React.Component {

    state = {
        links: [],
        requestedIndex: '',
        requestedLinkText: '',
        showModal: false
    }

    closeModal = (e) => {
        if (e.target.classList.contains('modalWrapper') || e.target.classList.contains('closeButton')) {
            this.setState(() => ({showModal: false}))
        }
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
        const textInput = e.target.elements.textInput.value.trim()
        if (textInput === '') {
            alert('Please enter a link')
            return
        }
        e.target.elements.textInput.value = ''
        let updatedList = [...this.state.links, textInput]
        localStorage.setItem('savedLinks', JSON.stringify(updatedList))
        this.setState(() => ({links: updatedList}))
    }

    deleteLink = (e, index) => {
        const savedLinks = JSON.parse(localStorage.getItem('savedLinks'))
        savedLinks.splice(index, 1)
        const updatedList = savedLinks
        localStorage.setItem('savedLinks', JSON.stringify(updatedList))
        this.setState(() => ({links: updatedList}))
    }

    handleError = (e) => {
        e.persist()
        console.log(e)
    }

    showModal = (index, linkText) => {
        this.setState(() => ({requestedIndex: index, requestedLinkText: linkText, showModal: true}))

    }

    render() {

        return (
            <div className={styles.wrapper}>
                <Header />
                <LinkList links={this.state.links} deleteLink={this.deleteLink} handleError={this.handleError} showModal={this.showModal} />
                <AddLinkButton addLink={this.addLink} />
                {this.state.showModal && <Modal addDescription={this.addDescription} closeModal={this.closeModal} linkText={this.state.requestedLinkText} />}
            </div>
        )
    }
}

export default UsefulLinksContainer