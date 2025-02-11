const groupElementsByFontSize = (elements) => {
    return elements.reduce((acc, el) => {
        const fontSize = Math.round(el.fontSize);
        if (!acc[fontSize]) {
            acc[fontSize] = [];
        }
        acc[fontSize].push(el);
        return acc;
    }, {});
};

const groupElementsByClasses = (elements) => {
    return elements.reduce((acc, el) => {
        const classKey = el.classList || 'no-classes';
        if (!acc[classKey]) {
            acc[classKey] = {
                count: 0,
                fontSize: el.fontSize,
                elementTypes: new Set(),
                elements: []
            };
        }
        
        acc[classKey].count++;
        acc[classKey].elementTypes.add(el.element);
        if (acc[classKey].elements.length < 5) {
            acc[classKey].elements.push({
                text: el.text,
                element: el.element
            });
        }
        return acc;
    }, {});
};

const getClassTotals = (smallElements) => {
    // Aggregate counts for all classes across all font sizes
    return smallElements.reduce((acc, el) => {
        const classKey = el.classList || 'no-classes';
        acc[classKey] = (acc[classKey] || 0) + 1;
        return acc;
    }, {});
};

const generateSummarySection = (elements, compliantElements, smallElements, minFontSize) => {
    const failingPercentage = ((smallElements.length / elements.length) * 100).toFixed(1);
    const passingPercentage = ((compliantElements.length / elements.length) * 100).toFixed(1);
    
    let summary = `ACCESSIBILITY REPORT SUMMARY\n`;
    summary += `==========================\n\n`;
    summary += `Minimum required font size: ${Math.round(minFontSize)}px\n`;
    summary += `Total elements checked: ${elements.length}\n`;
    summary += `Elements passing: ${compliantElements.length} (${passingPercentage}%)\n`;
    summary += `Elements failing: ${smallElements.length} (${failingPercentage}%)\n\n`;

    // Get total counts by class
    const classTotals = getClassTotals(smallElements);
    const sortedClasses = Object.entries(classTotals)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);  // Show top 5 most frequent offenders

    summary += `Top 5 CSS Classes with Small Font Sizes:\n`;
    summary += `-------------------------------------\n`;
    sortedClasses.forEach(([className, count], index) => {
        const percentage = ((count / elements.length) * 100).toFixed(1);
        summary += `${index + 1}. ${className}: ${count} elements (${percentage}% of total)\n`;
    });
    summary += '\n';

    return summary;
};

const generateAccessibilityReport = (elements, compliantElements, smallElements, minFontSize, url) => {
    let report = `FONT SIZE ACCESSIBILITY REPORT\n`;
    report += `============================\n`;
    report += `URL: ${url}\n`;
    report += `Time: ${new Date().toISOString()}\n\n`;

    // Add summary section with overall statistics and top offenders
    report += generateSummarySection(elements, compliantElements, smallElements, minFontSize);

    // Get total counts by class for sorting
    const classTotals = getClassTotals(smallElements);
    
    report += `DETAILED ANALYSIS BY CSS CLASS\n`;
    report += `============================\n`;
    
    // Sort classes by total count across all font sizes
    const sortedClasses = Object.entries(classTotals)
        .sort(([, a], [, b]) => b - a);

    sortedClasses.forEach(([className, totalCount]) => {
        const percentage = ((totalCount / elements.length) * 100).toFixed(1);
        report += `\nClass: ${className}\n`;
        report += `Total Count: ${totalCount} elements (${percentage}% of total)\n`;
        report += `${'='.repeat(40)}\n`;

        // Group elements with this class by font size
        const elementsWithClass = smallElements.filter(el => 
            (el.classList || 'no-classes') === className);
        const fontSizeGroups = groupElementsByFontSize(elementsWithClass);
        
        // Sort font sizes from smallest to largest
        const fontSizes = Object.keys(fontSizeGroups)
            .map(Number)
            .sort((a, b) => a - b);

        fontSizes.forEach(fontSize => {
            const elements = fontSizeGroups[fontSize];
            const fontSizePercentage = ((elements.length / totalCount) * 100).toFixed(1);
            
            report += `\nFont Size ${fontSize}px: ${elements.length} elements (${fontSizePercentage}% of class)\n`;
            report += `Element types: ${Array.from(new Set(elements.map(el => el.element))).join(', ')}\n`;
            report += 'Examples:\n';
            
            // Show up to 3 examples for each font size
            elements.slice(0, 3).forEach(example => {
                report += `  - <${example.element.toLowerCase()}>: "${example.text.substring(0, 50)}${example.text.length > 50 ? '...' : ''}"\n`;
            });
        });
        report += '\n';
    });

    return report;
};

module.exports = {
    generateAccessibilityReport,
    groupElementsByFontSize,
    groupElementsByClasses,
    generateSummarySection
};