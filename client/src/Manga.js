import React from 'react';
import './Manga.css';
import { Card } from 'react-bootstrap';


export default class Manga extends React.Component {
    
    state = {
        array_manga: []
    }

    async getAllMangas() {
        let mangas = [];
        await fetch('https://kitsu.io/api/edge/manga?sort=popularityRank&page[limit]=20', {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-type": "application/vnd.api+json"
            },

        })
            .then(res => res.json())
            .then(datas => {
                datas = datas['data']
                //console.log(datas)
                datas.forEach(manga => {
                    const m = {
                        "title": manga['attributes']['titles']['en_jp'],
                        "startDate": manga['attributes']['startDate'],
                        "synopsis": manga['attributes']['synopsis'],
                        "coverImage": manga['attributes']['posterImage']['small'],
                        "popularityRank": manga['attributes']['popularityRank']
                    }
                    mangas.push(m)
                });
                this.setState({ array_manga: mangas })

            })


    }

    async postMangaLib(idx){
        //console.log(this.state.array_manga[idx])
        if(this.props.isLog){
            const manga = this.state.array_manga[idx]
            console.log(manga)
            await fetch('/library',{
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                 },
                method: 'POST',
                body:JSON.stringify(manga)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
        else{
            alert("Veuillez vous identifier pour ajouter un manga à votre mangathèque")
        }
    }

    async componentDidMount() {
        await this.getAllMangas();
        //console.log(this.state.array_manga)
    }

    render() {
        const manga = this.state.array_manga
        return (
            <div className="mangas">
                <h2>Manga</h2>
                <hr className="separator"></hr>
                <div className="manga">
                {manga.map((m, idx) => {
                    return (
                        <Card key={idx} >
                            <Card.Img variant="top" src={m.coverImage} />
                            <Card.Body>
                                <Card.Title>
                                    {m.title}
                                    <button className='fav' onClick={this.postMangaLib.bind(this,idx)}>❤️</button>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{m.startDate} | {m.popularityRank} Rank</Card.Subtitle>
                                <Card.Text>
                                    {m.synopsis}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    );

                })}
                </div>
                
            </div>
        );
    }
}