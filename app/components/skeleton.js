// Skeleton.js
import React from 'react';

const skeletonStyle = {
    backgroundColor: '#ddd',
    borderRadius: '4px',
    margin: '8px 0',
    height: '25px',
    width: '50%'
};

const Skeleton = () => (
    <div>
        <h2>Planet Information</h2>
        <div style={skeletonStyle}></div>
        <div style={{ ...skeletonStyle, width: '30%' }}></div>

        <h2>Weather Information</h2>
        <div style={skeletonStyle}></div>
        <div style={{ ...skeletonStyle, width: '30%' }}></div>
    </div>
);

export default Skeleton;
