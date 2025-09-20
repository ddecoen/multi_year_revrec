class MultiObligationRevenueCalculator {
    constructor() {
        this.form = document.getElementById('revenueForm');
        this.resultsSection = document.getElementById('results');
        
        // SSP inputs
        this.installationSSPInput = document.getElementById('installationSSP');
        this.licenseSSPInput = document.getElementById('licenseSSP');
        this.supportSSPInput = document.getElementById('supportSSP');
        
        this.initializeEventListeners();
        this.updateSSPCalculations();
    }

    initializeEventListeners() {
        // SSP input changes
        [this.installationSSPInput, this.licenseSSPInput, this.supportSSPInput].forEach(input => {
            input.addEventListener('input', () => this.updateSSPCalculations());
        });
        
        // Contract price changes
        document.getElementById('totalContractPrice').addEventListener('input', () => {
            this.updateAllocationAmounts();
        });
        
        // Calculate allocation button
        document.getElementById('calculateAllocation').addEventListener('click', () => {
            this.updateSSPCalculations();
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
        // Reset to default SSP values from the example
        this.installationSSPInput.value = 150000;
        this.licenseSSPInput.value = 600000;
        this.supportSSPInput.value = 300000;
        document.getElementById('contractTerm').value = 3;
        this.updateSSPCalculations();
    }

    updateSSPCalculations() {
        const installationSSP = parseFloat(this.installationSSPInput.value) || 0;
        const licenseSSP = parseFloat(this.licenseSSPInput.value) || 0;
        const supportSSP = parseFloat(this.supportSSPInput.value) || 0;
        
        const totalSSP = installationSSP + licenseSSP + supportSSP;
        
        // Update total SSP display
        document.getElementById('totalSSP').textContent = this.formatCurrency(totalSSP);
        
        if (totalSSP > 0) {
            // Calculate allocation percentages
            const installationPercent = (installationSSP / totalSSP) * 100;
            const licensePercent = (licenseSSP / totalSSP) * 100;
            const supportPercent = (supportSSP / totalSSP) * 100;
            
            // Update percentage displays
            document.getElementById('installationPercent').textContent = installationPercent.toFixed(2) + '%';
            document.getElementById('licensePercent').textContent = licensePercent.toFixed(2) + '%';
            document.getElementById('supportPercent').textContent = supportPercent.toFixed(2) + '%';
            
            // Update compliance section
            document.getElementById('complianceInstallation').textContent = installationPercent.toFixed(2) + '%';
            document.getElementById('complianceLicense').textContent = licensePercent.toFixed(2) + '%';
            document.getElementById('complianceSupport').textContent = supportPercent.toFixed(2) + '%';
            
            // Store percentages for calculations
            this.allocationPercentages = {
                installation: installationPercent,
                license: licensePercent,
                support: supportPercent
            };
        }
        
        this.updateAllocationAmounts();
    }
    
    updateAllocationAmounts() {
        const contractPrice = parseFloat(document.getElementById('totalContractPrice').value) || 0;
        
        if (contractPrice > 0 && this.allocationPercentages) {
            const installationAmount = contractPrice * (this.allocationPercentages.installation / 100);
            const licenseAmount = contractPrice * (this.allocationPercentages.license / 100);
            const supportAmount = contractPrice * (this.allocationPercentages.support / 100);
            
            document.getElementById('installationAmount').textContent = this.formatCurrency(installationAmount);
            document.getElementById('licenseAmount').textContent = this.formatCurrency(licenseAmount);
            document.getElementById('supportAmount').textContent = this.formatCurrency(supportAmount);
        }
    }

    validateInputs() {
        const contractPrice = parseFloat(document.getElementById('totalContractPrice').value);
        const contractTerm = parseInt(document.getElementById('contractTerm').value);
        const installationSSP = parseFloat(this.installationSSPInput.value);
        const licenseSSP = parseFloat(this.licenseSSPInput.value);
        const supportSSP = parseFloat(this.supportSSPInput.value);
        
        // Basic validation
        if (!contractPrice || contractPrice <= 0) {
            throw new Error('Please enter a valid total contract price');
        }
        
        if (!contractTerm || contractTerm <= 0) {
            throw new Error('Please enter a valid contract term');
        }
        
        if (!installationSSP || installationSSP <= 0) {
            throw new Error('Please enter a valid Installation SSP');
        }
        
        if (!licenseSSP || licenseSSP <= 0) {
            throw new Error('Please enter a valid License SSP');
        }
        
        if (!supportSSP || supportSSP <= 0) {
            throw new Error('Please enter a valid Support SSP');
        }
        
        return { contractPrice, contractTerm, installationSSP, licenseSSP, supportSSP };
    }

    calculateRevenue() {
        try {
            const { contractPrice, contractTerm } = this.validateInputs();
            
            // Calculate allocated amounts based on SSP percentages
            const installationAmount = contractPrice * (this.allocationPercentages.installation / 100);
            const licenseAmount = contractPrice * (this.allocationPercentages.license / 100);
            const supportAmount = contractPrice * (this.allocationPercentages.support / 100);
            
            // Generate revenue recognition schedule
            const schedule = this.generateRevenueSchedule(
                installationAmount, 
                licenseAmount, 
                supportAmount, 
                contractTerm
            );
            
            this.displayResults(installationAmount, licenseAmount, supportAmount, contractTerm, schedule);
            
        } catch (error) {
            alert(error.message);
        }
    }

    generateRevenueSchedule(installationAmount, licenseAmount, supportAmount, contractTerm) {
        const schedule = [];
        const annualSupportRevenue = supportAmount / contractTerm;
        let cumulativeRevenue = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            // Installation and License only recognized in Year 1
            const installationRevenue = year === 1 ? installationAmount : 0;
            const yearLicenseRevenue = year === 1 ? licenseAmount : 0;
            const yearSupportRevenue = annualSupportRevenue;
            
            const totalYearRevenue = installationRevenue + yearLicenseRevenue + yearSupportRevenue;
            cumulativeRevenue += totalYearRevenue;
            
            schedule.push({
                year: year,
                installationRevenue: installationRevenue,
                licenseRevenue: yearLicenseRevenue,
                supportRevenue: yearSupportRevenue,
                totalRevenue: totalYearRevenue,
                cumulativeRevenue: cumulativeRevenue
            });
        }
        
        return schedule;
    }

    displayResults(installationAmount, licenseAmount, supportAmount, contractTerm, schedule) {
        // Update summary cards
        document.getElementById('finalInstallationAmount').textContent = this.formatCurrency(installationAmount);
        document.getElementById('finalLicenseAmount').textContent = this.formatCurrency(licenseAmount);
        document.getElementById('finalSupportAmount').textContent = this.formatCurrency(supportAmount);
        
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
                <td class="currency">${this.formatCurrency(item.installationRevenue)}</td>
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
}

// ASC 606 Three-Obligation Compliance Helper
class ASC606ThreeObligationHelper {
    static getComplianceInfo() {
        return {
            step1: "Contract Identification: Software implementation + license + support services",
            step2: "Performance Obligations: (1) Installation - one-time service, (2) License - point in time, (3) Support - over time",
            step3: "Transaction Price: Total contract amount",
            step4: "SSP Allocation: Based on relative standalone selling prices of each obligation",
            step5: "Recognition: Installation & License in Year 1, Support ratably over contract term"
        };
    }
    
    static validateSSPAllocation(installationSSP, licenseSSP, supportSSP) {
        const total = installationSSP + licenseSSP + supportSSP;
        const installationPercent = (installationSSP / total) * 100;
        const licensePercent = (licenseSSP / total) * 100;
        const supportPercent = (supportSSP / total) * 100;
        
        // Check if it matches the common pattern from the example
        const isExamplePattern = (
            Math.abs(installationPercent - 14.29) < 0.1 &&
            Math.abs(licensePercent - 57.14) < 0.1 &&
            Math.abs(supportPercent - 28.57) < 0.1
        );
        
        return {
            isValid: total > 0,
            matchesExample: isExamplePattern,
            percentages: {
                installation: installationPercent,
                license: licensePercent,
                support: supportPercent
            }
        };
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MultiObligationRevenueCalculator();
    
    // Add helpful tooltips or validation messages
    const sspInputs = ['installationSSP', 'licenseSSP', 'supportSSP'];
    sspInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        input.addEventListener('blur', () => {
            const calculator = new MultiObligationRevenueCalculator();
            // Additional validation could be added here
        });
    });
});