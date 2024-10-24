import Client from "@/Client";

/**
 * BaseService class that should be inherited from all API services.
 */
export abstract class BaseService {
    readonly client: Client;

    constructor(client: Client) {
        this.client = client;
    }
}
