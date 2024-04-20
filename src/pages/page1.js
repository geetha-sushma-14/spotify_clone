import React, { Fragment } from 'react';
function Index(){
    return(
        <Fragment>
            <div className="main">
                <div className="sidebar">

                    {/* <!-- 1.nav box --> */}
                    <div className="nav">
                        <div className="nav-option" >
                            <i className="fa-solid fa-house"></i>
                            <a href="#">Home</a>
                        </div>
                        <div className="nav-option">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <a href="#">Search</a>
                        </div>
                    </div>

                    {/* <!-- 2. library box --> */}
                    <div className="library">
                        <div className="options">
                            <div className="lib-option nav-option">
                                <img src="./assets/images/library_icon.png" alt="lib icon"/>
                                <a href="#">Your Library</a>
                            </div>
                            <div className="icons">
                                <i className="fa-solid fa-plus"></i>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div className="lib-box">
                            <div className="box">
                                <p className="box-p1">Create your first playlist</p>
                                <p className="box-p2">It's easy, we'll help</p>
                                <button className="badge">Create Playlist</button>
                            </div>
                            <div className="box">
                                <p className="box-p1">Let's find some podcasts to follow</p>
                                <p className="box-p2">We'll keep you updated on new episodes</p>
                                <button className="badge">Browse podcasts</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- end of sidebar --> */}


                {/* <!-- start maincontent --> */}
                <div className="maincontent">

                    {/* <!-- 1. sticky nav bar --> */}
                    <div className="sticky-nav">
                        <div className="sticky-nav-icons">
                            <img src="assets/images/backward_icon.png" alt="back"/>
                            <img src="assets/images/forward_icon.png" alt="forward" className="hide"/>
                        </div>
                        <div className="sticky-nav-options">
                            <button className="badge nav-item hide">Explore Premium</button>
                            <button className="badge nav-item dark-badge"><i className="fa-solid fa-download" style={{marginRight: '5px'}}></i>Install app</button>
                            <i className="fa-regular fa-user nav-item"></i>
                        </div>
                    </div>

                    {/* <!-- 2. cards part --> */}
                    <h2 style={{ backgroundColor: '#121212' }}>Recently Played</h2>
                    <div className="cards-container">
                        <div className="card">
                            <img src="assets/images/card1img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                    </div>

                    <h2 style={{backgroundColor: '#121212'}}>Trending now near you</h2>
                    <div className="cards-container">
                        <div className="card">
                            <img src="assets/images/card2img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card3img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card4img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                    </div>

                    <h2 style={{backgroundColor: '#121212'}}>Featured charts</h2>
                    <div className="cards-container">
                        <div className="card">
                            <img src="assets/images/card5img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card6img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card1img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card5img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card6img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                        <div className="card">
                            <img src="assets/images/card1img.jpeg" alt="top-50" className="card-img"/>
                            <p className="card-title">Top 50 - Global</p>
                            <p className="card-info">Your daily updates of the most played tracks...</p>
                        </div>
                    </div>

                    {/* <!-- 3. footer --> */}
                    <div className="footer">
                        <div className="line"></div>
                    </div>
                </div>

                {/* <!-- start musicplayer --> */}
                <div className="music-player">
                    <div className="album">
                        <div className="album-song">
                            <img src="assets/images/card4img.jpeg" alt="card1" className="hide"/>
                            <div className="songname">
                                <p className="album-title">Naa ready</p>
                                <p className="album-info hide">Anirudh Ravichander</p>
                            </div>
                        </div>
                        <i className="fa-regular fa-heart hide"></i>
                    </div>
                    <div className="player">
                        <div className="player-controls">
                            <img src="assets/images/player_icon1.png" alt="icon1" className="player-control-icon"/>
                            <img src="assets/images/player_icon2.png" alt="icon2" className="player-control-icon"/>
                            <img src="assets/images/player_icon3.png" alt="icon3" className="player-control-icon" />
                            <img src="assets/images/player_icon4.png" alt="icon4" className="player-control-icon"/>
                            <img src="assets/images/player_icon5.png" alt="icon5" className="player-control-icon"/>
                        </div>
                        <div className="playback-bar">
                            <span className="current-time">00:00</span>
                            <input type="range" min="0" max="100" className="progress-bar" />
                            <span className="total-time">3:33</span>

                        </div>
                    </div>
                    <div className="controls">
                        <i className="fa-regular fa-file-audio hide"></i>
                        <i className="fa-solid fa-microphone hide"></i>
                        <i className="fa-solid fa-sliders hide"></i>
                        <i className="fa-solid fa-volume-off"></i>
                        <input type="range" className="hide"/>
                        <i className="fa-solid fa-minimize"></i>
                        <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Index;