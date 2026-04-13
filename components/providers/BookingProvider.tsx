"use client";

import React, { createContext, useContext, useState } from 'react';
import BookingModal from '@/components/BookingModal';

interface BookingContextType {
    openBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBookingModal = () => setIsOpen(true);
    const closeBookingModal = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{ openBookingModal }}>
            {children}
            <BookingModal isOpen={isOpen} onClose={closeBookingModal} />
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
}
