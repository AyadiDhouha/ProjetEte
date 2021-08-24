import  "./SingleContent.css"
import identif from '../../components/images/identif.png'
const SingleContent = ({
name,

}) => {
    
    return (
        <div >
        <img className="identif" src={identif} />
        <h1 className="title">{name}</h1>
        </div>
    )
}

export default SingleContent
