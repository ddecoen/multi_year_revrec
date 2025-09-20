class TermBasedSoftwareRevenueCalculator {
    constructor() {
        this.form = document.getElementById('revenueForm');
        this.resultsSection = document.getElementById('results');
        
        // Input elements
        this.contractPriceInput = document.getElementById('totalContractPrice');
        this.contractTermInput = document.getElementById('contractTerm');
        this.licenseAnnualSSPInput = document.getElementById('licenseAnnualSSP');
        this.supportAnnualSSPInput = document.getElementById('supportAnnualSSP');
        
        this.initializeEventListeners();
        this.updateCalculations();
    }

    initializeEventListeners() {
        // Input change events
        [this.contractPriceInput, this.contractTermInput, this.licenseAnnualSSPInput, this.supportAnnualSSPInput]
            .forEach(input => {
                input.addEventListener('input', () => this.updateCalculations());
            });
        
        // License type change
        document.querySelectorAll('input[name="licenseType"]').forEach(radio => {
            radio.addEventListener('change', () => this.handleLicenseTypeChange());
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
        // Reset to term-based example values
        this.contractPriceInput.value = 12000;
        this.contractTermInput.value = 3;
        this.licenseAnnualSSPInput.value = 2000;
        this.supportAnnualSSPInput.value = 1000;
        document.getElementById('termLicense').checked = true;
        this.handleLicenseTypeChange();
        this.updateCalculations();
    }
    
    handleLicenseTypeChange() {
        const selectedType = document.querySelector('input[name="licenseType"]:checked').value;
        const isTermBased = selectedType === 'term';
        
        // Update UI text based on license type
        document.getElementById('licenseRecognitionTiming').textContent = 
            isTermBased 
                ? 'Recognition: Over Time (ratably over contract term)'
                : 'Recognition: Point in Time (when license is transferred)';
                
        document.getElementById('licenseSummaryTiming').textContent = 
            isTermBased 
                ? 'Recognized Over Time'
                : 'Recognized at Point in Time';
                
        document.getElementById('complianceLicenseRecognition').textContent = 
            isTermBased 
                ? 'License: Over time (customer benefits throughout term)'
                : 'License: Point in time (when transferred and customer can benefit)';
                
        // Update card styling
        const licenseCard = document.querySelector('.license-card');
        if (isTermBased) {
            licenseCard.classList.remove('perpetual-license');
            licenseCard.classList.add('term-license');
        } else {
            licenseCard.classList.remove('term-license');
            licenseCard.classList.add('perpetual-license');
        }
    }

    updateCalculations() {
        const contractTerm = parseInt(this.contractTermInput.value) || 3;
        const licenseAnnualSSP = parseFloat(this.licenseAnnualSSPInput.value) || 2000;
        const supportAnnualSSP = parseFloat(this.supportAnnualSSPInput.value) || 1000;
        const contractPrice = parseFloat(this.contractPriceInput.value) || 12000;
        
        // Calculate total SSPs
        const totalLicenseSSP = licenseAnnualSSP * contractTerm;
        const totalSupportSSP = supportAnnualSSP * contractTerm;
        const totalSSP = totalLicenseSSP + totalSupportSSP;
        
        // Update SSP displays
        document.getElementById('licenseYears').textContent = contractTerm;
        document.getElementById('supportYears').textContent = contractTerm;
        document.getElementById('displayLicenseYears').textContent = contractTerm;
        document.getElementById('displaySupportYears').textContent = contractTerm;
        
        document.getElementById('totalLicenseSSP').textContent = this.formatCurrency(totalLicenseSSP);
        document.getElementById('totalSupportSSP').textContent = this.formatCurrency(totalSupportSSP);
        document.getElementById('displayTotalLicenseSSP').textContent = this.formatCurrency(totalLicenseSSP);
        document.getElementById('displayTotalSupportSSP').textContent = this.formatCurrency(totalSupportSSP);
        document.getElementById('totalSSP').textContent = this.formatCurrency(totalSSP);
        
        // Calculate allocation based on relative SSP
        if (totalSSP > 0) {
            const licenseAmount = (totalLicenseSSP / totalSSP) * contractPrice;
            const supportAmount = (totalSupportSSP / totalSSP) * contractPrice;
            
            const licensePercent = (totalLicenseSSP / totalSSP) * 100;
            const supportPercent = (totalSupportSSP / totalSSP) * 100;
            
            // Update formula displays
            document.getElementById('calcLicenseSSP').textContent = this.formatNumber(totalLicenseSSP);
            document.getElementById('calcSupportSSP').textContent = this.formatNumber(totalSupportSSP);
            document.getElementById('calcTotalSSP1').textContent = this.formatNumber(totalSSP);
            document.getElementById('calcTotalSSP2').textContent = this.formatNumber(totalSSP);
            document.getElementById('calcContractPrice1').textContent = this.formatNumber(contractPrice);
            document.getElementById('calcContractPrice2').textContent = this.formatNumber(contractPrice);
            
            // Update allocation results
            document.getElementById('licenseAmount').textContent = this.formatCurrency(licenseAmount);
            document.getElementById('supportAmount').textContent = this.formatCurrency(supportAmount);
            document.getElementById('licensePercent').textContent = `(${licensePercent.toFixed(2)}%)`;
            document.getElementById('supportPercent').textContent = `(${supportPercent.toFixed(2)}%)`;
            
            // Update compliance percentages
            document.getElementById('complianceLicense').textContent = licensePercent.toFixed(2) + '%';
            document.getElementById('complianceSupport').textContent = supportPercent.toFixed(2) + '%';
            
            // Store calculated values
            this.calculatedValues = {
                licenseAmount: licenseAmount,
                supportAmount: supportAmount,
                licensePercent: licensePercent,
                supportPercent: supportPercent,
                contractTerm: contractTerm
            };
        }
    }

    validateInputs() {
        const contractPrice = parseFloat(this.contractPriceInput.value);
        const contractTerm = parseInt(this.contractTermInput.value);
        const licenseAnnualSSP = parseFloat(this.licenseAnnualSSPInput.value);
        const supportAnnualSSP = parseFloat(this.supportAnnualSSPInput.value);
        
        if (!contractPrice || contractPrice <= 0) {
            throw new Error('Please enter a valid total contract price');
        }
        
        if (!contractTerm || contractTerm <= 0) {
            throw new Error('Please enter a valid contract term');
        }
        
        if (!licenseAnnualSSP || licenseAnnualSSP <= 0) {
            throw new Error('Please enter a valid annual License SSP');
        }
        
        if (!supportAnnualSSP || supportAnnualSSP <= 0) {
            throw new Error('Please enter a valid annual Support SSP');
        }
        
        return { contractPrice, contractTerm, licenseAnnualSSP, supportAnnualSSP };
    }

    calculateRevenue() {
        try {
            this.validateInputs();
            
            if (!this.calculatedValues) {
                throw new Error('Please ensure all calculations are complete');
            }
            
            const { licenseAmount, supportAmount, contractTerm } = this.calculatedValues;
            const licenseType = document.querySelector('input[name="licenseType"]:checked').value;
            
            // Generate revenue recognition schedule based on license type
            const schedule = this.generateRevenueSchedule(licenseAmount, supportAmount, contractTerm, licenseType);
            
            this.displayResults(licenseAmount, supportAmount, contractTerm, schedule, licenseType);
            
        } catch (error) {
            alert(error.message);
        }
    }

    generateRevenueSchedule(licenseAmount, supportAmount, contractTerm, licenseType) {
        const schedule = [];
        const annualSupportRevenue = supportAmount / contractTerm;
        let cumulativeRevenue = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            let yearLicenseRevenue = 0;
            
            if (licenseType === 'term') {
                // Term-based license: recognize ratably over contract term
                yearLicenseRevenue = licenseAmount / contractTerm;
            } else {
                // Perpetual license: recognize at point in time (Year 1 only)
                yearLicenseRevenue = year === 1 ? licenseAmount : 0;
            }
            
            const yearSupportRevenue = annualSupportRevenue;
            const totalYearRevenue = yearLicenseRevenue + yearSupportRevenue;
            cumulativeRevenue += totalYearRevenue;
            
            schedule.push({
                year: year,
                licenseRevenue: yearLicenseRevenue,
                supportRevenue: yearSupportRevenue,
                totalRevenue: totalYearRevenue,
                cumulativeRevenue: cumulativeRevenue
            });
        }
        
        return schedule;
    }

    displayResults(licenseAmount, supportAmount, contractTerm, schedule, licenseType) {
        // Update summary cards
        document.getElementById('finalLicenseAmount').textContent = this.formatCurrency(licenseAmount);
        document.getElementById('finalSupportAmount').textContent = this.formatCurrency(supportAmount);
        
        // Update license breakdown (only show if term-based)
        if (licenseType === 'term') {
            document.getElementById('licenseTotal').textContent = this.formatCurrency(licenseAmount);
            document.getElementById('licenseAnnual').textContent = this.formatCurrency(licenseAmount / contractTerm);
            document.getElementById('licenseMonthly').textContent = this.formatCurrency(licenseAmount / (contractTerm * 12));
        }
        
        // Update support breakdown
        document.getElementById('supportTotal').textContent = this.formatCurrency(supportAmount);
        document.getElementById('supportAnnual').textContent = this.formatCurrency(supportAmount / contractTerm);
        document.getElementById('supportMonthly').textContent = this.formatCurrency(supportAmount / (contractTerm * 12));
        
        // Update revenue schedule table
        const tableBody = document.getElementById('scheduleBody');
        tableBody.innerHTML = '';
        
        schedule.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><strong>Year ${item.year}</strong></td>
                <td class="currency">${this.formatCurrency(item.licenseRevenue)}</td>
                <td class="currency">${this.formatCurrency(item.supportRevenue)}</td>
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

// ASC 606 Term-Based vs Perpetual License Helper
class ASC606TermBasedHelper {
    static getComplianceInfo() {
        return {
            termBased: {
                step1: "Contract Identification: Term-based software license + support agreement",
                step2: "Performance Obligations: (1) Term License - over time, (2) Support - over time",
                step3: "Transaction Price: Total contract amount",
                step4: "SSP Allocation: Based on relative annual SSPs over contract term",
                step5: "Recognition: Both license and support ratably over contract term"
            },
            perpetual: {
                step1: "Contract Identification: Perpetual software license + support agreement", 
                step2: "Performance Obligations: (1) Perpetual License - point in time, (2) Support - over time",
                step3: "Transaction Price: Total contract amount",
                step4: "SSP Allocation: Based on relative standalone selling prices",
                step5: "Recognition: License at point in time, support ratably over term"
            }
        };
    }
    
    static getRevenuePattern(licenseType, licenseAmount, supportAmount, contractTerm) {
        if (licenseType === 'term') {
            // Even distribution for term-based
            const annualLicense = licenseAmount / contractTerm;
            const annualSupport = supportAmount / contractTerm;
            return {
                pattern: 'Even',
                yearlyTotal: annualLicense + annualSupport,
                description: 'Consistent revenue recognition each year'
            };
        } else {
            // Front-loaded for perpetual
            const annualSupport = supportAmount / contractTerm;
            return {
                pattern: 'Front-loaded',
                year1Total: licenseAmount + annualSupport,
                yearlySupport: annualSupport,
                description: 'Most revenue recognized in Year 1, then support only'
            };
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TermBasedSoftwareRevenueCalculator();
    
    // Add helpful validation and examples
    const sspInputs = ['licenseAnnualSSP', 'supportAnnualSSP'];
    sspInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('blur', () => {
            // Additional SSP validation could be added here
            console.log(`SSP updated: ${inputId}`);
        });
    });
    
    // Add example values helper
    console.log('Term-based Software Example:', {
        license: '$2,000/year × 3 years = $6,000 SSP',
        support: '$1,000/year × 3 years = $3,000 SSP',
        contract: '$12,000 total',
        allocation: 'License: 66.67%, Support: 33.33%'
    });
});