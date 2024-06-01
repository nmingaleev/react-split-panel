import { useRef, useEffect, useState } from 'react';

import './SplitPanel.css';

export const SplitPanel = ({ sections }) => {
    const [remainingSections] = useState(() => {
        const x = [...sections];

        x.shift();
        
        return x;
    });

    const leftSectionRef = useRef(null);
    const isMouseDown = useRef(false);

    const handleMouseDown = () => {
        isMouseDown.current = true;
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isMouseDown.current) return;

            const leftSectionEl = leftSectionRef.current;
            if (!leftSectionEl) return;

            const styles = window.getComputedStyle(leftSectionEl);
            let flexBasis = styles.getPropertyValue('flex-basis');
            flexBasis = Number.parseFloat(flexBasis);

            leftSectionEl.style['flex-basis'] = `${flexBasis + e.movementX}px`;
        }

        const handleMouseUp = () => {
            isMouseDown.current = false;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, []);

    return (
        <div className='split-panel horizontal'>
            <div ref={leftSectionRef} className='left'>{sections[0]}</div>

            {remainingSections.length !== 0 && (
                <>
                    <div className='separator' onMouseDown={handleMouseDown}></div>

                    <div className='right'><SplitPanel sections={remainingSections} /></div>
                </>
            )}
        </div>
    )
}