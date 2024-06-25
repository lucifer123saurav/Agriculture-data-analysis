// helpers.js

export const processDataForTable1 = (data) => {
    const yearlyData = {};
  
    data.forEach((item) => {
      const year = item.Year.split(',')[1].trim();
      const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"]) || 0;
  
      if (!yearlyData[year]) {
        yearlyData[year] = {};
      }
  
      if (
        !yearlyData[year].maxProduction ||
        production > yearlyData[year].maxProduction.production
      ) {
        yearlyData[year].maxProduction = { crop: item["Crop Name"], production };
      }
  
      if (
        !yearlyData[year].minProduction ||
        production < yearlyData[year].minProduction.production
      ) {
        yearlyData[year].minProduction = { crop: item["Crop Name"], production };
      }
    });
  
    return Object.keys(yearlyData).map((year) => ({
      year,
      maxCrop: yearlyData[year].maxProduction.crop,
      minCrop: yearlyData[year].minProduction.crop,
    }));
  };
  
  export const processDataForTable2 = (data) => {
    const cropData = {};
  
    data.forEach((item) => {
      const production = parseFloat(item["Crop Production (UOM:t(Tonnes))"]) || 0;
      const area = parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;
  
      if (!cropData[item["Crop Name"]]) {
        cropData[item["Crop Name"]] = { totalProduction: 0, totalArea: 0, count: 0 };
      }
  
      cropData[item["Crop Name"]].totalProduction += production;
      cropData[item["Crop Name"]].totalArea += area;
      cropData[item["Crop Name"]].count += 1;
    });
  
    return Object.keys(cropData).map((crop) => ({
      crop,
      averageYield: ((cropData[crop].totalProduction / cropData[crop].count) || 0).toFixed(2),
      averageArea: ((cropData[crop].totalArea / cropData[crop].count) || 0).toFixed(2),
    }));
  };
  