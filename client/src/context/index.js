import { createContext } from 'react';

export const UserContext = createContext(null);
export const PitchContext = createContext({
                                            "title": "",
                                            "description": "",
                                            "location": []
                                          });
export const locationContext = createContext([]);