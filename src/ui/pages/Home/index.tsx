import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as C from './styles';
import * as A from '../../App.styles';

import Album from "../../../domain/entities/album";
import { instance as albumRepository } from '../../../domain/repositories/album';
import Loading from '../../components/Loading';

const HomePage = () => {

    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        albumRepository.all().then(setAlbums).finally(() => setLoading(false));
    }, []);

    const handleClickGoAlbumPage = (id: number) => {
        navigate(`/albums/${id}`);
    };

    return !loading ? (
        <A.Container>
            <A.Header>
                <A.Title>album api json placeholder</A.Title>
            </A.Header>
            <A.Content>
                {albums.map((album, index) => (
                    <C.Album key={album.id} onClick={() => handleClickGoAlbumPage(album.id)}>
                        <C.Order>{index + 1}</C.Order>
                        <C.AlbumTitle>{album.title}</C.AlbumTitle>
                    </C.Album>
                ))}
            </A.Content>
        </A.Container>
    ) : (<Loading />);
};

export default HomePage;