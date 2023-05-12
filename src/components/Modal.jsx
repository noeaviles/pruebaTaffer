
const Modal = ({ modalActive, handleModal}) => {

  return (
    <div className={ modalActive ? 'Modal' : 'Modal-hidden' }>
        <div className="Modal-container">
            <div className="Modal-control"><p className="Modal-x" onClick={handleModal}>X</p></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bFCIJ28kh5s" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Modal