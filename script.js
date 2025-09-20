class LicenseSupportRevenueCalculator {
    constructor() {
        this.form = document.getElementById('revenueForm');
        this.resultsSection = document.getElementById('results');
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Allocation percentage changes
        document.getElementById('licenseAllocation').addEventListener('input', () => {
            this.updateAllocationTotal();
        });
        
        document.getElementById('supportAllocation').addEventListener('input', () => {
            this.updateAllocationTotal();
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
                this.resetAllocationPercentages();
            }, 100);
        });

        // Initialize allocation total
        this.updateAllocationTotal();
    }

    resetAllocationPercentages() {
        document.getElementById('licenseAllocation').value = 85;
        document.getElementById('supportAllocation').value = 15;
        this.updateAllocationTotal();
    }

    updateAllocationTotal() {
        const licensePercent = parseFloat(document.getElementById('licenseAllocation').value) || 0;
        const supportPercent = parseFloat(document.getElementById('supportAllocation').value) || 0;
        const total = licensePercent + supportPercent;
        
        const totalElement = document.getElementById('totalAllocation');
        totalElement.textContent = `${total}%`;
        
        // Color coding for validation
        if (total === 100) {
            totalElement.style.color = '#27ae60';
        } else {
            totalElement.style.color = '#e74c3c';
        }
    }

    validateInputs() {
        const totalInvoiceAmount = parseFloat(document.getElementById('totalInvoiceAmount').value);
        const contractTerm = parseInt(document.getElementById('contractTerm').value);
        const licensePercent = parseFloat(document.getElementById('licenseAllocation').value);
        const supportPercent = parseFloat(document.getElementById('supportAllocation').value);
        
        // Basic validation
        if (!totalInvoiceAmount || totalInvoiceAmount <= 0) {
            throw new Error('Please enter a valid total invoice amount');
        }
        
        if (!contractTerm || contractTerm <= 0) {
            throw new Error('Please enter a valid contract term');
        }
        
        if (!licensePercent || licensePercent <= 0) {
            throw new Error('License allocation must be greater than 0%');
        }
        
        if (!supportPercent || supportPercent <= 0) {
            throw new Error('Support allocation must be greater than 0%');
        }
        
        // ASC 606 Step 2 & 3 Validation: Allocation must total 100%
        if (licensePercent + supportPercent !== 100) {
            throw new Error('Performance obligation allocations must total exactly 100%');
        }
        
        return { totalInvoiceAmount, contractTerm, licensePercent, supportPercent };
    }

    calculateRevenue() {
        try {
            const { totalInvoiceAmount, contractTerm, licensePercent, supportPercent } = this.validateInputs();
            
            // ASC 606 Step 4: Allocate transaction price to performance obligations
            const licenseAmount = totalInvoiceAmount * (licensePercent / 100);
            const supportAmount = totalInvoiceAmount * (supportPercent / 100);
            
            // ASC 606 Step 5: Recognize revenue when/as performance obligations are satisfied
            const schedule = this.generateRevenueSchedule(licenseAmount, supportAmount, contractTerm);
            
            this.displayResults(licenseAmount, supportAmount, contractTerm, schedule);
            
        } catch (error) {
            alert(error.message);
        }
    }

    generateRevenueSchedule(licenseAmount, supportAmount, contractTerm) {
        const schedule = [];
        const annualSupportRevenue = supportAmount / contractTerm;
        const monthlySupportRevenue = supportAmount / (contractTerm * 12);
        
        let cumulativeRevenue = 0;
        
        for (let year = 1; year <= contractTerm; year++) {
            let licenseRevenue = 0;
            let supportRevenue = annualSupportRevenue;
            
            // License revenue only recognized in Year 1 (Day 1)
            if (year === 1) {
                licenseRevenue = licenseAmount;
            }
            
            const totalYearRevenue = licenseRevenue + supportRevenue;
            cumulativeRevenue += totalYearRevenue;
            
            schedule.push({
                year: year,
                period: year === 1 ? 'Year 1 (Day 1 + Ratable)' : `Year ${year} (Ratable)`,
                licenseRevenue: licenseRevenue,
                supportRevenue: supportRevenue,
                totalRevenue: totalYearRevenue,
                cumulativeRevenue: cumulativeRevenue,
                monthlySupport: monthlySupportRevenue
            });
        }
        
        return schedule;
    }

    displayResults(licenseAmount, supportAmount, contractTerm, schedule) {
        // Update performance obligation summaries
        document.getElementById('licenseAmount').textContent = this.formatCurrency(licenseAmount);
        document.getElementById('supportAmount').textContent = this.formatCurrency(supportAmount);
        document.getElementById('monthlySupport').textContent = this.formatCurrency(supportAmount / (contractTerm * 12));
        
        // Update revenue schedule table
        const tableBody = document.getElementById('scheduleBody');
        tableBody.innerHTML = '';
        
        schedule.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><strong>${item.period}</strong></td>
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
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }
}

// ASC 606 Compliance Information
class ASC606ComplianceHelper {
    static showComplianceInfo() {
        return {
            step1: "Contract Identification: Software license + support services contract with defined terms",
            step2: "Performance Obligations: (1) Software License - satisfied at point in time, (2) Support Services - satisfied over time",
            step3: "Transaction Price: Total invoice amount allocated based on standalone selling prices (SSP)",
            step4: "Allocation: Revenue allocated to each performance obligation based on relative SSP",
            step5: "Recognition: License revenue recognized when customer gains control (Day 1), Support revenue recognized ratably as services are provided"
        };
    }
    
    static validateSSPAllocation(licensePercent, supportPercent) {
        // In practice, this should be based on actual SSP analysis
        // This is a simplified validation for the common 85/15 split
        const isCommonSplit = (licensePercent === 85 && supportPercent === 15);
        
        return {
            isValid: licensePercent + supportPercent === 100,
            isCommonSplit: isCommonSplit,
            warning: !isCommonSplit ? "Ensure allocation reflects actual standalone selling prices per ASC 606-10-32-31" : null
        };
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LicenseSupportRevenueCalculator();
    
    // Add SSP validation warning if needed
    const licenseInput = document.getElementById('licenseAllocation');
    const supportInput = document.getElementById('supportAllocation');
    
    [licenseInput, supportInput].forEach(input => {
        input.addEventListener('blur', () => {
            const licensePercent = parseFloat(document.getElementById('licenseAllocation').value) || 0;
            const supportPercent = parseFloat(document.getElementById('supportAllocation').value) || 0;
            
            const validation = ASC606ComplianceHelper.validateSSPAllocation(licensePercent, supportPercent);
            
            if (validation.warning) {
                console.warn('ASC 606 SSP Warning:', validation.warning);
            }
        });
    });
});