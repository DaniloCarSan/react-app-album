import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as A from '../../App.styles';
import * as C from './styles';

import { instance as albumRepository } from '../../../domain/repositories/album';
import { instance as photoRepository } from '../../../domain/repositories/photo';

import Album from '../../../domain/entities/album';
import Photo from '../../../domain/entities/photo';

import Loading from '../../components/Loading';
import CardPhoto from '../../components/CardPhoto';

type AlbumPageParams = {
    id: string;
}

const AlbumPage = () => {

    const [album, setAlbum] = useState<Album>();
    const [photos, setPhotos] = useState<Photo[]>();
    const [loading, setLoading] = useState(true);
    const [loadingAlbum, setLoadingAlbum] = useState(true);
    const [loadingPhotos, setLoadingPhotos] = useState(true);

    const params = useParams<AlbumPageParams>();

    useEffect(() => {
        albumRepository.byId(Number(params.id)).then(setAlbum).finally(() => setLoadingAlbum(false));
        photoRepository.all(Number(params.id)).then(setPhotos).finally(() => setLoadingPhotos(false));
    }, [params.id]);

    useEffect(() => {
        if (!loadingAlbum && !loadingPhotos) {
            setLoading(false);
        }
    }, [loadingAlbum, loadingPhotos]);

    return !loading ? (
        <A.Container>
            <A.Header>
                <A.Title>{album?.title}</A.Title>
            </A.Header>
            <C.Content>
                {photos?.map(photo => (<CardPhoto key={photo.id} photo={photo} />))}
            </C.Content>
        </A.Container>
    ) : (<Loading />);
}

export default AlbumPage;