import { useState, useEffect } from 'react';

import * as A from '../../App.styles';

import Album from "../../../domain/entities/album";
import { instance as albumRepository } from '../../../domain/repositories/album';
import Loading from '../../components/Loading';
import AlbumCard from '../../components/Album';

const HomePage = () => {

    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        albumRepository.all().then(setAlbums).finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <A.Container>
            <A.Header>
                <A.Title>album api json placeholder</A.Title>
            </A.Header>
            <A.Content>
                {albums.map((album, index) => (<AlbumCard key={album.id} album={album} index={index} />))}
            </A.Content>
        </A.Container>
    ) : (<Loading />);
};

export default HomePage;