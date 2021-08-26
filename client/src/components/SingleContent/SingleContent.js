import  "./SingleContent.css"
import ContentModal from '../ContentModal/ContentModal'
import identif from '../../components/images/identif.png'
const SingleContent = ({
name,
status
}) => {
    
    return (
        <ContentModal name={name } status={status}>

        <img className="identif" src={identif} />
        <h1 className="title">{name}</h1>
        
        </ContentModal>
    )
}

export default SingleContent
