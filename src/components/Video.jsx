
import video from '../assets/video.mp4'
const Video = () => {
  return (
    <section className="Video">
        <div className="Video-videoContainer">
            <video src={video} controls autoPlay></video>
        </div>
        <div className="Video-infoContainer">
            <div className="Video-title">
                <h4 className="Video-h4">GLAMOUR & COMFORT</h4>
                <p className="Video-subTitle">THAT EXPANDS THE IMAGINATION</p>
            </div>
            <p className="Video-p">Deluxe rooms, luxury one, two and three bedroom suites, lavish penthouses and grand residences beckon discerning visitors seeking quality and elegant comfort.</p>
            <p className="Video-yourChoice">THREE DESTINATIONS. YOUR CHOICE…</p>
            <i className="fa-regular fa-angle-down"></i>
            <div className="Video-Buttons">
              <div className="Video-btn btn-blue">CANCUN</div>
              <div className="Video-btn btn-blue">PUERTO VALLARTA</div>
              <div className="Video-btn btn-blue">LOS CABOS</div>
            </div>
        </div>
    </section>
  )
}

export default Video