
import ReactLoading from 'react-loading';
import '../loading/Loading.scss'

const Loading = () => {
    return (
        <div className= 'loading-container'>
            <ReactLoading type={'spin'} color={'#EE4D2D'} height={'20%'} width={'20%'} />
        </div>


    )
}
export default Loading;