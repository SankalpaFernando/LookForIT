import {atom} from 'recoil';

export const bookState = atom({
    key: 'books',
    default: []
});

export const loadingState = atom({
    key: 'loading',
    default: false
});