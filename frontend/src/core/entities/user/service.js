import { ApiWrapper } from '../../http/apiWrapper';
import Config from '../../config/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
    static async getUserDetails(token) {
        return this.sendRequest({
            url: `${Config.CONTROLLER_USER}`,
            method: ApiMethods.GET,
            token
        });
    }

}
debugger;