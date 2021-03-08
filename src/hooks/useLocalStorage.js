import {useEffect, useState} from 'react';

export default function useLocalStorage(initValue, key) {

    // function on getting value from LS
    const getValue = () => {
        if(typeof window === 'undefined') return initValue;

        try {
            const storageItem = window.localStorage.getItem(key);

            return storageItem ? JSON.parse(storageItem) : initValue;
        } catch (err) {
            console.error(`Error occurred on reading Local Storage key "${key}"`, err)
            
            return initValue;
        }
    };

    const [storedValue, setStoredValue] = useState(getValue);

    const setValue = (value) => {
        if(typeof window === 'undefined') console.log('Enviorement is not a client. Window object is not defined');
        
        try {
            // if value have been passed as function make sure call it and set newvalue
            const updatedValue = value instanceof Function ? value(storedValue) : value;

            window.localStorage.setItem(key, JSON.stringify(updatedValue))    

            //update state
            setStoredValue(updatedValue)

        } catch (err) {
            console.error(`Error occurred on setting Local Storage key "${key}"`, err)
        }
    } 

    // to get a stored value
    useEffect(() => {
        setStoredValue(getValue());
    }, []);

    return [storedValue, setValue];
}