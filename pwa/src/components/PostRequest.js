import React from 'react'
class PostRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token: "",
            ref: null
        };
    }
    async getAccessToken() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded'},
            body: 'grant_type=client_credentials&client_id=c9679c416af84e99ac9193ea44957280&client_secret=bbb0e73211114ceaa278696db266f0b7'
        };
        // fetch('https://accounts.spotify.com/api/token', requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .then(data => this.setState({ access_token: data.access_token }));
        const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
        const data = await response.json();
        this.getCurrentlyPlaying(data.access_token);
    }

    async getCurrentlyPlaying(access_token){
        console.log(access_token);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + access_token}
        };
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', requestOptions);
        const data = await response.json();
        console.log(data);
    }
    async componentDidMount(){
        await this.getAccessToken();
    }
    render(){
        const ref = this.state.ref;
        return (
            <iframe style={{borderRadius:"12px"}} src={ref} width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        );
    }
}


export {PostRequest}