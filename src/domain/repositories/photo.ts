
import { PhotoDataSource, instance as PhotoDataSourceInstance } from "../datasources/photo";

class PhotoRepository {

    private datasource: PhotoDataSource;

    private resorce = "/albums";

    constructor(datasource: PhotoDataSource) {
        this.datasource = datasource;
    }

    public async all(id: number) {
        return await this.datasource.all(id);
    }

    public async byId(id: number) {
        return await this.datasource.byId(id);
    }

}

export const instance = (new PhotoRepository(PhotoDataSourceInstance));