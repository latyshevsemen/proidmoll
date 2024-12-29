function singlePulse(p, s) {
    // Validate inputs
    if (typeof p !== 'number' || typeof s !== 'number') {
        throw new Error('Both parameters must be numbers');
    }
    
    // Create an array representing the pulse
    let pulseArray = [];
    for (let i = 0; i < p; i++) {
        pulseArray.push(s);
    }
    
    return pulseArray;
}

// Usage example
let pulse = singlePulse(5, 10); // Generates [10, 10, 10, 10, 10]
console.log(pulse);
