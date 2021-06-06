import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading..</div>;
    }
    const { title, description } = video.snippet;
    const { videoId } = video.id;

    return (
        <div>
            <div className="ui embed">
                <iframe
                    title="Video Player"
                    src={`https://www.youtube.com/embed/${videoId}`}
                ></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
