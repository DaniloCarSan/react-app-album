import { AxiosInstance } from "axios";
import api from "./api";
import Photo from "../entities/photo";
import { AlbumDataSource } from "./album";

export class PhotoDataSource {

    private api: AxiosInstance;

    static resource = `photos`;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    public async all(id: number): Promise<Photo[]> {
        const response = await this.api.get(`/${AlbumDataSource.resource}/${id}/${PhotoDataSource.resource}`)
        return response.data;
    }

    public async byId(id: number): Promise<Photo> {
        const response = await this.api.get(`/${PhotoDataSource.resource}/${id}`)
        return response.data;
    }

}

export const instance = new PhotoDataSource(api);