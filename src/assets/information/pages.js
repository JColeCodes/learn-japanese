import Writing from '../../pages/Writing';
import Locations from '../../pages/Locations';

import Hiragana from '../../pages/Writing/Hiragana';
import Katakana from '../../pages/Writing/Katakana';

import Osaka from '../../pages/Locations/Osaka';

export const pages = {
    writing: {
        path: '/writing',
        title: 'Writing',
        Element: Writing,
        pages: [
            {
                path: '/writing/hiragana',
                eng_title: 'Hiragana',
                kanji_title: '平仮名',
                ja_title: 'ひらがな',
                Element: Hiragana
            },
            {
                path: '/writing/katakana',
                eng_title: 'Katakana',
                kanji_title: '片仮名',
                ja_title: 'カタカナ',
                Element: Katakana
            }
        ]
    },
    // phrases: {
    //     path: '/phrases',
    //     title: 'Phrases',
    //     pages: []
    // },
    // numbers: {
    //     path: '/numbers',
    //     title: 'Numbers',
    //     pages: [
    //         {
    //             path: '/numbers',
    //             eng_title: 'Numbers',
    //             kanji_title: '数字'
    //         },
    //         {
    //             path: '/numbers/counting',
    //             eng_title: 'Counting',
    //             ja_title: 'カウント'
    //         },
    //     ]
    // },
    // food: {
    //     path: '/food',
    //     title: 'Food',
    //     pages: []
    // },
    // colors: {
    //     path: '/color',
    //     title: 'Color',
    //     pages: []
    // },
    // animals: {
    //     path: '/animals',
    //     title: 'Animals',
    //     pages: []
    // },
    locations: {
        path: '/locations',
        title: 'Locations',
        Element: Locations,
        pages: [
            {
                path: '/locations/osaka',
                eng_title: 'Osaka',
                kanji_title: '大阪市',
                Element: Osaka
            }
        ]
    }
};