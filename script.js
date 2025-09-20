class LicensePCSRevenueCalculator {
    constructor() {
        this.form = document.getElementById('revenueForm');
        this.resultsSection = document.getElementById('results');
        
        // Input elements
        this.contractPriceInput = document.getElementById('totalContractPrice');
        this.contractTermInput = document.getElementById('contractTerm');
        this.licenseSSPInput = document.getElementById('licenseSSP');
        this.pcsAnnualSSPInput = document.getElementById('pcsAnnualSSP');
        
        this.initializeEventListeners();
        this.updateCalculations();
    }

    initializeEventListeners() {
        // Input change events
        [this.contractPriceInput, this.contractTermInput, this.licenseSSPInput, this.pcsAnnualSSPInput]
            .forEach(input => {
                input.addEventListener('input', () => this.updateCalculations());
            });
        
        // Calculate allocation button
        document.getElementById('calculateAllocation').addEventListener('click', () => {
            this.updateCalculations();
        });

        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateRevenue();
        });

        // Form reset
        this.form.addEventListener('reset', () => {
            setTimeout(() => {
                this.resultsSection.style.display = 'none';
                this.resetToDefaults();
            }, 100);
        });
    }
    
    resetToDefaults() {
        // Reset to example values from ASC 606 guidelines
        this.contractPriceInput.value = 12000;
        this.contractTermInput.value = 5;
        this.licenseSSPInput.value = 8000;
        this.pcsAnnualSSPInput.value = 1000;
        this.updateCalculations();
    }

    updateCalculations() {
        const contractTerm = parseInt(this.contractTermInput.value) || 5;
        const licenseSSP = parseFloat(this.licenseSSPInput.value) || 8000;
        const pcsAnnualSSP = parseFloat(this.pcsAnnualSSPInput.value) || 1000;
        const contractPrice = parseFloat(this.contractPriceInput.value) || 12000;
        
        // Calculate total PCS SSP
        const totalPcsSSP = pcsAnnualSSP * contractTerm;
        const totalSSP = licenseSSP + totalPcsSSP;
        
        // Update PCS SSP displays
        document.getElementById('pcsYears').textContent = contractTerm;
        document.getElementById('totalPcsSSP').textContent = this.formatCurrency(totalPcsSSP);
        document.getElementById('displayPcsYears').textContent = contractTerm;
        document.getElementById('displayTotalPcsSSP').textContent = this.formatCurrency(totalPcsSSP);
        document.getElementById('pcsTermDisplay').textContent = contractTerm;
        
        // Update SSP breakdown
        document.getElementById('displayLicenseSSP').textContent = this.formatCurrency(licenseSSP);
        document.getElementById('totalSSP').textContent = this.formatCurrency(totalSSP);
        
        // Calculate allocation based on relative SSP (ASC 606 method)
        if (totalSSP > 0) {
            const licenseAmount = (licenseSSP / totalSSP) * contractPrice;
            const pcsAmount = (totalPcsSSP / totalSSP) * contractPrice;
            
            const licensePercent = (licenseSSP / totalSSP) * 100;
            const pcsPercent = (totalPcsSSP / totalSSP) * 100;
            
            // Update formula displays
            document.getElementById('calcLicenseSSP').textContent = this.formatNumber(licenseSSP);
            document.getElementById('calcPcsSSP').textContent = this.formatNumber(totalPcsSSP);
            document.getElementById('calcTotalSSP1').textContent = this.formatNumber(totalSSP);
            document.getElementById('calcTotalSSP2').textContent = this.formatNumber(totalSSP);
            document.getElementById('calcContractPrice1').textContent = this.formatNumber(contractPrice);
            document.getElementById('calcContractPrice2').textContent = this.formatNumber(contractPrice);
            
            // Update allocation results
            document.getElementById('licenseAmount').textContent = this.formatCurrency(licenseAmount);
            document.getElementById('pcsAmount').textContent = this.formatCurrency(pcsAmount);
            document.getElementById('licensePercent').textContent = `(${licensePercent.toFixed(2)}%)`;
            document.getElementById('pcsPercent').textContent = `(${pcsPercent.toFixed(2)}%)`;
            
            // Update compliance percentages
            document.getElementById('complianceLicense').textContent = licensePercent.toFixed(2) + '%';
            document.getElementById('compliancePcs').textContent = pcsPercent.toFixed(2) + '%';
            
            // Store calculated values
            this.calculatedValues = {
                licenseAmount: licenseAmount,
                pcsAmount: pcsAmount,
                licensePercent: licensePercent,
                pcsPercent: pcsPercent,
                contractTerm: contractTerm
            };
        }
    }

    validateInputs() {
        const contractPrice = parseFloat(this.contractPriceInput.value);
        const contractTerm = parseInt(this.contractTermInput.value);
        const licenseSSP = parseFloat(this.licenseSSPInput.value);
        const pcsAnnualSSP = parseFloat(this.pcsAnnualSSPInput.value);
        
        if (!contractPrice || contractPrice <= 0) {
            throw new Error('Please enter a valid total contract price');
        }
        
        if (!contractTerm || contractTerm <= 0) {
            throw new Error('Please enter a valid PCS term');
        }
        
        if (!licenseSSP || licenseSSP <= 0) {
            throw new Error('Please enter a valid License SSP');
        }
        
        if (!pcsAnnualSSP || pcsAnnualSSP <= 0) {
            throw new Error('Please enter a valid annual PCS SSP');
        }
        
        return { contractPrice, contractTerm, licenseSSP, pcsAnnualSSP };
    }

    calculateRevenue() {
        try {
            this.validateInputs();
            
            if (!this.calculatedValues) {
                throw new Error('Please ensure all calculations are complete');
            }
            
            const { licenseAmount, pcsAmount, contractTerm } = this.calculatedValues;
            
            // Generate revenue recognition schedule
            const schedule = this.generateRevenueSchedule(licenseAmount, pcsAmount, contractTerm);
            
            this.displayResults(licenseAmount, pcsAmount, contractTerm, schedule);
            
        } catch (error) {
            alert(error.message);
        }
    }

    generateRevenueSchedule(licenseAmount, pcsAmount, contractTerm) {
        const schedule = [];
        const annualPcsRevenue = pcsAmount / contractTerm;
        let cumulativeRevenue = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            // License revenue only recognized in Year 1 (point in time)
            const yearLicenseRevenue = year === 1 ? licenseAmount : 0;
            const yearPcsRevenue = annualPcsRevenue;
            
            const totalYearRevenue = yearLicenseRevenue + yearPcsRevenue;
            cumulativeRevenue += totalYearRevenue;
            
            schedule.push({
                year: year,
                licenseRevenue: yearLicenseRevenue,
                pcsRevenue: yearPcsRevenue,
                totalRevenue: totalYearRevenue,
                cumulativeRevenue: cumulativeRevenue
            });
        }
        
        return schedule;
    }

    displayResults(licenseAmount, pcsAmount, contractTerm, schedule) {
        // Update summary cards
        document.getElementById('finalLicenseAmount').textContent = this.formatCurrency(licenseAmount);
        document.getElementById('finalPcsAmount').textContent = this.formatCurrency(pcsAmount);
        
        // Update PCS breakdown
        document.getElementById('pcsTotal').textContent = this.formatCurrency(pcsAmount);
        document.getElementById('pcsAnnual').textContent = this.formatCurrency(pcsAmount / contractTerm);
        document.getElementById('pcsMonthly').textContent = this.formatCurrency(pcsAmount / (contractTerm * 12));
        
        // Update revenue schedule table
        const tableBody = document.getElementById('scheduleBody');
        tableBody.innerHTML = '';
        
        schedule.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><strong>Year ${item.year}</strong></td>
                <td class="currency">${this.formatCurrency(item.licenseRevenue)}</td>
                <td class="currency">${this.formatCurrency(item.pcsRevenue)}</td>
                <td class="currency total-revenue">${this.formatCurrency(item.totalRevenue)}</td>
                <td class="currency cumulative">${this.formatCurrency(item.cumulativeRevenue)}</td>
            `;
        });
        
        // Show results section
        this.resultsSection.style.display = 'block';
        this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
    
    formatNumber(amount) {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// ASC 606 License + PCS Compliance Helper
class ASC606LicensePCSHelper {
    static getComplianceInfo() {
        return {
            step1: "Contract Identification: Software license + post-contract support agreement",
            step2: "Performance Obligations: (1) Software License - point in time, (2) PCS - over time",
            step3: "Transaction Price: Total contract amount",
            step4: "SSP Allocation: Based on relative standalone selling prices (license + multi-year PCS)",
            step5: "Recognition: License at point in time, PCS ratably over contract term"
        };
    }
    
    static validateSSPMethod(licenseSSP, pcsAnnualSSP, contractTerm, contractPrice) {
        const totalPcsSSP = pcsAnnualSSP * contractTerm;
        const totalSSP = licenseSSP + totalPcsSSP;
        const licensePercent = (licenseSSP / totalSSP) * 100;
        const pcsPercent = (totalPcsSSP / totalSSP) * 100;
        
        // Check if it matches the common ASC 606 example pattern
        const isExamplePattern = (
            licenseSSP === 8000 &&
            pcsAnnualSSP === 1000 &&
            contractTerm === 5 &&
            contractPrice === 12000
        );
        
        return {
            isValid: totalSSP > 0,
            matchesExample: isExamplePattern,
            allocation: {
                licenseAmount: (licenseSSP / totalSSP) * contractPrice,
                pcsAmount: (totalPcsSSP / totalSSP) * contractPrice
            },
            percentages: {
                license: licensePercent,
                pcs: pcsPercent
            }
        };
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LicensePCSRevenueCalculator();
    
    // Add helpful validation
    const sspInputs = ['licenseSSP', 'pcsAnnualSSP'];
    sspInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('blur', () => {
            // Additional SSP validation could be added here
            console.log(`SSP updated: ${inputId}`);
        });
    });
});