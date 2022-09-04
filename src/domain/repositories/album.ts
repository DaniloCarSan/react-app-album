
import { AlbumDataSource, instance as AlbumDataSourceInstance } from "../datasources/album";

class AlbumRepository {

    private datasource: AlbumDataSource;

    private resorce = "/albums";

    constructor(datasource: AlbumDataSource) {
        this.datasource = datasource;
    }

    public async getAllAlbums() {
        return await this.datasource.getAllAlbums();
    }

}

export const instance = (new AlbumRepository(AlbumDataSourceInstance));