// declare var global: any;
// global.window = global;

import { Configuration, AccountApi, ProduitApi, EntreeSortieApi } from "./fetch";

export const globalErrorHandler = console.error.bind(console);

export let accessToken: string | undefined;
export const configuration = new Configuration({
    basePath: 'https://api.stock.ql6625.fr/api',
    middleware: [{
        async pre(context) {
            if (context.url.indexOf('/Accounts/login') > -1) {
                return context;
            }
            return {
                ...context,
                init: {
                    ...context.init,
                    headers: {
                        ...context.init.headers,
                        'X-Access-Token': accessToken!
                    }
                }
            }
        }
    }]
});

export const accountApi = new AccountApi(configuration);
export const produitApi = new ProduitApi(configuration);
export const entreeSortieApi = new EntreeSortieApi(configuration);

