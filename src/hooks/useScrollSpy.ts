import { useEffect, useState } from 'react';
import type { SectionId } from '../types';

/**
 * Custom hook that uses the Intersection Observer API for scrollspy navigation.
 * Eliminates synchronous layout thrashing (getBoundingClientRect inside scroll events).
 */
export const useScrollSpy = (
  sectionIds: SectionId[],
  defaultSection: SectionId = 'profile'
): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

  useEffect(() => {
    // Top offset accounts for navbar; bottom offset triggers before element leaves
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
