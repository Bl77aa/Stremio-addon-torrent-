const { serve } = require('stremio-addon-sdk');

const addon = {
    id: 'baixa-filmes-torrent',
    version: '1.0.0',
    name: 'Baixa Filmes Torrent',
    resources: ['stream'],
    types: ['movie'],
    idPrefixes: ['tt'],
    
    getStream: async ({ id }) => {
        if (id === 'carros1') {
            return [
                {
                    title: 'Carros 1 (2006)',
                    url: 'magnet:?xt=urn:btih:4fb7c82d0f3e8f7a1c790a5296de8af2be41240b&dn=Carros+%282006%29+BDRip+1080p+Dublado+JohnL&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337',
                    type: 'torrent'
                }
            ];
        } else if (id === 'carros2') {
            return [
                {
                    title: 'Carros 2 (2011)',
                    url: 'magnet:?xt=urn:btih:33671e62c4afcfcb413246f8010aeb497c2e6e94&dn=Carros+2+%282011%29+BDRip+1080p+Dublado+JohnL&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Fopen.demonii.com%3A1337',
                    type: 'torrent'
                }
            ];
        } else if (id === 'carros3') {
            return [
                {
                    title: 'Carros 3 (2017)',
                    url: 'magnet:?xt=urn:btih:7d98f5c14a3a4c9a26f15c8e6797dd6ae20e44e3&dn=Carros%203%202017%20%5bBluRay%5d%20(1080p)%20WWW.BLUDV.COM',
                    type: 'torrent'
                }
            ];
        }
        return [];
    }
};

serve(addon, { port: 7000 });