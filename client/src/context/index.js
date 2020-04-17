import { createContext } from 'react';

export const UserContext = createContext(null);
export const PitchContext = createContext({
                                            "title": "Testing",
                                            "Description": "",
                                            "location": []
                                          });
export const locationContext = createContext([]);