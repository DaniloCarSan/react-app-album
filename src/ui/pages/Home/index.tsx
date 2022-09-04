import { useState, useEffect } from 'react';

import * as C from './styles';

import AlbumEntity from "../../../domain/entities/album";
import { instance as albumRepository } from '../../../domain/repositories/album';

const HomePage = () => {

    const [albums, setAlbums] = useState<AlbumEntity[]>([]);

    useEffect(() => {
        albumRepository.getAllAlbums().then(setAlbums);
    }, []);

    return (
        <C.Container>
            <C.Header>
                <C.Title>album api json placeholder</C.Title>
            </C.Header>
            <C.Content>
                {albums.map((album, index) => (
                    <C.Album key={album.id}>
                        <C.Order>{index + 1}</C.Order>
                        <C.AlbumTitle>{album.title}</C.AlbumTitle>
                    </C.Album>
                ))}
            </C.Content>
        </C.Container>
    );
};

export default HomePage;