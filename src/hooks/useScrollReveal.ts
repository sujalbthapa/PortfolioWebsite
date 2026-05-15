import { useEffect } from 'react';

/**
 * Custom hook to manage entrance animations on scroll.
 * Uses the Intersection Observer API to detect when elements with the 'reveal' class
 * enter the viewport and applies the 'active' class to trigger CSS transitions.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Configuration for the observer
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset the trigger point slightly
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'active' class to trigger CSS animation
          entry.target.classList.add('active');
          // Once revealed, we can stop observing this specific element
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements tagged for reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup function to avoid memory leaks
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
