import {useRef} from 'react';
import uniqid from 'uniqid';

export const useUniqueIds = (count: number) => useRef([...new Array(count)].map(() => uniqid())).current;
