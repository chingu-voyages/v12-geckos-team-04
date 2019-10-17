import React from 'react'
import styles from './UsefulLinksContainer.module.scss'
import Header from './Header'
import LinkList from './LinkList'
import AddLinkButton from './AddLinkButton'
import Modal from './Modal'
import InfoModal from './InfoModal'

class UsefulLinksContainer extends React.Component {

    state = {
        links: [],
        requestedIndex: '',
        requestedLinkText: '',
        requestedDescription: '',
        showModal: false,
        showInfoModal: false
    }

    addDescription = (e) => {
        e.preventDefault()
        const descriptionInput = e.target.elements.questionInput.value.trim()
        let updatedLinks = JSON.parse(localStorage.getItem('savedLinks'))
        for (let i = 0; i < updatedLinks.length; i++) {
            if (updatedLinks.indexOf(updatedLinks[i]) === this.state.requestedIndex) {
                updatedLinks[i].description = descriptionInput
            }
        }
        localStorage.setItem('savedLinks', JSON.stringify(updatedLinks))
        this.setState(() => ({links: updatedLinks, showModal: false}))
    }

    closeModal = (e) => {
        if (e.target.classList.contains('modalWrapper') || e.target.classList.contains('closeButton')) {
            this.setState(() => ({showModal: false, showInfoModal: false}))
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
        const newLinkObj = {
            linkText: textInput,
            description: ''
        }
        let updatedList = [...this.state.links, newLinkObj]
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

    showModal = (e, index, linkText, description) => {
        if (e.target.classList.contains('closeButton') || e.target.classList.contains('linkText')) {
            return
        } else {
            this.setState(() => ({requestedIndex: index, requestedLinkText: linkText, requestedDescription: description}))
            if (description === 'Add description') {
                this.setState(() => ({showModal: true}))
            } else {
                this.setState(() => ({showInfoModal: true}))
            }
        }
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <Header />
                <LinkList links={this.state.links} deleteLink={this.deleteLink} handleError={this.handleError} showModal={this.showModal} description={this.state.description} />
                <AddLinkButton addLink={this.addLink} />
                {this.state.showModal && <Modal addDescription={this.addDescription} closeModal={this.closeModal} linkText={this.state.requestedLinkText} description={this.state.description} />}
                {this.state.showInfoModal && <InfoModal closeModal={this.closeModal} linkText={this.state.requestedLinkText} description={this.state.requestedDescription} />}
            </div>
        )
    }
}

export default UsefulLinksContainer