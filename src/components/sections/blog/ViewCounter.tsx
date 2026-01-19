'use client';

import { useEffect } from 'react';

export function ViewCounter({ slug }: { slug: string }) {
    useEffect(() => {
        const incrementView = async () => {
            // Check if already viewed in this session to prevent spam
            if (sessionStorage.getItem(`viewed-${slug}`)) return;

            try {
                await fetch(`/api/blog/views/${slug}`, {
                    method: 'POST',
                });
                sessionStorage.setItem(`viewed-${slug}`, 'true');
            } catch (error) {
                console.error('Failed to increment view count', error);
            }
        };

        incrementView();
    }, [slug]);

    return null; // Invisible component
}
